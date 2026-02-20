// assets/js/main.js

(function() {
  'use strict';

  // ---------- Мобильное меню с trap focus ----------
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  let focusableElements = [];
  let firstFocusableEl = null;
  let lastFocusableEl = null;

  if (menuToggle && menu) {
    // Собираем все фокусируемые элементы внутри меню
    function updateFocusableElements() {
      focusableElements = menu.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        firstFocusableEl = focusableElements[0];
        lastFocusableEl = focusableElements[focusableElements.length - 1];
      } else {
        firstFocusableEl = null;
        lastFocusableEl = null;
      }
    }

    // Открыть / закрыть меню
    function toggleMenu(open) {
      const expanded = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') === 'false';
      menuToggle.setAttribute('aria-expanded', expanded);
      menu.classList.toggle('is-open', expanded);
      if (expanded) {
        updateFocusableElements();
        if (firstFocusableEl) {
          firstFocusableEl.focus();
        }
        // Добавляем обработчик клика вне меню
        document.addEventListener('click', handleOutsideClick);
      } else {
        menuToggle.focus();
        document.removeEventListener('click', handleOutsideClick);
      }
    }

    // Обработчик клика вне меню
    function handleOutsideClick(e) {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    }

    // Клик по кнопке
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = menuToggle.getAttribute('aria-expanded') === 'false';
      toggleMenu(willOpen);
    });

    // Глобальный обработчик клавиш
    document.addEventListener('keydown', (e) => {
      const isOpen = menu.classList.contains('is-open');
      if (!isOpen) return;

      if (e.key === 'Escape') {
        toggleMenu(false);
        e.preventDefault();
      }

      if (e.key === 'Tab') {
        if (!firstFocusableEl || !lastFocusableEl) return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      }
    });

    // Закрываем меню при ресайзе, если перешли в десктопный вид
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && menu.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });

    // Инициализация состояния
    toggleMenu(false);
  }

  // ---------- Форма обратной связи ----------
  const form = document.getElementById('reviewForm');
  const statusNode = document.getElementById('formStatus');

  if (form && statusNode) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const severity = String(data.get('severity') || '').trim(); // тип проекта
      const comment = String(data.get('comment') || '').trim();

      if (!name || !email || !severity || !comment) {
        statusNode.textContent = 'Пожалуйста, заполните все обязательные поля.';
        return;
      }

      if (!email.includes('@')) {
        statusNode.textContent = 'Введите корректный email (должен содержать @).';
        return;
      }

      statusNode.textContent = 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.';
      form.reset();

      // Скрываем сообщение через 5 секунд
      setTimeout(() => {
        statusNode.textContent = '';
      }, 5000);
    });
  }

  // ---------- Анимация чисел (статистика) ----------
  function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const speed = 200;
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      if (isNaN(target)) return;

      const updateCount = () => {
        const current = parseInt(counter.innerText, 10) || 0;
        const increment = target / speed;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  // ---------- Intersection Observer для анимации карточек ----------
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Можно отключить наблюдение после появления
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));
  }

  // ---------- Запуск всех инициализаций после загрузки DOM ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCounters();
      initScrollAnimations();
    });
  } else {
    // DOM уже загружен
    initCounters();
    initScrollAnimations();
  }

})();