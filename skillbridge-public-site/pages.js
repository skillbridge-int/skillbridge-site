(function () {
  'use strict';
  var S = window.SB, el = S.el, t = S.t, $ = S.$;

  function empty(key) { return el('p', { class: 'notice', text: t(key) }); }
  function failed() { return el('p', { class: 'notice', text: t('err_generic') }); }

  /* ---------- enroll dialog ---------- */
  function openEnroll(c) {
    S.get('public_classes', 'select=*&course_id=eq.' + encodeURIComponent(c.id) + '&order=start_date.asc').catch(function () { return []; }).then(function (cls) {
      var chosen = '';
      var list = el('div');
      function opt(value, label, sub, disabled) {
        var inp = el('input', { type: 'radio', name: 'cls', value: value, disabled: disabled || null, checked: value === '' ? true : null });
        inp.addEventListener('change', function () { chosen = value; });
        return el('label', { class: 'opt' + (disabled ? ' dis' : '') }, inp, el('span', null, el('b', { text: label }), sub ? el('br') : null, sub ? el('small', { class: 'muted', text: sub }) : null));
      }
      list.appendChild(opt('', t('class_any'), cls.length ? '' : t('no_class')));
      cls.forEach(function (k) {
        var full = k.seats_left === 0;
        var bits = [];
        if (k.start_date) bits.push(t('starts') + ' ' + S.dateText(k.start_date));
        if (k.schedule_note) bits.push(k.schedule_note);
        bits.push(t('taught_by') + ' ' + S.pick(k, 'teacher'));
        bits.push(full ? t('full') : (k.seats_left != null ? k.seats_left + ' ' + t('seats_left') : ''));
        list.appendChild(opt(k.id, k.name, bits.filter(Boolean).join(' · '), full));
      });
      var modal = el('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true', onclick: function (e) { if (e.target === modal) close(); } },
        el('div', { class: 'sheet' },
          el('h2', { text: S.pick(c, 'title') }), el('p', { class: 'meta', text: S.money(c.price) }),
          el('h3', { text: t('choose_class'), style: 'margin-top:14px' }), list,
          el('div', { class: 'row' },
            el('button', { type: 'button', class: 'btn line', onclick: function () { close(); }, text: '×' }),
            el('button', { type: 'button', class: 'btn', onclick: function () {
              S.cart.add({ type: 'course', id: c.id, class_id: chosen || null, qty: 1, title: S.pick(c, 'title'), class_name: chosen ? (cls.filter(function (k) { return k.id === chosen; })[0] || {}).name : '', price: c.price });
              location.href = 'checkout.html';
            }, text: t('add_cart') }))));
      function close() { modal.remove(); document.removeEventListener('keydown', esc); }
      function esc(e) { if (e.key === 'Escape') close(); }
      document.addEventListener('keydown', esc);
      document.body.appendChild(modal);
      var f = modal.querySelector('input'); if (f) f.focus();
    });
  }

  function loadCourses(target, limit) {
    S.get('public_courses', 'select=*&order=title_en.asc' + (limit ? '&limit=' + limit : '')).then(function (rows) {
      S.clear(target);
      if (!rows.length) return target.appendChild(empty('empty_courses'));
      target.appendChild(el('ul', { class: 'clist' }, rows.map(function (c) { return S.courseRow(c, openEnroll); })));
    }).catch(function () { S.clear(target).appendChild(failed()); });
  }

  function loadTeachers(target, limit) {
    Promise.all([S.get('public_teachers', 'select=*&order=name_en.asc' + (limit ? '&limit=' + limit : '')), S.get('public_classes', 'select=teacher_id,course_id').catch(function () { return []; }), S.get('public_courses', 'select=id,title_en,title_ar').catch(function () { return []; })])
      .then(function (r) {
        var rows = r[0], cl = r[1], cs = r[2]; S.clear(target);
        if (!rows.length) return target.appendChild(empty('empty_teachers'));
        target.appendChild(el('ul', { class: 'tgrid' }, rows.map(function (x) {
          var ids = {}; cl.forEach(function (k) { if (k.teacher_id === x.id) ids[k.course_id] = 1; });
          var names = cs.filter(function (c) { return ids[c.id]; }).map(function (c) { return S.pick(c, 'title'); });
          return S.teacherFigure(x, names);
        })));
      }).catch(function () { S.clear(target).appendChild(failed()); });
  }

  function bookCard(b) {
    var fm = [];
    function add(fmt, price, label) {
      var inCart = S.cart.has('book', b.id, fmt);
      var btn = el('button', { type: 'button', class: 'btn sm', disabled: (fmt === 'physical' && !b.in_stock) || inCart ? true : null,
        onclick: function (e) { S.cart.add({ type: 'book', id: b.id, format: fmt, qty: 1, title: S.pick(b, 'title') + ' (' + label + ')', price: price }); e.currentTarget.disabled = true; e.currentTarget.textContent = t('in_cart'); },
        text: fmt === 'physical' && !b.in_stock ? t('out_of_stock') : (inCart ? t('in_cart') : t('add_cart')) });
      fm.push(el('div', { class: 'fmt' }, el('span', null, el('b', { text: S.money(price) }), ' ', label), btn));
    }
    if (b.has_digital) add('digital', b.price_digital, t('format_digital'));
    if (b.has_physical) add('physical', b.price_physical, t('format_physical'));
    return el('li', { class: 'book' }, el('div', { class: 'bcover' }, S.bookCover(b)), el('h3', { text: S.pick(b, 'title') }),
      b.author ? el('p', { class: 'meta', text: t('by') + ' ' + b.author }) : null,
      S.pick(b, 'description') ? el('p', { class: 'meta', text: S.pick(b, 'description') }) : null, el('div', { class: 'fmts' }, fm));
  }
  function loadBooks(target, limit) {
    S.get('public_books', 'select=*&order=title_en.asc' + (limit ? '&limit=' + limit : '')).then(function (rows) {
      S.clear(target);
      if (!rows.length) return target.appendChild(empty('empty_books'));
      target.appendChild(el('ul', { class: 'bgrid' }, rows.map(bookCard)));
    }).catch(function () { S.clear(target).appendChild(failed()); });
  }

  /* ---------- checkout ---------- */
  function checkout(root) {
    S.settings().then(function (st) {
      var items = S.cart.items();
      if (!items.length) {
        S.clear(root).appendChild(el('div', { class: 'wrap', style: 'padding:48px 0;text-align:center' }, el('p', { text: t('cart_empty') }), el('a', { class: 'btn', href: 'courses.html', text: t('cart_empty_cta') })));
        return;
      }
      var physical = items.some(function (i) { return i.type === 'book' && i.format === 'physical'; });
      var fee = physical ? Number(st.delivery_fee || 0) : 0;
      var sub = items.reduce(function (a, i) { return a + Number(i.price || 0) * (i.qty || 1); }, 0);
      var method = 'bank_transfer';
      var err = el('p', { class: 'err', role: 'alert' });
      var payInfo = el('div');
      function paintPay() {
        S.clear(payInfo);
        var note = st['payment_note_' + S.lang] || st.payment_note_en || '';
        var rows = [];
        if (method === 'bank_transfer') { rows = [[t('bank'), st.bank_name], [t('account_name'), st.bank_account_name], [t('account_no'), st.bank_account_number]]; }
        else if (method === 'wallet') { rows = [[t('wallet'), st.wallet_name], [t('wallet_no'), st.wallet_number]]; }
        if (method === 'cash') { payInfo.appendChild(el('div', { class: 'paybox', text: t('pay_cash_d') })); return; }
        var dl = el('dl'); rows.forEach(function (r) { if (r[1]) { dl.appendChild(el('dt', { text: r[0] })); dl.appendChild(el('dd', { text: r[1], dir: 'ltr' })); } });
        payInfo.appendChild(el('div', { class: 'paybox' }, el('p', { text: method === 'bank_transfer' ? t('pay_bank_d') : t('pay_wallet_d') }), dl, note ? el('p', { class: 'meta', text: note, style: 'margin-top:8px' }) : null));
      }
      function radio(v, label) {
        var i = el('input', { type: 'radio', name: 'pm', value: v, checked: v === method ? true : null });
        i.addEventListener('change', function () { method = v; paintPay(); });
        return el('label', { class: 'opt' }, i, el('span', { text: label }));
      }
      var sumBox = el('div', { class: 'summary' });
      function paintSum() {
        S.clear(sumBox); var cur = S.cart.items();
        sumBox.appendChild(el('h2', { text: t('cart_title'), style: 'margin-bottom:8px' }));
        cur.forEach(function (i, idx) {
          sumBox.appendChild(el('div', { class: 'line-item' }, el('span', null, i.title, i.class_name ? el('small', { class: 'muted', text: ' · ' + i.class_name }) : null),
            el('span', null, el('b', { text: S.money(Number(i.price || 0) * (i.qty || 1)) }), ' ', el('button', { type: 'button', class: 'x', onclick: function () { S.cart.remove(idx); location.reload(); }, text: t('remove') }))));
        });
        if (fee) sumBox.appendChild(el('div', { class: 'line-item' }, el('span', { text: t('delivery') }), el('b', { text: S.money(fee) })));
        sumBox.appendChild(el('div', { class: 'tot' }, el('span', { text: t('total') }), el('span', { text: S.money(sub + fee) })));
      }
      function field(key, name, type, req, extra) { return el('label', { class: 'f' }, t(key), el('input', Object.assign({ type: type || 'text', name: name, required: req ? true : null, autocomplete: 'off' }, extra || {}))); }
      var file = el('input', { type: 'file', name: 'receipt', accept: 'image/*,application/pdf' });
      var go = el('button', { type: 'submit', class: 'btn', text: t('place_order') });
      var form = el('form', { class: 'form', novalidate: false },
        el('div', { class: 'two' }, field('f_name', 'customer_name', 'text', true, { autocomplete: 'name' }), field('f_phone', 'phone', 'tel', true, { autocomplete: 'tel', dir: 'ltr' })),
        el('div', { class: 'two' }, field('f_student', 'student_name', 'text', false), field('f_email', 'email', 'email', false, { autocomplete: 'email', dir: 'ltr' })),
        physical ? el('div', { class: 'two' }, field('f_city', 'city', 'text', true), field('f_address', 'address', 'text', true)) : null,
        el('label', { class: 'f' }, t('f_notes'), el('textarea', { name: 'notes', rows: 2 })),
        el('div', { class: 'hp', 'aria-hidden': 'true' }, el('label', null, 'Website', el('input', { type: 'text', name: 'website', tabindex: '-1', autocomplete: 'off' }))),
        el('h2', { text: t('pay_title') }),
        el('div', null, radio('bank_transfer', t('pay_bank')), radio('wallet', t('pay_wallet')), radio('cash', t('pay_cash'))),
        payInfo,
        el('label', { class: 'f' }, t('receipt'), file, el('small', { class: 'muted', text: t('receipt_hint') })),
        err, go);
      form.addEventListener('submit', function (e) {
        e.preventDefault(); err.textContent = '';
        var f = file.files && file.files[0];
        if (f && f.size > 5 * 1024 * 1024) { err.textContent = t('err_size'); return; }
        var d = new FormData(form); var cur = S.cart.items();
        var body = { customer_name: d.get('customer_name'), student_name: d.get('student_name'), phone: d.get('phone'), email: d.get('email'),
          city: d.get('city') || '', address: d.get('address') || '', notes: d.get('notes'), website: d.get('website'), lang: S.lang, payment_method: method,
          items: cur.map(function (i) { return { type: i.type, id: i.id, class_id: i.class_id || null, format: i.format || null, qty: i.qty || 1 }; }) };
        go.disabled = true; go.textContent = t('placing');
        S.rpc('place_order', body).then(function (o) {
          S.cart.clear();
          var done = function () { location.href = 'order.html#' + o.id + '.' + o.token; };
          if (!f) return done();
          var ext = (f.name.split('.').pop() || 'jpg').replace(/[^a-z0-9]/gi, '').slice(0, 5) || 'jpg';
          return S.upload('receipts', o.id + '/receipt-' + Date.now() + '.' + ext, f).then(function (p) { return S.rpc('attach_receipt', { p_id: o.id, p_token: o.token, p_path: p }); }).then(done, done);
        }).catch(function (x) { go.disabled = false; go.textContent = t('place_order'); err.textContent = (x && x.message && !/failed|fetch/i.test(x.message)) ? x.message : t('err_generic'); });
      });
      paintSum(); paintPay();
      S.clear(root).appendChild(el('div', { class: 'wrap layout2' }, el('div', null, el('h1', { text: t('cart_title'), style: 'font-size:1.8rem;margin-bottom:16px' }), form), sumBox));
    });
  }

  /* ---------- order status ---------- */
  function order(root) {
    var h = (location.hash || '').replace('#', '').split('.');
    var id = h[0], tok = h[1];
    function bad() { S.clear(root).appendChild(el('div', { class: 'wrap', style: 'padding:48px 0' }, el('p', { class: 'notice', text: t('order_not_found') }), el('p', { style: 'text-align:center' }, el('a', { class: 'btn', href: 'index.html', text: t('nav_courses') })))); }
    if (!id || !tok) return bad();
    S.settings().then(function (st) {
      S.rpc('order_status', { p_id: id, p_token: tok }).then(function (o) {
        var s = o.status, kids = [];
        kids.push(el('span', { class: 'badge ' + s, text: t('st_' + s) }), el('p', { text: t('st_' + s + '_d'), style: 'margin-top:10px' }));
        if (o.admin_note) kids.push(el('p', null, el('b', { text: t('note_from_us') + ': ' }), o.admin_note));
        var items = el('div', null, (o.items || []).map(function (i) { return el('div', { class: 'line-item' }, el('span', { text: i.title + (i.qty > 1 ? ' × ' + i.qty : '') }), el('b', { text: S.money(i.unit_price * i.qty) })); }));
        if (Number(o.delivery_fee)) items.appendChild(el('div', { class: 'line-item' }, el('span', { text: t('delivery') }), el('b', { text: S.money(o.delivery_fee) })));
        items.appendChild(el('div', { class: 'tot' }, el('span', { text: t('total') }), el('span', { text: S.money(o.total) })));
        var blocks = [el('div', { class: 'panel' }, kids), el('div', { class: 'panel' }, items)];
        if (s === 'awaiting_payment' || s === 'receipt_uploaded' || s === 'rejected') {
          var rows = o.payment_method === 'bank_transfer' ? [[t('bank'), st.bank_name], [t('account_name'), st.bank_account_name], [t('account_no'), st.bank_account_number]]
            : o.payment_method === 'wallet' ? [[t('wallet'), st.wallet_name], [t('wallet_no'), st.wallet_number]] : [];
          var dl = el('dl'); rows.forEach(function (r) { if (r[1]) { dl.appendChild(el('dt', { text: r[0] })); dl.appendChild(el('dd', { text: r[1], dir: 'ltr' })); } });
          var msg = el('p', { class: 'err' }), fi = el('input', { type: 'file', accept: 'image/*,application/pdf' }), up = el('button', { type: 'button', class: 'btn', text: t('upload_receipt') });
          up.addEventListener('click', function () {
            var f = fi.files && fi.files[0]; if (!f) return; if (f.size > 5 * 1024 * 1024) { msg.textContent = t('err_size'); return; }
            up.disabled = true; var ext = (f.name.split('.').pop() || 'jpg').replace(/[^a-z0-9]/gi, '').slice(0, 5) || 'jpg';
            S.upload('receipts', id + '/receipt-' + Date.now() + '.' + ext, f).then(function (p) { return S.rpc('attach_receipt', { p_id: id, p_token: tok, p_path: p }); }).then(function () { location.reload(); }, function () { up.disabled = false; msg.textContent = t('err_generic'); });
          });
          blocks.push(el('div', { class: 'panel' }, rows.length ? el('div', { class: 'paybox' }, dl) : null, el('div', { class: 'form', style: 'margin-top:12px' }, el('label', { class: 'f' }, t('receipt'), fi), msg, up)));
        }
        if (s === 'confirmed') {
          if (o.invite_code) blocks.push(el('div', { class: 'panel' }, el('h2', { text: t('portal_code') }), el('p', { class: 'muted', text: t('portal_code_d') }), el('p', null, el('span', { class: 'code', text: o.invite_code })), el('a', { class: 'btn', href: S.CFG.PORTAL, text: t('portal_open') })));
          if ((o.downloads || []).length) blocks.push(el('div', { class: 'panel' }, el('h2', { text: t('downloads') }), (o.downloads || []).map(function (d) { return el('div', { class: 'line-item' }, el('span', { text: d.title }), el('a', { href: S.media('book-files', d.path), target: '_blank', rel: 'noopener', text: t('download') })); })));
        }
        var link = el('button', { type: 'button', class: 'btn line sm', text: t('copy_link'), onclick: function (e) { var b = e.currentTarget; (navigator.clipboard ? navigator.clipboard.writeText(location.href) : Promise.reject()).then(function () { b.textContent = t('copied'); }, function () {}); } });
        S.clear(root).appendChild(el('div', { class: 'wrap', style: 'padding:32px 0 56px;max-width:720px' }, el('h1', { text: t('order_title'), style: 'font-size:1.8rem' }), el('p', { class: 'meta', text: t('order_saved') }), link, blocks));
      }).catch(bad);
    });
  }

  window.SBPages = { loadCourses: loadCourses, loadTeachers: loadTeachers, loadBooks: loadBooks, checkout: checkout, order: order };
})();
