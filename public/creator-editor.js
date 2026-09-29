(async function () {
  const $ = (id) => document.getElementById(id);
  const state = { base: null, courses: null, quizzes: null, version: 0, course: 'MAE101', group: 0, index: 0, tab: 'lesson', dirty: false };
  const setStatus = (message, error = false) => { $('status').textContent = message; $('status').classList.toggle('error', error); };
  const groups = () => state.courses[state.course];
  const items = () => groups()[state.group]?.items || [];
  const questions = () => state.quizzes[state.course];
  const selected = () => state.tab === 'lesson' ? items()[state.index] : questions()[state.index];

  function markDirty() {
    state.dirty = true;
    $('save-all').disabled = false;
    setStatus('Có thay đổi chưa lưu. Nhấn “Lưu thay đổi” để chia sẻ với người học.');
    renderList();
  }

  function field(labelText, key, value, options = {}) {
    const label = document.createElement('label');
    label.className = 'field';
    const title = document.createElement('span');
    title.textContent = labelText;
    const control = options.multiline ? document.createElement('textarea') : document.createElement('input');
    control.name = key;
    control.value = value ?? '';
    control.required = options.required ?? false;
    control.maxLength = options.maxLength ?? 4000;
    if (options.multiline) control.rows = options.rows ?? 3;
    control.addEventListener('input', () => {
      if (key.startsWith('option-')) selected().o[Number(key.slice(7))] = control.value;
      else selected()[key] = control.value;
      markDirty();
    });
    label.append(title, control);
    return label;
  }

  function renderCourses() {
    const select = $('course-select');
    select.replaceChildren();
    for (const [code, course] of Object.entries(state.base.courses)) {
      const option = new Option(`${code} · ${course.name}`, code);
      select.add(option);
    }
    select.value = state.course;
  }

  function renderGroups() {
    const select = $('group-select');
    select.replaceChildren();
    groups().forEach((group, index) => select.add(new Option(group.name, String(index))));
    select.value = String(state.group);
  }

  function renderList() {
    const list = $('item-list');
    list.replaceChildren();
    const rows = state.tab === 'lesson' ? items() : questions();
    if (!rows.length) {
      const empty = document.createElement('p');
      empty.className = 'empty-list';
      empty.textContent = state.tab === 'lesson' ? 'Nhóm này chưa có bài học.' : 'Chưa có câu hỏi.';
      list.append(empty);
      return;
    }
    const query = state.tab === 'quiz' ? $('question-search').value.trim().toLocaleLowerCase() : '';
    let visible = 0;
    rows.forEach((row, index) => {
      if (query && !String(index + 1).includes(query) && !row.q.toLocaleLowerCase().includes(query)) return;
      visible++;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'list-item' + (index === state.index ? ' active' : '');
      button.textContent = `${index + 1}. ${state.tab === 'lesson' ? row.title || 'Bài học mới' : row.q || 'Câu hỏi mới'}`;
      button.onclick = () => { state.index = index; renderList(); renderForm(); };
      list.append(button);
    });
    if (!visible) {
      const empty = document.createElement('p');
      empty.className = 'empty-list';
      empty.textContent = 'Không tìm thấy câu hỏi phù hợp.';
      list.append(empty);
    }
  }

  function renderForm() {
    const form = $('content-form');
    const head = $('form-head');
    form.replaceChildren();
    head.replaceChildren();
    const record = selected();
    if (!record) {
      head.textContent = 'Chọn hoặc thêm một mục để bắt đầu';
      return;
    }
    const heading = document.createElement('h2');
    heading.textContent = state.tab === 'lesson' ? 'Nội dung bài học' : 'Nội dung câu hỏi';
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'delete-item';
    remove.textContent = 'Xóa mục này';
    remove.onclick = () => {
      if (state.tab === 'quiz' && questions().length <= 1) { setStatus('Mỗi môn cần ít nhất một câu hỏi.', true); return; }
      if (!confirm('Xóa mục này? Thay đổi chỉ có hiệu lực sau khi bạn nhấn Lưu.')) return;
      const rows = state.tab === 'lesson' ? items() : questions();
      rows.splice(state.index, 1);
      state.index = Math.min(state.index, rows.length - 1);
      markDirty(); renderList(); renderForm();
    };
    head.append(heading, remove);
    if (state.tab === 'lesson') {
      form.append(
        field('Tiêu đề bài học', 'title', record.title, { required: true, maxLength: 180 }),
        field('Ý chính', 'idea', record.idea, { required: true, maxLength: 1000, multiline: true }),
        field('Giải thích chi tiết', 'details', record.details, { multiline: true }),
        field('Điểm cần nhớ hoặc công thức', 'key', record.key, { maxLength: 1000, multiline: true }),
        field('Ví dụ hoặc cách hiểu', 'example', record.example, { maxLength: 2000, multiline: true }),
        field('Lỗi dễ mắc', 'pitfall', record.pitfall, { maxLength: 1000, multiline: true }),
        field('Câu tự luyện', 'practice', record.practice, { maxLength: 1000, multiline: true }),
        field('Đáp án tự luyện', 'answer', record.answer, { maxLength: 1000, multiline: true }),
        field('Nguồn tài liệu', 'source', record.source, { required: true, maxLength: 500 }),
      );
    } else {
      form.append(field('Câu hỏi', 'q', record.q, { required: true, maxLength: 1000, multiline: true }));
      record.o.forEach((option, index) => {
        const control = field(`Đáp án ${index + 1}`, `option-${index}`, option, { required: true, maxLength: 500 });
        form.append(control);
      });
      const multi = Array.isArray(record.a);
      const mode = document.createElement('label');
      mode.className = 'answer-mode';
      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.checked = multi;
      toggle.onchange = () => {
        record.a = toggle.checked ? [record.a] : (Array.isArray(record.a) ? record.a[0] ?? 0 : record.a);
        markDirty(); renderForm();
      };
      mode.append(toggle, document.createTextNode('Nhiều đáp án đúng'));
      const label = document.createElement('fieldset');
      label.className = 'answer-choices';
      const title = document.createElement('legend');
      title.textContent = 'Đáp án đúng';
      label.append(title);
      const selectedAnswers = new Set(multi ? record.a : [record.a]);
      record.o.forEach((_, index) => {
        const choice = document.createElement('label');
        const input = document.createElement('input');
        input.type = multi ? 'checkbox' : 'radio';
        input.name = 'correct-answer';
        input.checked = selectedAnswers.has(index);
        input.onchange = () => {
          if (multi) {
            record.a = [...label.querySelectorAll('input:checked')].map(control => Number(control.value));
          } else record.a = index;
          markDirty();
        };
        input.value = String(index);
        choice.append(input, document.createTextNode(`Đáp án ${index + 1}`));
        label.append(choice);
      });
      form.append(mode, label,
        field('Giải thích đáp án', 'e', record.e, { required: true, maxLength: 2000, multiline: true }),
        field('Nguồn tài liệu', 's', record.s, { required: true, maxLength: 500 }),
      );
    }
  }

  function render() {
    $('lesson-tab').classList.toggle('active', state.tab === 'lesson');
    $('quiz-tab').classList.toggle('active', state.tab === 'quiz');
    $('lesson-tools').hidden = state.tab !== 'lesson';
    $('quiz-tools').hidden = state.tab !== 'quiz';
    renderCourses(); renderGroups(); renderList(); renderForm();
  }

  $('course-select').onchange = (event) => { state.course = event.target.value; state.group = 0; state.index = 0; render(); };
  $('question-search').oninput = renderList;
  $('group-select').onchange = (event) => { state.group = Number(event.target.value); state.index = 0; renderList(); renderForm(); };
  $('lesson-tab').onclick = () => { state.tab = 'lesson'; state.index = 0; render(); };
  $('quiz-tab').onclick = () => { state.tab = 'quiz'; state.index = 0; render(); };
  $('add-group').onclick = () => {
    const name = $('group-name').value.trim();
    if (!name) { setStatus('Nhập tên nhóm bài trước khi thêm.', true); return; }
    groups().push({ name, items: [] });
    state.group = groups().length - 1; state.index = -1;
    $('group-name').value = '';
    markDirty(); render();
  };
  $('add-lesson').onclick = () => {
    items().push({ title: '', idea: '', details: '', key: '', example: '', pitfall: '', practice: '', answer: '', source: '' });
    state.index = items().length - 1;
    markDirty(); renderList(); renderForm();
    $('content-form').querySelector('input')?.focus();
  };
  $('add-question').onclick = () => {
    $('question-search').value = '';
    questions().push({ q: '', o: ['', '', '', ''], a: 0, e: '', s: '' });
    state.index = questions().length - 1;
    markDirty(); renderList(); renderForm();
    $('content-form').querySelector('textarea')?.focus();
  };
  $('content-form').onsubmit = (event) => event.preventDefault();
  function firstIncomplete() {
    for (const course of Object.keys(state.courses)) {
      for (let group = 0; group < state.courses[course].length; group++) {
        const branch = state.courses[course][group];
        if (!branch.name.trim()) return { course, group, index: 0, tab: 'lesson' };
        for (let index = 0; index < branch.items.length; index++) {
          const item = branch.items[index];
          if (!item.title.trim() || !item.idea.trim() || !item.source.trim()) return { course, group, index, tab: 'lesson' };
        }
      }
      for (let index = 0; index < state.quizzes[course].length; index++) {
        const question = state.quizzes[course][index];
        const correct = Array.isArray(question.a) ? question.a : [question.a];
        if (!question.q.trim() || !question.e.trim() || !question.s.trim() || question.o.some(option => !option.trim()) ||
            !correct.length || correct.some(index => !Number.isInteger(index) || index < 0 || index >= question.o.length)) {
          return { course, group: 0, index, tab: 'quiz' };
        }
      }
    }
    return null;
  }
  $('save-all').onclick = async () => {
    const missing = firstIncomplete();
    if (missing) {
      Object.assign(state, missing);
      render();
      $('content-form').reportValidity();
      setStatus('Còn mục chưa đủ tiêu đề, nội dung hoặc nguồn. Hãy điền mục đang mở rồi lưu lại.', true);
      return;
    }
    if (!$('content-form').reportValidity()) { setStatus('Hãy điền đủ nội dung của mục đang chọn.', true); return; }
    const save = $('save-all');
    save.disabled = true;
    setStatus('Đang lưu…');
    try {
      const response = await fetch('/api/creator/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courses: state.courses, quizzes: state.quizzes, version: state.version }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Không lưu được nội dung.');
      state.version = result.version;
      state.dirty = false;
      setStatus('Đã lưu. Người học mở trang hoặc tải lại sẽ thấy nội dung mới.');
    } catch (error) {
      save.disabled = false;
      setStatus(error.message || 'Không lưu được nội dung.', true);
    }
  };
  window.addEventListener('beforeunload', event => {
    if (state.dirty) { event.preventDefault(); event.returnValue = ''; }
  });

  try {
    const [baseResponse, savedResponse] = await Promise.all([
      fetch('/base-content.json', { cache: 'no-store' }),
      fetch('/api/content', { cache: 'no-store' }),
    ]);
    if (!baseResponse.ok || !savedResponse.ok) throw new Error('Không tải được nội dung. Vui lòng tải lại trang.');
    state.base = await baseResponse.json();
    const saved = await savedResponse.json();
    state.courses = Object.fromEntries(Object.entries(state.base.courses).map(([code, course]) => [code, structuredClone(course.groups)]));
    state.quizzes = structuredClone(state.base.quizzes);
    if (saved.version > 0) {
      for (const code of Object.keys(state.courses)) {
        if (saved.courses?.[code]) state.courses[code] = saved.courses[code];
        if (saved.quizzes?.[code]) state.quizzes[code] = saved.quizzes[code];
      }
      state.version = saved.version;
    }
    $('editor').hidden = false;
    setStatus('Nội dung đã sẵn sàng. Chọn bài học hoặc câu hỏi để sửa.');
    render();
  } catch (error) {
    setStatus(error.message || 'Không tải được nội dung. Vui lòng tải lại trang.', true);
  }
})();
