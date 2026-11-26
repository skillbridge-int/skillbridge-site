/* SkillBridge International: public website helpers (no build step, no libraries). */
(function () {
  'use strict';
  var CFG = {
    URL: 'https://qschghbpkirimscnxyuv.supabase.co',
    KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzY2hnaGJwa2lyaW1zY254eXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0MjQyOTAsImV4cCI6MjExMTAwMDI5MH0.Jjo_xZRatijw1yRklIpnNfqUWVzcejrnsSKXtoWuLns',
    PORTAL: 'https://skillbridge-int.github.io/skillbridge-admin/',   // students / parents / staff sign in here
    CURRENCY_EN: 'LYD', CURRENCY_AR: 'د.ل'
  };

  /* ---------------------------------------------------------------- words */
  var T = {
    en: {
      nav_courses: 'Courses', nav_teachers: 'Teachers', nav_books: 'Books', nav_contact: 'Contact', nav_portal: 'Student portal', nav_cart: 'Cart',
      hero_title: 'Learn without borders', hero_text: 'Language courses and training with specialist teachers, and books that keep you going between lessons.',
      cta_courses: 'See courses', cta_books: 'Browse books',
      lat_courses: 'Courses', lat_teachers: 'Teachers', lat_books: 'Books', lat_how: 'How to enroll', lat_portal: 'Student portal', lat_contact: 'Contact us',
      sec_courses: 'Courses', sec_teachers: 'Our teachers', sec_books: 'Books', sec_how: 'How to enroll', sec_contact: 'Contact',
      all_courses: 'All courses', all_teachers: 'All teachers', all_books: 'All books',
      sessions: 'sessions', minutes: 'min each', details: 'Details', enroll: 'Enroll', add_cart: 'Add to cart', in_cart: 'In your cart',
      choose_class: 'Choose a class', no_class: 'No class is open yet. Send an enrollment request and we will place you in the next one.',
      class_any: 'Place me in the next available class', starts: 'Starts', seats_left: 'seats left', full: 'Full', taught_by: 'Taught by',
      format_digital: 'PDF download', format_physical: 'Printed copy', out_of_stock: 'Out of stock', by: 'by', qty: 'Copies',
      step1_t: 'Pick a course or a book', step1_p: 'Add it to your cart. For a course you can choose the class that suits you.',
      step2_t: 'Pay by transfer or wallet', step2_p: 'Send the amount, then upload a photo of the receipt. You can also pay in person at the center.',
      step3_t: 'We confirm and you start', step3_p: 'After we check the payment you get your place, a code for the student portal, and book downloads.',
      empty_courses: 'Courses will appear here soon.', empty_teachers: 'Teacher profiles will appear here soon.', empty_books: 'Books will appear here soon.',
      cart_title: 'Your order', cart_empty: 'Your cart is empty.', cart_empty_cta: 'Browse courses', remove: 'Remove', total: 'Total', delivery: 'Delivery', subtotal: 'Items',
      f_name: 'Your name', f_student: 'Student name (if different from yours)', f_phone: 'Phone / WhatsApp', f_email: 'Email (optional)', f_city: 'City', f_address: 'Delivery address', f_notes: 'Notes (optional)',
      pay_title: 'Payment', pay_bank: 'Bank transfer', pay_wallet: 'E-wallet', pay_cash: 'Pay at the center', pay_bank_d: 'Transfer to this account', pay_wallet_d: 'Send to this wallet',
      pay_cash_d: 'Your place is reserved. Please pay at the center before the first lesson.', bank: 'Bank', account_name: 'Account name', account_no: 'Account / IBAN', wallet: 'Wallet', wallet_no: 'Number',
      receipt: 'Receipt photo', receipt_hint: 'JPG, PNG or PDF, up to 5 MB. You can also add it later from the order page.',
      place_order: 'Place order', placing: 'Sending…', err_generic: 'Something went wrong. Check your details and try again.', err_size: 'The file is larger than 5 MB.',
      order_title: 'Your order', order_saved: 'Keep this page. It is your order link.', copy_link: 'Copy link', copied: 'Copied',
      st_awaiting_payment: 'Waiting for payment', st_receipt_uploaded: 'Receipt received', st_confirmed: 'Confirmed', st_rejected: 'Needs attention', st_cancelled: 'Cancelled',
      st_awaiting_payment_d: 'Pay using the details below, then upload the receipt.', st_receipt_uploaded_d: 'We are checking your payment. This usually takes less than a day.',
      st_confirmed_d: 'Thank you. Your order is confirmed.', st_rejected_d: 'We could not confirm the payment. Please upload a clearer receipt or contact us.', st_cancelled_d: 'This order was cancelled.',
      upload_receipt: 'Upload receipt', downloads: 'Your downloads', download: 'Download', portal_code: 'Student portal code', portal_code_d: 'Use this code to create the student account and follow classes and tasks.',
      portal_open: 'Open the student portal', note_from_us: 'Note from SkillBridge', order_not_found: 'We could not find this order. Check the link you were given.',
      my_orders: 'Open my order', footer_rights: 'SkillBridge International', pay_note: 'Payment', loading: 'Loading…',
      lang_switch: 'عربي', v1_t:'Specialist teachers', v1_p:'Teachers chosen for their subject, with profiles you can read before you enroll.', v2_t:'Live classes', v2_p:'Classes with fixed schedules and start dates, led by a named teacher.', v3_t:'Arabic and English', v3_p:'The whole site and the student portal work in both languages.', v4_t:'Easy payment', v4_p:'Bank transfer, e-wallet or at the center. Upload your receipt and we confirm it.', cta_t:'Ready to start learning?', cta_p:'Pick a course, choose your class and send your order in a few minutes.', why:'Why SkillBridge', phone: 'Phone', whatsapp: 'WhatsApp', email: 'Email', address: 'Address', about: 'About us'
    },
    ar: {
      nav_courses: 'الدورات', nav_teachers: 'المدرّسون', nav_books: 'الكتب', nav_contact: 'تواصل معنا', nav_portal: 'بوابة الطلبة', nav_cart: 'السلة',
      hero_title: 'تعلّم بلا حدود', hero_text: 'دورات لغات وتدريب مع مدرّسين مختصين، وكتب ترافقك بين الدروس.',
      cta_courses: 'استعرض الدورات', cta_books: 'تصفّح الكتب',
      lat_courses: 'الدورات', lat_teachers: 'المدرّسون', lat_books: 'الكتب', lat_how: 'كيف أسجّل', lat_portal: 'بوابة الطلبة', lat_contact: 'تواصل معنا',
      sec_courses: 'الدورات', sec_teachers: 'مدرّسونا', sec_books: 'الكتب', sec_how: 'كيف تسجّل', sec_contact: 'تواصل معنا',
      all_courses: 'كل الدورات', all_teachers: 'كل المدرّسين', all_books: 'كل الكتب',
      sessions: 'حصة', minutes: 'دقيقة للحصة', details: 'التفاصيل', enroll: 'سجّل', add_cart: 'أضف إلى السلة', in_cart: 'في السلة',
      choose_class: 'اختر المجموعة', no_class: 'لا توجد مجموعة مفتوحة الآن. أرسل طلب التسجيل وسنضعك في أقرب مجموعة.',
      class_any: 'ضعوني في أقرب مجموعة متاحة', starts: 'تبدأ', seats_left: 'مقاعد متبقية', full: 'مكتملة', taught_by: 'المدرّس',
      format_digital: 'نسخة PDF للتحميل', format_physical: 'نسخة مطبوعة', out_of_stock: 'غير متوفر', by: 'تأليف', qty: 'عدد النسخ',
      step1_t: 'اختر دورة أو كتابًا', step1_p: 'أضفه إلى السلة. وللدورات يمكنك اختيار المجموعة المناسبة لك.',
      step2_t: 'ادفع بالتحويل أو المحفظة', step2_p: 'حوّل المبلغ ثم ارفع صورة الإيصال. ويمكنك أيضًا الدفع في المركز.',
      step3_t: 'نؤكّد وتبدأ', step3_p: 'بعد مراجعة الدفع يصلك مقعدك ورمز بوابة الطلبة وروابط تحميل الكتب.',
      empty_courses: 'ستظهر الدورات هنا قريبًا.', empty_teachers: 'ستظهر ملفات المدرّسين هنا قريبًا.', empty_books: 'ستظهر الكتب هنا قريبًا.',
      cart_title: 'طلبك', cart_empty: 'السلة فارغة.', cart_empty_cta: 'استعرض الدورات', remove: 'حذف', total: 'الإجمالي', delivery: 'التوصيل', subtotal: 'المشتريات',
      f_name: 'اسمك', f_student: 'اسم الطالب (إن كان مختلفًا عن اسمك)', f_phone: 'الهاتف / واتساب', f_email: 'البريد الإلكتروني (اختياري)', f_city: 'المدينة', f_address: 'عنوان التوصيل', f_notes: 'ملاحظات (اختياري)',
      pay_title: 'الدفع', pay_bank: 'تحويل مصرفي', pay_wallet: 'محفظة إلكترونية', pay_cash: 'الدفع في المركز', pay_bank_d: 'حوّل إلى هذا الحساب', pay_wallet_d: 'أرسل إلى هذه المحفظة',
      pay_cash_d: 'يُحجز مقعدك. يرجى الدفع في المركز قبل أول حصة.', bank: 'المصرف', account_name: 'اسم الحساب', account_no: 'رقم الحساب / الآيبان', wallet: 'المحفظة', wallet_no: 'الرقم',
      receipt: 'صورة الإيصال', receipt_hint: 'JPG أو PNG أو PDF حتى 5 ميغابايت. ويمكنك إضافتها لاحقًا من صفحة الطلب.',
      place_order: 'أرسل الطلب', placing: 'جارٍ الإرسال…', err_generic: 'حدث خطأ. راجع بياناتك وحاول مرة أخرى.', err_size: 'حجم الملف أكبر من 5 ميغابايت.',
      order_title: 'طلبك', order_saved: 'احتفظ بهذه الصفحة، فهي رابط طلبك.', copy_link: 'انسخ الرابط', copied: 'تم النسخ',
      st_awaiting_payment: 'بانتظار الدفع', st_receipt_uploaded: 'استلمنا الإيصال', st_confirmed: 'تم التأكيد', st_rejected: 'يحتاج إلى انتباهك', st_cancelled: 'أُلغي',
      st_awaiting_payment_d: 'ادفع حسب البيانات أدناه ثم ارفع الإيصال.', st_receipt_uploaded_d: 'نراجع دفعتك الآن، وعادةً يستغرق ذلك أقل من يوم.',
      st_confirmed_d: 'شكرًا لك. تم تأكيد طلبك.', st_rejected_d: 'لم نتمكن من تأكيد الدفع. ارفع إيصالًا أوضح أو تواصل معنا.', st_cancelled_d: 'تم إلغاء هذا الطلب.',
      upload_receipt: 'ارفع الإيصال', downloads: 'ملفات التحميل', download: 'تحميل', portal_code: 'رمز بوابة الطلبة', portal_code_d: 'استخدم هذا الرمز لإنشاء حساب الطالب ومتابعة الدروس والمهام.',
      portal_open: 'افتح بوابة الطلبة', note_from_us: 'ملاحظة من جسر المهارة', order_not_found: 'لم نجد هذا الطلب. تحقق من الرابط الذي وصلك.',
      my_orders: 'افتح طلبي', footer_rights: 'جسر المهارة الدولية', pay_note: 'الدفع', loading: 'جارٍ التحميل…',
      lang_switch: 'English', v1_t:'مدرّسون مختصون', v1_p:'مدرّسون مختارون لتخصصهم، مع ملفات تعريفية تقرؤها قبل التسجيل.', v2_t:'حصص مباشرة', v2_p:'مجموعات بمواعيد وتواريخ بدء محددة ومدرّس معروف لكل مجموعة.', v3_t:'عربي وإنجليزي', v3_p:'الموقع كله وبوابة الطلبة يعملان باللغتين.', v4_t:'دفع سهل', v4_p:'تحويل مصرفي أو محفظة إلكترونية أو في المركز. ارفع الإيصال ونؤكد لك.', cta_t:'جاهز لتبدأ التعلّم؟', cta_p:'اختر الدورة والمجموعة وأرسل طلبك في دقائق.', why:'لماذا جسر المهارة', phone: 'الهاتف', whatsapp: 'واتساب', email: 'البريد', address: 'العنوان', about: 'من نحن'
    }
  };

  /* ---------------------------------------------------------------- language */
  var lang = 'en';   // default language for first-time visitors; the switch saves their choice
  try { var s = localStorage.getItem('sb_lang'); if (s === 'en' || s === 'ar') lang = s; } catch (e) {}
  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || k; }
  function setLang(l) { try { localStorage.setItem('sb_lang', l); } catch (e) {} location.reload(); }
  function pick(o, base) { return (o && (o[base + '_' + lang] || o[base + '_en'])) || ''; }
  function applyDir() { document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; }
  applyDir();
  function money(n) {
    var v = Number(n || 0); var s = (Math.round(v * 100) / 100).toLocaleString('en-US', { maximumFractionDigits: 2 });
    return lang === 'ar' ? s + ' ' + CFG.CURRENCY_AR : s + ' ' + CFG.CURRENCY_EN;
  }
  function dateText(d) { if (!d) return ''; try { return new Date(d).toLocaleDateString(lang === 'ar' ? 'ar-LY-u-nu-latn' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return String(d); } }

  /* ---------------------------------------------------------------- tiny DOM builder (text only, never raw HTML) */
  function el(tag, attrs) {
    var n = (tag === 'svg' || tag === 'path' || tag === 'circle') ? document.createElementNS('http://www.w3.org/2000/svg', tag) : document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k]; if (v === null || v === undefined || v === false) continue;
      if (k === 'class') n.className = v; else if (k === 'text') n.textContent = v;
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    for (var i = 2; i < arguments.length; i++) add(n, arguments[i]);
    return n;
  }
  function add(n, c) { if (c === null || c === undefined || c === false) return; if (Array.isArray(c)) c.forEach(function (x) { add(n, x); }); else n.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c))); }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); return n; }
  function $(s, r) { return (r || document).querySelector(s); }
  function applyI18n(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    (root || document).querySelectorAll('[data-i18n-ph]').forEach(function (n) { n.setAttribute('placeholder', t(n.getAttribute('data-i18n-ph'))); });
  }

  /* ---------------------------------------------------------------- data (PostgREST, read-only views + 4 functions) */
  function headers(extra) { var h = { apikey: CFG.KEY, Authorization: 'Bearer ' + CFG.KEY }; for (var k in (extra || {})) h[k] = extra[k]; return h; }
  function get(view, query) {
    return fetch(CFG.URL + '/rest/v1/' + view + (query ? '?' + query : ''), { headers: headers() }).then(function (r) {
      if (!r.ok) throw new Error('load_failed'); return r.json();
    });
  }
  function rpc(name, args) {
    return fetch(CFG.URL + '/rest/v1/rpc/' + name, { method: 'POST', headers: headers({ 'Content-Type': 'application/json' }), body: JSON.stringify(args || {}) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) { var e = new Error((j && j.message) || 'failed'); throw e; } return j; }); });
  }
  function upload(bucket, path, file) {
    return fetch(CFG.URL + '/storage/v1/object/' + bucket + '/' + path.split('/').map(encodeURIComponent).join('/'), {
      method: 'POST', headers: headers({ 'Content-Type': file.type || 'application/octet-stream', 'x-upsert': 'false' }), body: file
    }).then(function (r) { if (!r.ok) throw new Error('upload_failed'); return path; });
  }
  function media(bucket, path) { return path ? CFG.URL + '/storage/v1/object/public/' + bucket + '/' + path.split('/').map(encodeURIComponent).join('/') : null; }

  var settingsP = null;
  function settings() {
    if (!settingsP) settingsP = get('site_settings', 'select=key,value').then(function (rows) { var m = {}; rows.forEach(function (r) { m[r.key] = r.value || ''; }); return m; }).catch(function () { return {}; });
    return settingsP;
  }

  /* ---------------------------------------------------------------- cart */
  var cart = {
    items: function () { try { return JSON.parse(localStorage.getItem('sb_cart') || '[]'); } catch (e) { return []; } },
    save: function (a) { try { localStorage.setItem('sb_cart', JSON.stringify(a)); } catch (e) {} paintCount(); },
    add: function (it) {
      var a = cart.items().filter(function (x) { return !(x.type === it.type && x.id === it.id && x.format === it.format); });
      a.push(it); cart.save(a);
    },
    remove: function (i) { var a = cart.items(); a.splice(i, 1); cart.save(a); },
    clear: function () { cart.save([]); },
    has: function (type, id, format) { return cart.items().some(function (x) { return x.type === type && x.id === id && (!format || x.format === format); }); }
  };
  function paintCount() { var n = cart.items().length; document.querySelectorAll('[data-cart-count]').forEach(function (b) { b.textContent = n ? String(n) : ''; b.hidden = !n; }); }


  /* Duotone icon set drawn for SkillBridge: t = tint layer, s = solid layer, a = accent (saffron). */
  var ICON = {
    courses: '<path class="t" d="M5.5 11.2v4.6c0 1.7 2.9 3.6 6.5 3.6s6.5-1.9 6.5-3.6v-4.6L12 14.4z"/><path class="s" d="M12 3.6 1.4 8.9 12 14.2l10.6-5.3z"/><rect class="a" x="19.3" y="9.4" width="1.6" height="6.4" rx=".8"/><circle class="a" cx="20.1" cy="16.9" r="1.6"/>',
    teachers: '<rect class="t" x="2" y="2.8" width="20" height="13.4" rx="2.6"/><rect class="a" x="13" y="6.4" width="6" height="1.9" rx=".95"/><rect class="a" x="15" y="10" width="4" height="1.9" rx=".95"/><circle class="s" cx="8.4" cy="9.6" r="3.1"/><path class="s" d="M2.6 21.2c0-3.4 2.6-5.8 5.8-5.8s5.8 2.4 5.8 5.8z"/>',
    books: '<rect class="t" x="2.5" y="15.4" width="19" height="5.2" rx="1.6"/><rect class="s" x="4.6" y="9.8" width="15.4" height="5.2" rx="1.6"/><rect class="a" x="3.4" y="4.2" width="13.4" height="5.2" rx="1.6"/><rect class="t" x="7" y="11.6" width="7" height="1.6" rx=".8"/>',
    how: '<path class="tl" d="M5 5.2h9.6a3.6 3.6 0 0 1 0 7.2H9.4a3.6 3.6 0 0 0 0 7.2H18"/><circle class="s" cx="5" cy="5.2" r="3"/><circle class="a" cx="19" cy="19.6" r="3.2"/><path class="ck" d="M17.6 19.6l1 1 1.9-2"/>',
    portal: '<rect class="t" x="2" y="3.6" width="20" height="13.6" rx="2.6"/><path class="s" d="M11 17h2v2.6h3.2v1.8H7.8v-1.8H11z"/><path class="a" d="M7.6 9.5h5.2l-1.7-1.7 1.3-1.3 3.9 3.9-3.9 3.9-1.3-1.3 1.7-1.7H7.6z"/>',
    contact: '<path class="t" d="M4.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v6.2a2.6 2.6 0 0 1-2.6 2.6H9.2l-4.4 3.6V15H4.2a2.6 2.6 0 0 1-2.6-2.6V6.2a2.6 2.6 0 0 1 2.6-2.6z"/><path class="s" d="M20 8.6h.2a2.2 2.2 0 0 1 2.2 2.2v5.2a2.2 2.2 0 0 1-2.2 2.2H20v3.2l-3.8-3.2h-4.4a2.2 2.2 0 0 1-2-1.4h6.2A4 4 0 0 0 20 12.8z"/><circle class="a" cx="6.4" cy="9.3" r="1.3"/><circle class="a" cx="10" cy="9.3" r="1.3"/><circle class="a" cx="13.6" cy="9.3" r="1.3"/>',
    live: '<rect class="t" x="1.8" y="5.6" width="14.4" height="12.8" rx="2.8"/><path class="s" d="M17.4 10.4 22.2 7.4v9.2l-4.8-3z"/><circle class="a" cx="6" cy="9.8" r="1.8"/>',
    lang: '<rect class="t" x="1.8" y="2.6" width="13.4" height="11.4" rx="2.6"/><rect class="s" x="8.8" y="9.8" width="13.4" height="11.4" rx="2.6"/><text class="gl ga" x="8.4" y="10.9">ع</text><text class="gl gb" x="15.5" y="18.6">A</text>',
    pay: '<rect class="t" x="1.6" y="4.6" width="17.4" height="12.4" rx="2.6"/><rect class="s" x="1.6" y="7.6" width="17.4" height="2.8"/><circle class="a" cx="17.8" cy="16.4" r="4.8"/><path class="ck" d="M17.8 14.2v4.4M16.4 15.3h2.2a.9.9 0 0 1 0 1.8h-1.6a.9.9 0 0 0 0 1.8h2.2"/>'
  };
  function icon(n, size) { var s = document.createElement('span'); s.className = 'ico ico-' + n; s.setAttribute('aria-hidden', 'true'); size = size || 26;
    s.innerHTML = '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" style="direction:ltr">' + (ICON[n] || '') + '</svg>'; return s; }

  /* ---------------------------------------------------------------- shared pieces */
  function initials(s) { return String(s || '?').trim().split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase(); }

  function header(active) {
    var links = [['index.html#courses', 'nav_courses', 'courses'], ['teachers.html', 'nav_teachers', 'teachers'], ['books.html', 'nav_books', 'books'], ['index.html#contact', 'nav_contact', 'contact']];
    links[0][0] = 'courses.html';
    var nav = el('nav', { class: 'nav', id: 'nav', 'aria-label': 'Main' },
      links.map(function (l) { return el('a', { href: l[0], class: active === l[2] ? 'on' : null, 'aria-current': active === l[2] ? 'page' : null }, icon(l[2], 18), el('span', { text: t(l[1]) })); }),
      el('a', { href: CFG.PORTAL, class: 'portal' }, icon('portal', 18), el('span', { text: t('nav_portal') })));
    var btn = el('button', { class: 'menu', type: 'button', 'aria-label': 'Menu', 'aria-expanded': 'false', onclick: function (e) { var o = nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o ? 'true' : 'false'); } },
      el('span'), el('span'), el('span'));
    return el('header', { class: 'top' },
      el('div', { class: 'util' }, el('div', { class: 'wrap' }, el('span', { text: lang === 'ar' ? 'دورات • مدرّسون • كتب' : 'Courses • Teachers • Books' }), el('span', { class: 'utilr', id: 'utilr' }))),
      el('div', { class: 'wrap bar' },
        el('a', { class: 'brand', href: 'index.html', 'aria-label': 'SkillBridge International' },
          el('img', { src: 'assets/brand/mark-reverse.webp', alt: '', width: 480, height: 266 }),
          el('span', { class: 'bname' }, el('b', { text: lang === 'ar' ? 'جسر المهارة' : 'SkillBridge' }), el('small', { text: lang === 'ar' ? 'SkillBridge International' : 'International' }))),
        nav,
        el('div', { class: 'tools' },
          el('button', { class: 'langbtn', type: 'button', onclick: function () { setLang(lang === 'ar' ? 'en' : 'ar'); }, text: t('lang_switch') }),
          el('a', { class: 'cartbtn', href: 'checkout.html', 'aria-label': t('nav_cart') }, el('svg', { viewBox: '0 0 24 24', width: 22, height: 22, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.8, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true' }, el('path', { d: 'M3 4h2l2.4 11h10.2L20 7H6.2' }), el('circle', { cx: 9, cy: 19, r: 1.3 }), el('circle', { cx: 17, cy: 19, r: 1.3 })), el('i', { 'data-cart-count': '', hidden: true })),
          btn)));
  }

  function footer(S) {
    var wa = (S.whatsapp || '').replace(/[^0-9]/g, '');
    var info = [];
    if (S.contact_phone) info.push(el('li', null, el('span', { text: t('phone') }), el('a', { href: 'tel:' + S.contact_phone.replace(/\s/g, ''), text: S.contact_phone, dir: 'ltr' })));
    if (wa) info.push(el('li', null, el('span', { text: t('whatsapp') }), el('a', { href: 'https://wa.me/' + wa, target: '_blank', rel: 'noopener', text: S.whatsapp, dir: 'ltr' })));
    if (S.contact_email) info.push(el('li', null, el('span', { text: t('email') }), el('a', { href: 'mailto:' + S.contact_email, text: S.contact_email, dir: 'ltr' })));
    var addr = S['address_' + lang] || S.address_en; if (addr) info.push(el('li', null, el('span', { text: t('address') }), el('b', { text: addr })));
    return el('footer', { class: 'foot', id: 'contact' },
      el('div', { class: 'wrap footgrid' },
        el('div', null, el('img', { src: 'assets/brand/logo-reverse.webp', alt: 'SkillBridge International', width: 720, height: 590, class: 'footlogo' })),
        el('div', null, el('h2', { text: t('sec_contact') }), info.length ? el('ul', { class: 'info' }, info) : el('p', { class: 'muted', text: '' })),
        el('div', null, el('h2', { text: t('about') }), el('p', { text: S['about_' + lang] || S.about_en || t('hero_text') }))),
      el('div', { class: 'wrap legal' }, el('span', { text: '© ' + new Date().getFullYear() + ' ' + t('footer_rights') })));
  }

  function mount(active) {
    applyI18n();
    var h = $('#hdr'); if (h) h.replaceWith(header(active));
    paintCount();
    return settings().then(function (S) { var f = $('#ftr'); if (f) f.replaceWith(footer(S)); var u = $('#utilr'); if (u && S.contact_phone) u.appendChild(el('a', { href: 'tel:' + S.contact_phone.replace(/\s/g, ''), text: S.contact_phone, dir: 'ltr' })); return S; });
  }

  /* ---------------------------------------------------------------- list pieces used by several pages */
  function courseRow(c, onOpen) {
    var title = pick(c, 'title'), level = pick(c, 'level'), sum = pick(c, 'summary');
    var pic = c.image_path ? el('img', { src: media('site-media', c.image_path), alt: '', loading: 'lazy' }) : el('span', { class: 'mono', text: initials(c.title_en) });
    return el('li', { class: 'crow' },
      el('div', { class: 'cpic' }, pic),
      el('div', { class: 'cbody' },
        el('h3', { text: title + (level ? ' · ' + level : '') }),
        sum ? el('p', { text: sum }) : null,
        el('p', { class: 'meta', text: c.sessions + ' ' + t('sessions') + ' · ' + c.minutes + ' ' + t('minutes') })),
      el('div', { class: 'cprice' }, el('b', { text: money(c.price) }), el('button', { type: 'button', class: 'btn', onclick: function () { onOpen(c); }, text: t('enroll') })));
  }
  function teacherFigure(x, courses) {
    var pic = x.photo_path ? el('img', { src: media('site-media', x.photo_path), alt: pick(x, 'name'), loading: 'lazy' }) : el('span', { class: 'mono', text: initials(x.name_en) });
    return el('li', { class: 'tfig' }, el('div', { class: 'tpic' }, pic), el('h3', { text: pick(x, 'name') }), el('p', { class: 'meta', text: pick(x, 'specialty') }),
      x.bio_en || x.bio_ar ? el('p', { class: 'bio', text: pick(x, 'bio') }) : null,
      courses && courses.length ? el('p', { class: 'meta', text: courses.join(' · ') }) : null);
  }
  function bookCover(b) {
    return b.cover_path ? el('img', { src: media('site-media', b.cover_path), alt: '', loading: 'lazy' })
      : el('div', { class: 'gen' }, el('b', { text: pick(b, 'title') }), b.author ? el('small', { text: b.author }) : null);
  }

  window.SB = { CFG: CFG, t: t, lang: lang, setLang: setLang, pick: pick, money: money, dateText: dateText, el: el, clear: clear, $: $, applyI18n: applyI18n,
    get: get, rpc: rpc, upload: upload, media: media, settings: settings, cart: cart, mount: mount, header: header, footer: footer,
    icon: icon, courseRow: courseRow, teacherFigure: teacherFigure, bookCover: bookCover, initials: initials };
})();
