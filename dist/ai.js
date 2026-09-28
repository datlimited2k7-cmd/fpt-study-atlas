(function () {
  const button = document.getElementById('ai-button');
  const questionInput = document.getElementById('question');
  const answerBox = document.getElementById('answer');
  const conversations = {};
  let busy = false;

  function currentCourse() {
    return document.querySelector('.course-button.active')?.dataset.course || 'MAE101';
  }

  function renderConversation(course) {
    const turns = conversations[course] || [];
    answerBox.replaceChildren();
    for (const turn of turns) {
      const card = document.createElement('div');
      card.className = 'ai-turn';
      const asked = document.createElement('p');
      asked.className = 'ai-question';
      asked.textContent = `Bạn hỏi: ${turn.question}`;
      const replied = document.createElement('div');
      replied.className = 'ai-reply';
      const label = document.createElement('strong');
      label.textContent = 'AI trả lời:';
      const text = document.createElement('p');
      text.textContent = turn.answer;
      replied.append(label, text);
      card.append(asked, replied);
      if (turn.sources.length) {
        const sources = document.createElement('p');
        sources.className = 'citation';
        sources.textContent = `Ngữ cảnh đã dùng: ${turn.sources.join(' · ')}`;
        card.append(sources);
      }
      answerBox.append(card);
    }
    answerBox.scrollTop = answerBox.scrollHeight;
  }

  async function askAi() {
    const question = questionInput.value.trim();
    if (!question || busy) {
      if (!question) answerBox.textContent = 'Hãy nhập câu hỏi trước.';
      return;
    }
    const course = currentCourse();
    busy = true;
    button.disabled = true;
    button.textContent = 'Đang trả lời…';
    const history = (conversations[course] || []).slice(-3).map(({ question, answer }) => ({ question, answer }));
    answerBox.textContent = 'AI đang soạn câu trả lời…';
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course, question, history })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Không thể hỏi AI lúc này.');
      if (typeof data.answer !== 'string' || !data.answer.trim()) throw new Error('AI chưa tạo được câu trả lời. Hãy thử lại.');
      (conversations[course] ||= []).push({ question, answer: data.answer, sources: Array.isArray(data.sources) ? data.sources : [] });
      if (course === currentCourse()) renderConversation(course);
    } catch (error) {
      if (course === currentCourse()) {
        renderConversation(course);
        const message = document.createElement('p');
        message.className = 'ai-error';
        message.textContent = error.message || 'Không thể hỏi AI lúc này.';
        answerBox.append(message);
      }
    } finally {
      busy = false;
      button.disabled = false;
      button.textContent = 'Hỏi AI';
    }
  }

  button.addEventListener('click', askAi);
  questionInput.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.ctrlKey) askAi();
  });
})();
