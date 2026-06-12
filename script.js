// ===== Feature 1: Dark Mode Toggle =====
(function initDarkMode() {
  const darkToggle = document.getElementById('dark-toggle');
  const body = document.body;

  // Check localStorage for saved preference
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    body.classList.add('dark');
  }

  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
  });
})();


// ===== Feature 2: Smooth Scrolling Navigation =====
(function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.navbar__link, .footer__links a, .hero__actions a, .dest-card__body a, .package-card__footer a');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
        }
        // Update active link
        updateActiveLink(href);
      }
    });
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }
})();


// ===== Active Link Highlighter =====
function updateActiveLink(activeHref) {
  const links = document.querySelectorAll('.navbar__link');
  links.forEach(link => {
    link.classList.remove('navbar__link--active');
    if (link.getAttribute('href') === activeHref) {
      link.classList.add('navbar__link--active');
    }
  });
}

// Update active link on scroll
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.navbar__link');

  function onScroll() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('navbar__link--active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('navbar__link--active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


// ===== Navbar Scroll Effect =====
(function initNavbarScroll() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
})();


// ===== Feature 3: Region Information Viewer =====
(function initRegionViewer() {
  const regionsGrid = document.getElementById('regions-grid');
  const regionDetail = document.getElementById('region-detail');

  const regionData = {
    gilgit: {
      name: 'Gilgit Baltistan',
      desc: 'Gilgit Baltistan is a mountainous region in northern Pakistan, home to three of the world\'s greatest mountain ranges: the Himalayas, Karakoram, and Hindu Kush. It features some of the highest peaks on Earth, including K2, the second highest mountain in the world.',
      attractions: 'K2 Base Camp, Hunza Valley, Attabad Lake, Fairy Meadows, Passu Cones, Rakaposhi Viewpoint',
      bestTime: 'April to October — Summer and early autumn offer the best weather and accessible roads.',
      tips: 'Allow extra time for travel as roads can be affected by weather. Carry warm clothing even in summer.'
    },
    punjab: {
      name: 'Punjab',
      desc: 'Punjab is Pakistan\'s most populous province and the cultural heartland of the country. Known for its rich Mughal heritage, vibrant cities, and fertile plains, it offers a deep dive into Pakistani history and cuisine.',
      attractions: 'Lahore Fort, Badshahi Mosque, Walled City of Lahore, Shalimar Gardens, Minar-e-Pakistan, Lok Virsa Museum',
      bestTime: 'October to March — Winter months offer pleasant weather for sightseeing.',
      tips: 'Explore Lahore\'s food scene — it\'s one of Asia\'s great food cities. Visit the Old City by night.'
    },
    sindh: {
      name: 'Sindh',
      desc: 'Sindh is home to Pakistan\'s largest city, Karachi, and the ancient UNESCO World Heritage site of Mohenjo-Daro. The province blends modern urban life with millennia of history.',
      attractions: 'Mohenjo-Daro, Quaid-e-Azam\'s House, Badshahi Mosque, Data Darbar, Karachi Waterfront, Makli Necropolis',
      bestTime: 'November to February — Cool and dry weather makes exploration comfortable.',
      tips: 'Dedicate at least two days to Mohenjo-Daro. Karachi\'s beaches come alive at sunset.'
    },
    kpk: {
      name: 'Khyber Pakhtunkhwa (KPK)',
      desc: 'KPK is a province of dramatic landscapes, from lush valleys to rugged mountains. It has a rich Pashtun culture and was a key stop on the ancient Silk Road.',
      attractions: 'Swat Valley, Naran Kaghan, Khyber Pass, Bajaur Valley, Chitral, Malam Jabba Ski Resort',
      bestTime: 'May to September — Summer brings green valleys and accessible mountain passes.',
      tips: 'Swat Valley is called the "Switzerland of the East." Don\'t miss the Malam Jabba ski resort in winter.'
    },
    balochistan: {
      name: 'Balochistan',
      desc: 'Balochistan is Pakistan\'s largest province by area, known for its vast deserts, dramatic canyons, and rugged coastlines. It remains one of the least explored and most untouristed regions.',
      attractions: 'Hingol National Park, Prince of Oman\'s Eye, Kund Malir Beach, Mehran Cave, Ziarat Juniper Forest',
      bestTime: 'October to March — Mild winter temperatures make exploration feasible.',
      tips: 'This is off-the-beaten-path territory. Plan well, carry supplies, and consider a guided tour.'
    },
    kashmir: {
      name: 'Azad Kashmir',
      desc: 'Azad Kashmir is a region of stunning natural beauty, with lush valleys, crystal-clear rivers, and snow-capped peaks. It offers some of the most accessible and rewarding trekking in Pakistan.',
      attractions: 'Neelum Valley, Kel Valley, Lake Saiful Muluk, Babusar Pass, Azad Kashmir Highland',
      bestTime: 'June to September — Summer months provide the best conditions for travel and trekking.',
      tips: 'Neelum Valley is incredibly scenic but roads can be narrow. Drive carefully and enjoy the views.'
    }
  };

  regionsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.region-card');
    if (!card) return;

    const regionKey = card.dataset.region;
    const data = regionData[regionKey];
    if (!data) return;

    // Update active state on cards
    document.querySelectorAll('.region-card').forEach(c => c.style.outline = 'none');
    card.style.outline = '3px solid var(--emerald)';
    card.style.outlineOffset = '4px';

    // Render detail panel
    regionDetail.innerHTML = `
      <div class="region-detail__content active">
        <h3 class="region-detail__name">${data.name}</h3>
        <p class="region-detail__desc">${data.desc}</p>
        <div class="region-detail__info">
          <div>
            <p class="region-detail__info-title">Top Attractions</p>
            <ul class="region-detail__info-list">${data.attractions.split(', ').map(a => `<li>&#8226; ${a}</li>`).join('')}</ul>
          </div>
          <div>
            <p class="region-detail__info-title">Best Time to Visit</p>
            <p class="region-detail__info-list" style="margin-bottom:16px">${data.bestTime}</p>
            <p class="region-detail__info-title">Travel Tips</p>
            <p class="region-detail__info-list">${data.tips}</p>
          </div>
        </div>
      </div>
    `;
  });
})();


// ===== Feature 4: Animated Statistics Counter =====
(function initStatsCounter() {
  const statsSection = document.getElementById('stats');
  const statNumbers = document.querySelectorAll('.stat-item__number');
  let animated = false;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const startTime = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.floor(easedProgress * target);

      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(num => animateCounter(num));
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) {
    observer.observe(statsSection);
  }
})();


// ===== Feature 5: Testimonial Auto Slider =====
(function initTestimonialSlider() {
  const track = document.getElementById('testimonial-track');
  const dotsContainer = document.getElementById('testimonial-dots');
  const slider = document.getElementById('testimonial-slider');
  const items = track.querySelectorAll('.testimonial-item');
  const total = items.length;
  let current = 0;
  let interval;

  // Create dots
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('testimonial-dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.testimonial-dot');

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    resetInterval();
  }

  function next() {
    goTo((current + 1) % total);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 4000);
  }

  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(interval));
  slider.addEventListener('mouseleave', resetInterval);

  // Start
  resetInterval();
})();


// ===== Feature 6: Contact Form Validation =====
(function initFormValidation() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const messageInput = document.getElementById('contact-message');

  function showError(input, errorId, message) {
    const errorEl = document.getElementById(errorId);
    input.classList.add('error');
    errorEl.textContent = message;
  }

  function clearError(input, errorId) {
    const errorEl = document.getElementById(errorId);
    input.classList.remove('error');
    errorEl.textContent = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^[\+]?[\d\s\-\(\)]{7,}$/.test(phone.trim());
  }

  // Clear errors on input
  [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      const errorId = `${input.id.split('-')[1]}-error`;
      clearError(input, errorId);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Name validation
    if (!nameInput.value.trim()) {
      showError(nameInput, 'name-error', 'Name is required');
      valid = false;
    } else {
      clearError(nameInput, 'name-error');
    }

    // Email validation
    if (!emailInput.value.trim()) {
      showError(emailInput, 'email-error', 'Email is required');
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'email-error', 'Please enter a valid email address');
      valid = false;
    } else {
      clearError(emailInput, 'email-error');
    }

    // Phone validation
    if (!phoneInput.value.trim()) {
      showError(phoneInput, 'phone-error', 'Phone number is required');
      valid = false;
    } else if (!isValidPhone(phoneInput.value.trim())) {
      showError(phoneInput, 'phone-error', 'Please enter a valid phone number');
      valid = false;
    } else {
      clearError(phoneInput, 'phone-error');
    }

    // Message validation
    if (!messageInput.value.trim()) {
      showError(messageInput, 'message-error', 'Message is required');
      valid = false;
    } else {
      clearError(messageInput, 'message-error');
    }

    if (valid) {
      // Feature 7: Success Toast
      showToast();
      form.reset();
    }
  });
})();


// ===== Feature 7: Success Toast Notification =====
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
