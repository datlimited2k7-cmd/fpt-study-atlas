(async function () {
  try {
    const response = await fetch('/api/content', { cache: 'no-store' });
    if (!response.ok) throw new Error('content unavailable');
    const saved = await response.json();
    if (saved.version > 0 && saved.courses && saved.quizzes) {
      for (const [code, groups] of Object.entries(saved.courses)) {
        if (window.COURSES[code] && Array.isArray(groups)) window.COURSES[code].groups = groups;
      }
      for (const [code, questions] of Object.entries(saved.quizzes)) {
        if (window.QUIZZES[code] && Array.isArray(questions)) window.QUIZZES[code] = questions;
      }
    }
  } catch (error) {
    console.error('Không tải được nội dung mới', error);
    const warning = document.createElement('p');
    warning.className = 'content-warning';
    warning.textContent = 'Đang hiển thị bản học liệu có sẵn. Nội dung cập nhật tạm thời chưa tải được.';
    document.querySelector('.main')?.prepend(warning);
  }
  window.applyOpenStudy?.();
  const script = document.createElement('script');
  script.src = '/app.js';
  document.body.append(script);
})();
