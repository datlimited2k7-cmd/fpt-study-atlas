(function () {
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // Preserve only source formatting; code/templates and inequalities remain literal text.
  window.formatQuizText = function (value, rich) {
    if (!rich) return escape(value);
    const tokens = String(value).split(/(<\/?(?:b|i|u|span|br|sup|sub|pre|code|table|tr|th|td)\b[^>]*>|<img\b[^>]*>)/gi);
    return tokens.map((token,index) => {
      if (index % 2 === 0) return escape(token).replace(/&amp;((?:amp|lt|gt|quot|apos|nbsp|#\d+|#x[\da-f]+);)/gi, '&$1');
      const tag = token.match(/^<(\/)?([a-z]+)/i);
      if (tag[2].toLowerCase() !== 'img') return `<${tag[1] || ''}${tag[2].toLowerCase()}>`;
      const src = token.match(/\bsrc="([^"]+)"/i)?.[1];
      const alt = token.match(/\balt="([^"]*)"/i)?.[1] || 'Hình minh họa câu hỏi';
      if (!src || !/^mae101\/[\w/.-]+\.(svg|png)$/.test(src) || src.includes('..')) return escape(token);
      return `<img class="quiz-figure" src="/on-tap/${escape(src)}" alt="${escape(alt)}">`;
    }).join('');
  };
  window.mergeAtlasQuizzes = function (base, saved) {
    const key = q => q.sourceId && (q.source === 'on-tap' || /^On Tap /.test(q.s || '')) ? q.sourceId : null;
    const seen = new Set(saved.map(key).filter(Boolean));
    return saved.concat(base.filter(q => key(q) && !seen.has(key(q))));
  };
})();
