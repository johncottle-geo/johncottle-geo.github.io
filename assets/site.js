/* Mobile menu toggle and footer year */
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  var q = document.getElementById('pubq');
  if (q) {
    var items = [].slice.call(document.querySelectorAll('.prose p')).filter(function (p) {
      return /^\s*\d+\.\s/.test(p.textContent);
    });
    var count = document.getElementById('pubcount');
    q.addEventListener('input', function () {
      var terms = q.value.toLowerCase().split(/\s+/).filter(Boolean), shown = 0;
      items.forEach(function (p) {
        var t = p.textContent.toLowerCase();
        var ok = terms.every(function (w) { return t.indexOf(w) > -1; });
        p.hidden = !ok;
        if (ok) shown++;
      });
      count.textContent = terms.length ? shown + ' of ' + items.length + ' entries match' : '';
    });
  }
})();
