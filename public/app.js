(function(){
  const courses=window.COURSES, quizzes=window.QUIZZES;
  let courseCode='MAE101', view='map', selected=0, slideIndex=null, quizIndex=0, quizAnswers=new Map(), quizPending=new Map();
  const $=s=>document.querySelector(s);
  const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const allItems=coursesKey=>courses[coursesKey].groups.flatMap((g,gi)=>g.items.map((item,ii)=>({...item,group:g.name,gi,ii})));
  const normalize=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/[^a-z0-9+]+/g,' ').trim();
  const tokens=s=>normalize(s).split(/\s+/).filter(w=>w.length>2&&!['the','and','voi','cua','mot','nhung','trong','nhieu','hoac','lam','cho','can','nao','giua','dien','what','how','la','gi'].includes(w));
  function renderCourses(){ $('#course-list').innerHTML=Object.entries(courses).map(([code,c])=>`<button class="course-button ${code===courseCode?'active':''}" style="--accent:${c.accent}" data-course="${code}" aria-pressed="${code===courseCode}"><span class="course-dot"></span><span><strong>${code}</strong><small>${escapeHTML(c.name)}</small></span></button>`).join(''); document.querySelectorAll('[data-course]').forEach(b=>b.onclick=()=>selectCourse(b.dataset.course)); }
  function renderHeader(){const c=courses[courseCode];document.documentElement.style.setProperty('--accent',c.accent);$('#course-title').textContent=`${courseCode} · ${c.name}`;$('#course-subtitle').textContent=c.scope;$('#course-counter').textContent=`${allItems(courseCode).length} chủ đề`;}
  function topicStatus(item){if(courseCode==='SDI101m'&&item.source.startsWith('Syllabus'))return 'Theo syllabus · chưa có slide trên máy';if(courseCode==='CEA201'&&courses.CEA201.supplementalNumbers.includes(Number(item.title.split('.')[0])))return 'Chương bổ trợ trong bộ slide';return 'Đã có tài liệu học';}
  function paragraphs(value){return String(value||'').split(/\n\s*\n/).filter(Boolean).map(part=>`<p>${escapeHTML(part)}</p>`).join('');}
  function sourceAnchor(label,url){try{const parsed=new URL(url);if(parsed.protocol!=='https:')throw Error('invalid source URL');return `<a href="${escapeHTML(parsed.href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`;}catch{return escapeHTML(label);}}
  function furtherStudy(item){const study=item.openStudy;if(!study)return '';return `<section class="open-study"><h4>Đào sâu từ học liệu mở</h4>${paragraphs(study.note)}<p><strong>Áp dụng:</strong> ${escapeHTML(study.worked)}</p><p class="source-line">${sourceAnchor(study.label,study.url)}${study.extra?` · ${sourceAnchor(study.extra.label,study.extra.url)}`:''}</p></section>`;}
  function practice(item){return item.practice?`<div class="practice-box"><h4>Tự kiểm tra</h4><p>${escapeHTML(item.practice)}</p>${item.answer?`<details><summary>Xem đáp án và cách nghĩ</summary><p>${escapeHTML(item.answer)}</p></details>`:''}</div>`:'';}
  function detail(item){return `<span class="tag">${escapeHTML(item.group)} · ${escapeHTML(topicStatus(item))}</span><h3>${escapeHTML(item.title)}</h3><p class="lead">${escapeHTML(item.idea)}</p><dl><dt>Điểm cần nhớ</dt><dd class="formula">${escapeHTML(item.key)}</dd><dt>Ví dụ nhanh</dt><dd>${escapeHTML(item.example)}</dd></dl><button class="read-lesson" type="button">Học bài đầy đủ →</button><div class="source-line">Nguồn đối chiếu: ${escapeHTML(item.source)}</div>`;}
  function renderMap(){const c=courses[courseCode],items=allItems(courseCode);$('#map-root').textContent=courseCode;$('#map-count').textContent=`${c.groups.length} nhánh · ${items.length} nút`;let k=0;$('#map-groups').innerHTML=c.groups.map(g=>`<div class="map-group"><div class="map-group-title">${escapeHTML(g.name)}</div><div class="map-nodes">${g.items.map(i=>`<button class="map-node ${topicStatus(i).startsWith('Đã')?'':'needs-source'} ${k++===selected?'active':''}" data-index="${k-1}" title="${escapeHTML(topicStatus(i))}">${escapeHTML(i.title)}</button>`).join('')}</div></div>`).join('');$('#map-detail').innerHTML=detail(items[selected]||items[0]);document.querySelectorAll('.map-node').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.index);renderMap();if(window.innerWidth<720)$('#map-detail').scrollIntoView({behavior:'smooth',block:'start'});});$('#map-detail .read-lesson').onclick=()=>{setView('learn');const chapter=$(`#chapter-list .chapter[data-index="${selected}"]`);if(chapter){chapter.open=true;chapter.scrollIntoView({behavior:'smooth',block:'start'});}};}
  function renderLearn(){const c=courses[courseCode];let index=0;$('#chapter-list').innerHTML=c.groups.map(g=>`<div class="chapter-group"><h3>${escapeHTML(g.name)}</h3>${g.items.map(i=>`<details class="chapter" data-index="${index++}"><summary>${escapeHTML(i.title)} <small class="topic-status">${escapeHTML(topicStatus(i))}</small></summary><div class="chapter-body"><p class="lesson-lead">${escapeHTML(i.idea)}</p><h4>Giải thích và cách làm</h4>${paragraphs(i.details)}<h4>Điểm cần nhớ</h4><p class="formula">${escapeHTML(i.key)}</p><h4>Ví dụ có lời giải</h4>${paragraphs(i.example)}${i.pitfall?`<div class="pitfall"><strong>Lỗi dễ mắc</strong><p>${escapeHTML(i.pitfall)}</p></div>`:''}${practice(i)}${furtherStudy(i)}<p class="source-line">Nguồn: ${escapeHTML(i.source)}</p></div></details>`).join('')}</div>`).join('');}
  function score(q,t,boost=1){const target=normalize(t),words=tokens(q);let sum=0;for(const w of words){if(target.includes(w))sum+=w.length>5?2:1;}return sum*boost;}
  function renderQuick(){const suggestions={MAE101:['Quy tắc đạo hàm hàm hợp','Ma trận khả nghịch khi nào?','Tích phân xác định là gì?'],CEA201:['Cache hit và miss là gì?','Chu trình fetch execute','Luật Amdahl dùng để làm gì?'],PRF193:['Mảng bắt đầu từ chỉ số mấy?','Truyền tham chiếu khác gì?','Virtual function là gì?'],SDI101m:['Định luật Coulomb','Tiếp giáp p–n hoạt động thế nào?','MOSFET khác BJT ra sao?']};$('#quick-questions').innerHTML=suggestions[courseCode].map(q=>`<button>${escapeHTML(q)}</button>`).join('');$('#quick-questions').querySelectorAll('button').forEach(b=>b.onclick=()=>{$('#question').value=b.textContent;answerQuestion();});}
  async function loadSlides(){if(slideIndex)return slideIndex;try{const r=await fetch('slide-search.json');if(!r.ok)throw Error('unavailable');slideIndex=await r.json();return slideIndex;}catch{slideIndex=[];return slideIndex;}}
  async function answerQuestion(){const q=$('#question').value.trim();if(!q){$('#answer').innerHTML='<p>Hãy nhập câu hỏi trước.</p>';return;}$('#answer').innerHTML='<p>Đang tìm trong tài liệu…</p>';const chapters=allItems(courseCode).map(i=>({item:i,score:score(q,i.title,3)+score(q,i.idea,2)+score(q,i.details+' '+i.key+' '+i.example)})).sort((a,b)=>b.score-a.score);const slides=(await loadSlides()).filter(s=>s.course===courseCode).map(s=>({...s,score:score(q,s.text+' '+s.deck)})).sort((a,b)=>b.score-a.score);const best=chapters[0],related=chapters.filter(x=>x.score>0).slice(0,2),slideMatches=slides.filter(x=>x.score>0).slice(0,3);if((best?.score||0)<2 && !slideMatches.length){$('#answer').innerHTML='<h3>Chưa tìm được căn cứ đủ gần</h3><p>Thử nêu tên khái niệm, công thức hoặc chương. Tôi sẽ không đoán khi tài liệu không có nội dung phù hợp.</p>';return;}let html='<h3>Gợi ý từ tài liệu</h3>';if(related.length){html+=related.map(({item})=>`<div class="match"><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.idea)} ${escapeHTML(item.details)}</p><p><b>Điểm cần nhớ:</b> ${escapeHTML(item.key)}</p><p><b>Ví dụ:</b> ${escapeHTML(item.example)}</p><span class="citation">${escapeHTML(item.source)}</span></div>`).join('');}if(slideMatches.length){html+='<p class="muted">Slide gần với câu hỏi:</p><ul>'+slideMatches.map(s=>`<li>${escapeHTML(s.deck)}, slide ${s.slide}: ${escapeHTML(s.text.slice(0,180))}</li>`).join('')+'</ul>';}html+='<p class="muted">Đây là kết quả tìm kiếm và tóm lược theo tài liệu, không phải câu trả lời do mô hình AI tạo.</p>';$('#answer').innerHTML=html;}
  function correctIndices(question){return Array.isArray(question.a)?question.a:[question.a];}
  function sameAnswers(left,right){return left.length===right.length&&left.every(index=>right.includes(index));}
  function quizScore(){return [...quizAnswers].filter(([index,answer])=>sameAnswers(correctIndices(quizzes[courseCode][index]),answer)).length;}
  function renderQuizChapters(){
    const chapters=[...new Set(quizzes[courseCode].map(question=>question.chapter).filter(Boolean))];
    $('#quiz-chapter-label').hidden=!chapters.length;
    $('#quiz-chapter').innerHTML=`<option value="">Chọn chương</option>${chapters.map(chapter=>`<option value="${escapeHTML(chapter)}">${escapeHTML(chapter)}</option>`).join('')}`;
  }
  function renderQuiz(){
    const set=quizzes[courseCode],q=set[quizIndex],answer=quizAnswers.get(quizIndex),correct=correctIndices(q),multi=Array.isArray(q.a);
    const pending=quizPending.get(quizIndex)||new Set();
    $('#quiz-progress').textContent=`Câu ${quizIndex+1}/${set.length} · Đã làm ${quizAnswers.size} · Đúng ${quizScore()}`;
    $('#quiz-chapter').value=q.chapter||'';
    $('#quiz-jump').max=String(set.length);
    $('#quiz-jump').value=String(quizIndex+1);
    $('#quiz-prev').disabled=quizIndex===0;
    $('#quiz-card').innerHTML=`<span class="question-number">CÂU ${quizIndex+1} / ${set.length}${q.chapter?` · ${escapeHTML(q.chapter)}`:''}</span><h3>${escapeHTML(q.q)}</h3>${multi?'<p class="quiz-hint">Chọn tất cả đáp án đúng, rồi bấm Kiểm tra.</p>':''}<div class="options">${q.o.map((x,i)=>`<button class="option" data-opt="${i}" ${multi?`aria-pressed="${pending.has(i)}"`:''}>${escapeHTML(x)}</button>`).join('')}</div><div id="quiz-feedback"></div><div class="quiz-actions">${multi&&answer===undefined?'<button id="quiz-check" disabled>Kiểm tra đáp án</button>':''}<button id="quiz-next" style="display:none">${quizIndex===set.length-1?'Xem tiến độ':'Câu tiếp theo'}</button><button id="quiz-restart" class="secondary">Làm lại</button></div>`;
    document.querySelectorAll('.option').forEach((button,index)=>{
      button.onclick=()=>chooseAnswer(index);
      if(answer!==undefined){button.disabled=true;if(correct.includes(index))button.classList.add('correct');else if(answer.includes(index))button.classList.add('wrong');}
      else if(multi&&pending.has(index))button.classList.add('selected');
    });
    if(answer!==undefined){
      $('#quiz-feedback').innerHTML=`<div class="quiz-feedback"><strong>${sameAnswers(correct,answer)?'Chính xác':'Chưa đúng'}</strong><br>${escapeHTML(q.e)}<br><span class="citation">Nguồn: ${escapeHTML(q.s)}</span></div>`;
      $('#quiz-next').style.display='inline-block';
    }
    if(multi&&answer===undefined){
      $('#quiz-check').disabled=pending.size===0;
      $('#quiz-check').onclick=()=>{const selected=quizPending.get(quizIndex);if(selected?.size){quizAnswers.set(quizIndex,[...selected].sort((a,b)=>a-b));renderQuiz();}};
    }
    $('#quiz-next').onclick=()=>{
      if(quizIndex<set.length-1){quizIndex++;renderQuiz();return;}
      $('#quiz-card').innerHTML=`<h3>Tiến độ luyện tập</h3><p>Bạn đã làm <strong>${quizAnswers.size}/${set.length}</strong> câu, đúng <strong>${quizScore()}</strong> câu.</p><div class="quiz-actions"><button id="quiz-again" class="secondary">Làm lại từ đầu</button></div>`;
      $('#quiz-again').onclick=resetQuiz;
    };
    $('#quiz-restart').onclick=resetQuiz;
  }
  function chooseAnswer(index){
    if(quizAnswers.has(quizIndex))return;
    if(!Array.isArray(quizzes[courseCode][quizIndex].a)){quizAnswers.set(quizIndex,[index]);renderQuiz();return;}
    const pending=quizPending.get(quizIndex)||new Set();
    if(pending.has(index))pending.delete(index);else pending.add(index);
    quizPending.set(quizIndex,pending);
    const button=document.querySelector(`.option[data-opt="${index}"]`);
    button.classList.toggle('selected',pending.has(index));
    button.setAttribute('aria-pressed',String(pending.has(index)));
    $('#quiz-check').disabled=pending.size===0;
  }
  function resetQuiz(){quizIndex=0;quizAnswers=new Map();quizPending=new Map();renderQuizChapters();renderQuiz();}
  function renderSources(){
    const c=courses[courseCode],fileList=[...new Set(allItems(courseCode).map(x=>x.source))];
    const openReferences={
      MAE101:[['OpenStax Calculus Volume 1','https://openstax.org/books/calculus-volume-1/pages/preface'],['MIT OpenCourseWare: Linear Algebra','https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/']],
      CEA201:[],
      PRF193:[['Microsoft Learn: Classes and Structs in C++','https://learn.microsoft.com/en-us/cpp/cpp/classes-and-structs-cpp?view=msvc-170']],
      SDI101m:[['OpenStax University Physics 2','https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law'],['MIT OpenCourseWare: Microelectronic Devices and Circuits','https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/pages/lecture-notes/']]
    };
    const focused=allItems(courseCode).filter(item=>item.openStudy).flatMap(item=>[{topic:item.title,label:item.openStudy.label,url:item.openStudy.url},...(item.openStudy.extra?[{topic:item.title,label:item.openStudy.extra.label,url:item.openStudy.extra.url}]:[])]);
    const references=`<article class="source-panel"><h3>Học liệu mở để đào sâu</h3><p>${focused.length} liên kết đã được dùng để biên soạn ghi chú và ví dụ bổ sung theo từng chủ đề. Đây là học liệu tham khảo; phạm vi kiểm tra vẫn theo lớp học.</p>${openReferences[courseCode].length?`<h4>Tổng quan</h4><ul>${openReferences[courseCode].map(([label,url])=>`<li>${sourceAnchor(label,url)}</li>`).join('')}</ul>`:''}<h4>Theo chủ đề</h4><ul>${focused.map(ref=>`<li><strong>${escapeHTML(ref.topic)}:</strong> ${sourceAnchor(ref.label,ref.url)}</li>`).join('')}</ul></article>`;
    const quizSource=courseCode==='CEA201'?'<article class="source-panel"><h3>Ngân hàng câu hỏi bổ sung</h3><p>497 câu CEA201 và lời giải được nhập từ On Tap theo quyền sử dụng do chủ website xác nhận. Bộ câu này là học liệu tự luyện, cần đối chiếu với slide và syllabus khi có khác biệt.</p><a href="https://on-tap.pages.dev/quiz?s=cea201" target="_blank" rel="noopener noreferrer">Xem nguồn On Tap ↗</a></article>':'';
    const coverage=courseCode==='SDI101m'?'Đã đối chiếu 4 CLO và cơ cấu điểm với FLM chính thức. Các chủ đề bán dẫn bám lịch học công khai; hiện chưa có slide 12–28, lab tutorial và sách gốc trên máy, vì vậy phần giải thích vẫn là tóm lược nền tảng cần đối chiếu tiếp.':courseCode==='MAE101'?'Đã đối chiếu trực tiếp 9 CLO, cơ cấu điểm và phạm vi 3 bài kiểm tra với FLM chính thức. Trên máy mới có bản tóm tắt 7 trang, chưa có bộ slide đầy đủ.':courseCode==='CEA201'?'Đã đối chiếu 10 CLO và cơ cấu điểm với FLM chính thức. Logic số, địa chỉ hóa và assembly thuộc nội dung môn; trong 21 chủ đề slide, hệ đếm và điều khiển vi chương trình là nền tảng bổ trợ, chưa có mục riêng trong syllabus đã đối chiếu.':'Đã đối chiếu 6 CLO và cơ cấu điểm với FLM chính thức; 8 bộ slide trên máy hiện bổ sung chuyên đề 71 trang về mô đun và hàm C. Một số bài tập và công thức trong slide cần kiểm tra điều kiện biên trước khi áp dụng.';
    const assessment=c.assessmentNote?`<article class="source-panel"><h3>Đánh giá theo syllabus FLM</h3><p>${escapeHTML(c.assessmentNote)}</p></article>`:'';
    const outcomes=c.cloNote?`<article class="source-panel"><h3>Mục tiêu học tập (CLO)</h3><p>${escapeHTML(c.cloNote)}</p></article>`:'';
    $('#source-content').innerHTML=`<article class="source-panel"><h3>Tài liệu đang dùng</h3><p>${escapeHTML(c.sourceNote)}</p><p><strong>Phạm vi:</strong> ${escapeHTML(c.scope)}</p><a href="${c.sourceLink}" target="_blank" rel="noopener noreferrer">Mở syllabus FLM ↗</a></article>${outcomes}${assessment}${references}${quizSource}<article class="source-panel"><h3>Danh mục nguồn trong bản đồ</h3><ul>${fileList.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></article><article class="source-panel"><h3>Cách dùng khi ôn thi</h3><p>Học ý chính tại đây; với mục có slide trên máy, mở file cùng tên để xem hình và bài tập. Với điểm số, lịch kiểm tra hoặc phạm vi thi, ưu tiên syllabus FLM đúng lớp.</p></article><article class="source-panel"><h3>Độ phủ</h3><p>${escapeHTML(coverage)}</p></article>`;
  }
  function selectCourse(code){courseCode=code;selected=0;resetQuiz();renderCourses();renderHeader();renderMap();renderLearn();renderQuick();$('#answer').innerHTML='<p>Nhập câu hỏi để tìm trong kiến thức của môn đang chọn.</p>';renderSources();}
  function setView(v){view=v;document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active',b.dataset.view===v));document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id===`${v}-view`));}
  function createPrompt(){const q=$('#question').value.trim()||'Hãy giải thích chủ đề tôi đang học';const matches=allItems(courseCode).map(i=>({i,s:score(q,i.title+' '+i.idea+' '+i.details)})).sort((a,b)=>b.s-a.s).slice(0,3);const context=matches.map(({i})=>`${i.title}: ${i.idea} ${i.details} Nguồn: ${i.source}`).join('\n');return `Tôi học ${courseCode} (${courses[courseCode].name}) tại FPT. Hãy trả lời câu hỏi bằng tiếng Việt dễ hiểu, chỉ dựa trên ngữ cảnh dưới đây. Nếu thiếu căn cứ, nói rõ cần kiểm tra syllabus/slide gốc. Hãy giải thích từng bước và nêu 1 bài tập tự luyện.\n\nCâu hỏi: ${q}\n\nNgữ cảnh:\n${context}`;}
  function showPrompt(prompt,message){const box=$('#answer');box.replaceChildren();const note=document.createElement('p');note.textContent=message;const field=document.createElement('textarea');field.className='prompt-preview';field.readOnly=true;field.setAttribute('aria-label','Câu hỏi và ngữ cảnh để dán vào ChatGPT');field.value=prompt;box.append(note,field);return note;}
  async function copyPrompt(){const prompt=createPrompt(),note=showPrompt(prompt,'Bạn có thể sao chép nội dung bên dưới để dán vào ChatGPT.');try{await navigator.clipboard.writeText(prompt);note.textContent='Đã sao chép. Hãy dán nội dung vào ChatGPT.';$('#copy-prompt').textContent='Đã sao chép';}catch{note.textContent='Hãy chọn nội dung bên dưới để tự sao chép và dán vào ChatGPT.';$('#copy-prompt').textContent='Không sao chép tự động được';}}
  document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>setView(b.dataset.view));$('#ask-button').onclick=answerQuestion;$('#question').addEventListener('keydown',e=>{if(e.key==='Enter')answerQuestion();});$('#copy-prompt').onclick=copyPrompt;$('#ai-button').onclick=()=>{const prompt=createPrompt(),note=showPrompt(prompt,'Mở ChatGPT và dán nội dung bên dưới để hỏi AI.');const newTab=window.open('https://chatgpt.com/','_blank');if(newTab)newTab.opener=null;else note.textContent='Trình duyệt chặn tab mới. Hãy mở chatgpt.com rồi dán nội dung bên dưới.';navigator.clipboard.writeText(prompt).then(()=>{if(newTab)note.textContent='Đã sao chép. Hãy dán nội dung vào tab ChatGPT vừa mở.';}).catch(()=>{if(newTab)note.textContent='Hãy chọn nội dung bên dưới để tự sao chép và dán vào tab ChatGPT vừa mở.';});};
  $('#quiz-go').onclick=()=>{const target=Number($('#quiz-jump').value);if(!Number.isInteger(target)||target<1||target>quizzes[courseCode].length){$('#quiz-jump').reportValidity();return;}quizIndex=target-1;renderQuiz();};
  $('#quiz-jump').addEventListener('keydown',event=>{if(event.key==='Enter')$('#quiz-go').click();});
  $('#quiz-prev').onclick=()=>{if(quizIndex>0){quizIndex--;renderQuiz();}};
  $('#quiz-chapter').onchange=event=>{const index=quizzes[courseCode].findIndex(question=>question.chapter===event.target.value);if(index>=0){quizIndex=index;renderQuiz();}};
  const requestedCourse=new URLSearchParams(location.search).get('course');
  selectCourse(courses[requestedCourse]?requestedCourse:courseCode);
  const requestedId=Number(location.hash.match(/^#q=(\d+)$/)?.[1]);
  if(courseCode==='CEA201'&&Number.isInteger(requestedId)&&requestedId>0){
    const index=quizzes.CEA201.findIndex(question=>question.sourceId===requestedId);
    if(index>=0){quizIndex=index;renderQuiz();setView('quiz');}
  }
})();
