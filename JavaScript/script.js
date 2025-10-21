document.addEventListener('DOMContentLoaded', () => {
    // 🔁 دائرة التحميل
    const preloader = document.querySelector("[data-preaload]");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
      });
    }
  


    
    // 🔁 زر القائمة
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('#menu-btn');
    const searchForm = document.querySelector('.search-form');
    const searchBtn = document.querySelector('#search-btn');
   
  
    if (menuBtn) {
      menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
      };
    }
  
    if (searchBtn) {
      searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
      };
    }
  
  
    // 🔁 عند تمرير الصفحة نغلق الكل
    window.onscroll = () => {
      navbar.classList.remove('active');
      searchForm.classList.remove('active');
    };
  
    
  });
  
  
  // 🔁 دالة تغيير اللغة
  // 🔁 استرجاع اللغة المخزنة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // استرجاع اللغة من localStorage إذا كانت موجودة، إذا لم تكن موجودة نستخدم الإنجليزية بشكل افتراضي
    const savedLanguage = localStorage.getItem('language') || 'en';
    toggleLanguage(savedLanguage);
  });
  
  // 🔁 دالة تغيير اللغة
  function toggleLanguage(lang) {
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
  
    // تغيير النصوص
    elements.forEach(el => {
      el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
  
    // تفعيل الزر الصحيح
    document.querySelectorAll('.lang-button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector('.lang-button.' + lang);
    if (activeBtn) activeBtn.classList.add('active');
  
    // تغيير اتجاه الصفحة
    document.documentElement.setAttribute('lang', lang);
    body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
    // تغيير اتجاه النافبار فقط
    if (navbar) {
      navbar.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    }
  
    // تغيير الخط حسب اللغة
    if (lang === 'ar') {
      document.body.classList.add('ar');
      document.body.classList.remove('en');
    } else {
      document.body.classList.add('en');
      document.body.classList.remove('ar');
    }
  
    // 🔁 حفظ اللغة في localStorage
    localStorage.setItem('language', lang);
  }

  // ✨ مراقبة ظهور العناصر
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});

  
  