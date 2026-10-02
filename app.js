/* 렌더링, 상세 팝업, 모션. 내용은 content.js에서 고칩니다. */
(function () {
  'use strict';
  var YS = window.YS;
  var html = document.documentElement;
  var motion = html.classList.contains('motion-on');
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 〔 〕 자리 표시를 점선 박스로 */
  var t = function (s) { return String(s == null ? '' : s).replace(/〔([^〕]*)〕/g, '<span class="todo">〔$1〕</span>'); };
  var plain = function (s) { return String(s).replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, ''); };

  /* ---------- 작업 카드용 그래픽 (이미지가 없는 프로젝트) ---------- */
  var ART = {
    script:
      '<div class="art art-script"><div class="sheet">' +
      '<div class="slug">S#12. 연습실 — 밤</div>' +
      '<div class="who">인물</div>' +
      '<div class="say">괜찮아. 나는 <mark>원래 혼자가 편해.</mark></div>' +
      '<div class="note" style="top:44%"><b>✳ QUESTION</b>이 말은 진심일까요, 방어일까요? 앞 장면의 선택과 비교해 보세요.</div>' +
      '<div class="who memo" style="margin-top:3.2em">배우 메모</div>' +
      '<div class="say memo">‘원래’에 힘을 줄지 고민 중…</div>' +
      '</div><span class="art-caption">illustration</span></div>',
    paper:
      '<div class="art art-paper"><span class="first">1ST AUTHOR</span><div class="sheet">' +
      '<div class="t">Pally</div><i></i><i></i><i></i><i></i><i></i><i></i><i></i>' +
      '<span class="stamp">UNDER REVIEW</span></div></div>',
    chat:
      '<div class="art art-chat"><div class="phone">' +
      '<div class="cap">MATE</div>' +
      '<div class="b ai">Hi! How was your weekend?</div>' +
      '<div class="b me">I go to the beach with my friends.</div>' +
      '<div class="b fix">✳ Tip: “I <b>went</b> to the beach”</div>' +
      '<div class="b ai">Sounds fun! What did you do there?</div>' +
      '</div><span class="art-caption">illustration</span></div>'
  };

  /* ---------- 렌더: 작업 ---------- */
  var projects = $('#projects');
  YS.work.forEach(function (w) {
    var el = document.createElement('article');
    el.className = 'project';
    el.dataset.open = w.id;
    el.dataset.cursor = 'VIEW';
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', plain(w.title) + ' 자세히 보기');
    var media = w.img
      ? '<img src="' + w.img + '" alt="" loading="lazy">'
      : (ART[w.art] || '');
    el.innerHTML =
      '<div class="project-media">' + media + '</div>' +
      '<div class="project-text">' +
        '<p class="project-meta"><span class="project-no">' + w.index + '</span><span>' + w.category + '</span><span>· ' + w.year + '</span>' +
        (w.status ? '<span class="badge">' + w.status + '</span>' : '') + '</p>' +
        '<h3>' + t(w.title) + '</h3>' +
        '<p>' + t(w.summary) + '</p>' +
        '<ul class="tags">' + w.tags.map(function (x) { return '<li>' + t(x) + '</li>'; }).join('') + '</ul>' +
        '<span class="more"><span>자세히 보기</span></span>' +
      '</div>';
    projects.appendChild(el);
  });

  /* ---------- 렌더: 데모 릴 ---------- */
  var reel = $('#reel');
  YS.reel.forEach(function (r) {
    var b = document.createElement(r.placeholder ? 'div' : 'button');
    b.className = 'reel-card' + (r.placeholder ? ' is-placeholder' : '');
    var parts = r.ar.split('/');
    var ratio = parseFloat(parts[0]) / parseFloat(parts[1]);
    b.style.aspectRatio = '';
    b.style.width = 'min(86vw, calc((clamp(300px, 52vh, 520px) - 52px) * ' + ratio.toFixed(3) + '))';
    var frame;
    if (r.placeholder) {
      frame = '<div class="frame">' + t(r.title) + '<br>영상이나 사진을 넣을 자리</div>';
    } else if (r.youtube) {
      b.type = 'button';
      b.dataset.yt = r.youtube;
      b.dataset.cursor = 'PLAY';
      frame = '<div class="frame"><div class="yt-fallback">' + r.title + '</div>' +
        '<img src="https://i.ytimg.com/vi/' + r.youtube + '/hqdefault.jpg" alt="" loading="lazy" onerror="this.remove()" style="position:relative">' +
        '<span class="play" aria-hidden="true">▶</span></div>';
    } else {
      b.type = 'button';
      b.dataset.open = r.open;
      b.dataset.cursor = 'VIEW';
      frame = '<div class="frame"><img src="' + r.img + '" alt="" loading="lazy"></div>';
    }
    b.innerHTML = frame + '<div class="cap"><b>' + t(r.title) + '</b><span>' + r.meta + '</span></div>';
    if (!r.placeholder) b.setAttribute('aria-label', plain(r.title) + (r.youtube ? ' 영상 재생' : ' 자세히 보기'));
    reel.appendChild(b);
  });
  $('#reel-total').textContent = String(YS.reel.length).padStart(2, '0');

  /* ---------- 렌더: 아카이브 ---------- */
  var arch = $('#archive-list');
  YS.archive.forEach(function (y, i) {
    var d = document.createElement('details');
    d.className = 'year';
    if (i === 0) d.open = true;
    d.innerHTML = '<summary><b>' + y.year + '</b><span>' + y.label + '</span><i aria-hidden="true">+</i></summary>' +
      '<ul>' + y.items.map(function (it) {
        return '<li><b>' + t(it[0]) + '</b><span>' + t(it[1]) + '</span>' +
          (it[2] ? '<button type="button" data-open="' + it[2] + '">자세히 →</button>' : '<span></span>') + '</li>';
      }).join('') + '</ul>';
    arch.appendChild(d);
  });

  /* ---------- 연락처 ---------- */
  $('#email-text').textContent = YS.profile.email;
  $('#links').innerHTML = YS.profile.links.map(function (l) {
    return '<li><a href="' + l[1] + '" target="_blank" rel="noopener">' + l[0] + '</a></li>';
  }).join('');

  var toast = $('.toast'), toastTimer;
  function say(msg) {
    toast.textContent = msg; toast.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }
  $('#copy-email').addEventListener('click', function () {
    var mail = YS.profile.email;
    var done = function () { say('이메일 주소를 복사했습니다.'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(mail).then(done, function () { location.href = 'mailto:' + mail; });
    } else { location.href = 'mailto:' + mail; }
  });

  /* ---------- 상세 팝업 ---------- */
  var dialog = $('#case'), body = $('#case-body');
  var lastFocus = null;

  function caseData(id) {
    var w = YS.work.filter(function (x) { return x.id === id; })[0];
    if (w) return Object.assign({ title: w.title, img: w.img, art: w.art, video: w.video }, w.detail);
    return YS.extra[id] || null;
  }

  function renderCase(id) {
    var c = caseData(id);
    if (!c) return false;
    var i = 0;
    var a = function () { return 'data-i style="--i:' + (i++) + '"'; };
    var hero = '';
    if (c.video) hero = '<div class="case-hero" ' + a() + '><iframe src="https://www.youtube-nocookie.com/embed/' + c.video + '" title="데모 영상" allow="encrypted-media; picture-in-picture; fullscreen" loading="lazy"></iframe></div>';
    else if (c.img) hero = '<div class="case-hero" ' + a() + '><img src="' + c.img + '" alt=""></div>';
    else if (c.art && ART[c.art]) hero = '<div class="case-hero" ' + a() + '>' + ART[c.art] + '</div>';
    var out =
      '<p class="kicker" ' + a() + '>' + t(c.kicker) + '</p>' +
      '<h2 id="case-title" ' + a() + '>' + t(c.title) + '</h2>' +
      '<p class="intro" ' + a() + '>' + t(c.intro) + '</p>' + hero +
      '<dl class="case-facts" ' + a() + '><div><dt>MY ROLE</dt><dd>' + t(c.role) + '</dd></div><div><dt>OUTPUT</dt><dd>' + t(c.output) + '</dd></div></dl>';
    if (c.stats) {
      out += '<div class="stats" ' + a() + '>' + c.stats.map(function (s) {
        return '<div><b data-count="' + s[0] + '" data-unit="' + s[1] + '">' + s[0] + s[1] + '</b><span>' + s[2] + '</span></div>';
      }).join('') + '</div><p class="stat-source">' + (c.statSource || '') + '</p>';
    }
    out += (c.sections || []).map(function (s) {
      return '<section class="case-sec" ' + a() + '><h3>' + s[0] + '</h3><p>' + t(s[1]) + '</p></section>';
    }).join('');
    if (c.gallery) out += '<div class="gallery">' + c.gallery.map(function (g) { return '<img ' + a() + ' src="' + g + '" alt="" loading="lazy">'; }).join('') + '</div>';
    if (c.links) out += '<div class="case-links" ' + a() + '>' + c.links.map(function (l) { return '<a href="' + l[1] + '" target="_blank" rel="noopener">' + l[0] + ' ↗</a>'; }).join('') + '</div>';
    if (c.note) out += '<p class="case-note" ' + a() + '>' + t(c.note) + '</p>';
    body.innerHTML = out;
    return true;
  }

  function renderVideo(id, title) {
    body.innerHTML = '<p class="kicker">DEMO</p><h2 id="case-title">' + title + '</h2>' +
      '<div class="case-hero"><iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1" title="' + title + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen"></iframe></div>';
  }

  function countUp() {
    $$('[data-count]', body).forEach(function (el) {
      var end = Number(el.dataset.count), unit = el.dataset.unit || '';
      var dec = String(end).indexOf('.') > -1 ? 1 : 0;
      if (!motion) return;
      var t0 = performance.now() + 300, dur = 1100;
      (function step(now) {
        var k = Math.min(1, Math.max(0, (now - t0) / dur));
        var e = 1 - Math.pow(1 - k, 4);
        el.textContent = (end * e).toFixed(dec) + unit;
        if (k < 1) requestAnimationFrame(step);
      })(performance.now());
    });
  }

  function open(kind, id, title) {
    lastFocus = document.activeElement;
    if (kind === 'video') renderVideo(id, title); else if (!renderCase(id)) return;
    body.classList.remove('is-in');
    dialog.scrollTop = 0;
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
    html.style.overflow = 'hidden';
    requestAnimationFrame(function () { requestAnimationFrame(function () { body.classList.add('is-in'); countUp(); }); });
  }
  function close() {
    if (dialog.open) dialog.close();
  }
  dialog.addEventListener('close', function () {
    html.style.overflow = '';
    body.innerHTML = '';
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  });
  $('.case-close').addEventListener('click', close);
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) {
      var r = dialog.getBoundingClientRect();
      if (e.clientX < r.left) close();
    }
  });

  document.addEventListener('click', function (e) {
    var yt = e.target.closest('[data-yt]');
    if (yt) { open('video', yt.dataset.yt, plain($('b', yt).innerHTML)); return; }
    var o = e.target.closest('[data-open]');
    if (o && !dialog.contains(o)) open('case', o.dataset.open);
  });
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('.project')) {
      e.preventDefault(); open('case', e.target.dataset.open);
    }
  });

  /* ---------- 텍스트 쪼개기 (제목이 아래에서 올라오는 효과) ---------- */
  function split(el) {
    var n = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (ch) {
        if (ch.nodeType === 3) {
          var frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var w = document.createElement('span'); w.className = 'split-w';
            var inner = document.createElement('i'); inner.textContent = part; inner.style.setProperty('--d', n++);
            w.appendChild(inner); frag.appendChild(w);
          });
          ch.parentNode.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== 'BR') walk(ch);
      });
    })(el);
  }
  if (motion) $$('[data-split]').forEach(split);

  /* ---------- 나타나기 ---------- */
  /* 화면에 들어온 요소에 is-in 클래스를 붙입니다 (스크롤 때마다 확인) */
  var pending = $$('[data-reveal], [data-split], .project');
  if (!motion) { pending.forEach(function (el) { el.classList.add('is-in'); }); pending = []; }
  function reveal() {
    if (!pending.length) return;
    var line = window.innerHeight * 0.9;
    pending = pending.filter(function (el) {
      if (el.getBoundingClientRect().top < line) { el.classList.add('is-in'); return false; }
      return true;
    });
  }
  window.addEventListener('load', function () { html.classList.add('is-loaded'); });
  setTimeout(function () { html.classList.add('is-loaded'); }, 60);

  /* ---------- 스크롤: 헤더, 진행바, 가로 릴 ---------- */
  var header = $('.site-header'), bar = $('.progress i');
  var reelSec = $('#demo'), reelTrack = $('#reel'), reelBar = $('.reel-bar i'), reelNo = $('.reel-count b');
  var themed = $$('main > [data-theme]');
  var lastY = 0, pinned = false, maxShift = 0;

  function measure() {
    var wantPin = motion && window.innerWidth >= 900 && window.innerHeight >= 560;
    reelSec.classList.toggle('is-pinned', wantPin);
    pinned = wantPin;
    reelTrack.style.transform = '';
    if (pinned) {
      maxShift = Math.max(0, reelTrack.scrollWidth - window.innerWidth);
      reelSec.style.setProperty('--reel-h', (window.innerHeight + maxShift) + 'px');
    } else {
      reelSec.style.removeProperty('--reel-h');
    }
    onScroll();
  }

  function onScroll() {
    reveal();
    var y = window.scrollY, vh = window.innerHeight;
    var doc = document.documentElement.scrollHeight - vh;
    bar.style.transform = 'scaleX(' + (doc > 0 ? y / doc : 0) + ')';

    header.classList.toggle('is-solid', y > 40);
    header.classList.toggle('is-hidden', y > lastY && y > vh * .8 && !dialog.open);
    lastY = y;

    var probe = y + 32, theme = 'dark';
    themed.forEach(function (s) { if (s.offsetTop <= probe) theme = s.dataset.theme; });
    header.classList.toggle('on-light', theme === 'light');
    if (cur.el) cur.el.classList.toggle('on-light', theme === 'light');

    var k;
    if (pinned) {
      var top = reelSec.offsetTop, len = reelSec.offsetHeight - vh;
      k = Math.min(1, Math.max(0, (y - top) / (len || 1)));
      reelTrack.style.transform = 'translate3d(' + (-maxShift * k).toFixed(1) + 'px,0,0)';
    } else {
      var sw = reelTrack.scrollWidth - reelTrack.clientWidth;
      k = sw > 0 ? reelTrack.scrollLeft / sw : 0;
    }
    reelBar.style.transform = 'scaleX(' + (0.2 + 0.8 * k) + ')';
    var n = YS.reel.length;
    reelNo.textContent = String(Math.min(n, 1 + Math.round(k * (n - 1)))).padStart(2, '0');
  }
  var ticking = false;
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; onScroll(); }); } }
  window.addEventListener('scroll', req, { passive: true });
  reelTrack.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', function () { clearTimeout(measure.t); measure.t = setTimeout(measure, 120); });

  /* ---------- 커서 ---------- */
  var cur = { el: $('.cursor'), label: $('.cursor-label'), x: -100, y: -100, tx: -100, ty: -100 };
  var fine = window.matchMedia && matchMedia('(pointer: fine) and (hover: hover)').matches;
  if (motion && fine) {
    html.classList.add('has-cursor');
    document.addEventListener('pointermove', function (e) { cur.tx = e.clientX; cur.ty = e.clientY; }, { passive: true });
    document.addEventListener('pointerover', function (e) {
      var tag = e.target.closest('[data-cursor]');
      var link = e.target.closest('a, button, summary');
      cur.el.classList.toggle('is-big', !!tag);
      cur.el.classList.toggle('is-link', !tag && !!link);
      cur.label.textContent = tag ? tag.dataset.cursor : '';
    });
    document.addEventListener('pointerleave', function () { cur.tx = cur.ty = -100; });
    (function loop() {
      cur.x += (cur.tx - cur.x) * 0.22; cur.y += (cur.ty - cur.y) * 0.22;
      cur.el.style.transform = 'translate3d(' + cur.x.toFixed(1) + 'px,' + cur.y.toFixed(1) + 'px,0)';
      requestAnimationFrame(loop);
    })();
  }

  measure();
  window.addEventListener('load', measure);
})();
