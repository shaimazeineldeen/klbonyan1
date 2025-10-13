const langBtn = document.querySelector(".lang-btn");

    // تحديث النصوص
    function updateLanguage(lang) {
      document.querySelectorAll("[data-ar]").forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
      });
    }

    // تبديل اللغة
    function toggleLanguage() {
      const currentLang = localStorage.getItem("siteLang") || "ar";
      const newLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("siteLang", newLang);

      if(newLang === "ar") {
        document.documentElement.setAttribute("lang", "ar");
        document.documentElement.setAttribute("dir", "rtl");
      } else {
        document.documentElement.setAttribute("lang", "en");
        document.documentElement.setAttribute("dir", "ltr");
      }

      updateLanguage(newLang);
      langBtn.textContent = newLang === "ar" ? "EN" : "AR";
    }

    // عند تحميل الصفحة
    window.addEventListener("DOMContentLoaded", () => {
      const savedLang = localStorage.getItem("siteLang") || "ar";

      if(savedLang === "ar") {
        document.documentElement.setAttribute("lang", "ar");
        document.documentElement.setAttribute("dir", "rtl");
      } else {
        document.documentElement.setAttribute("lang", "en");
        document.documentElement.setAttribute("dir", "ltr");
      }

      updateLanguage(savedLang);
      langBtn.textContent = savedLang === "ar" ? "EN" : "AR";

      // ظهور الكروت تدريجيًا
      const cards = document.querySelectorAll(".team-card");
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const index = Array.from(cards).indexOf(entry.target);
          if(entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("show"), index * 300);
          } else {
            entry.target.classList.remove("show");
          }
        });
      }, { threshold: 0.2 });
      cards.forEach(card => cardObserver.observe(card));

      // العدادات
      const counters = document.querySelectorAll('.counter');
      function startCount(counter) {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 50);
        function update() {
          count += increment;
          if(count < target) {
            counter.innerText = count;
            requestAnimationFrame(update);
          } else {
            counter.innerText = target;
          }
        }
        counter.innerText = "0";
        update();
      }
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            startCount(entry.target);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(counter => counterObserver.observe(counter));

      // زر التبرع العائم
     
      });
    window.addEventListener("DOMContentLoaded", () => {
  const donateFloatBtn = document.querySelector('.donate-float-btn');
  const heroSection = document.querySelector('.hero-section');

  if (!donateFloatBtn || !heroSection) return; // تأكد أن العناصر موجودة

  const offset = 100; // يظهر قبل نهاية الـ Hero Section بـ 100px

  // عند تحميل الصفحة، إذا كان المستخدم تجاوز Hero Section بالفعل
  if (window.scrollY > heroSection.offsetHeight - offset) {
    donateFloatBtn.classList.add('show');
  }

  // عند التمرير
  window.addEventListener('scroll', () => {
    if (window.scrollY > heroSection.offsetHeight - offset) {
      donateFloatBtn.classList.add('show');
    } else {
      donateFloatBtn.classList.remove('show');
    }
    
  });
});



// lang.js


// تحديث النصوص بناءً على data-ar و data-en
function updateLanguage(lang) {
  document.querySelectorAll("[data-ar][data-en]").forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });

  // تحديث اتجاه الصفحة
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

// تبديل اللغة وتخزينها في localStorage
function toggleLanguage() {
  const currentLang = localStorage.getItem("siteLang") || "ar";
  const newLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("siteLang", newLang);

  updateLanguage(newLang);

  // تحديث زر اللغة
  langBtn.textContent = newLang === "ar" ? "EN" : "AR";
}

// عند تحميل أي صفحة، نقرأ اللغة المخزنة





    