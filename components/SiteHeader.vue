<template>
  <header id="site-header" :class="{ scrolled: isScrolled }">
    <div class="header-inner">
      <NuxtLink to="/" class="logo" id="header-logo">
        <img src="~/assets/images/logo.png" alt="Iced Window Tints Logo" />
      </NuxtLink>

      <nav id="main-nav" :class="{ active: isMobileMenuOpen }">
        <ul class="nav-list">
          <li>
            <a href="#hero" class="nav-link" :class="{ active: activeSection === 'hero' }" @click="scrollTo('#hero')">HOME</a>
          </li>
          <li class="has-dropdown" :class="{ open: openDropdown === 'services' }">
            <a href="#services" class="nav-link" :class="{ active: activeSection === 'services' }" @click.prevent="handleDropdownClick('services', $event)">
              SERVICES <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="dropdown">
              <li><a href="#services" @click="scrollTo('#services')">Auto Window Tinting</a></li>
              <li><a href="#services" @click="scrollTo('#services')">Vinyl Wrap Services</a></li>
              <li><a href="#services" @click="scrollTo('#services')">Professional Detailing</a></li>
              <li><a href="#services" @click="scrollTo('#services')">Mechanical & Custom</a></li>
              <li><a href="#services" @click="scrollTo('#services')">Home/Commercial Tint</a></li>
            </ul>
          </li>
          <li>
            <a href="#gallery" class="nav-link" :class="{ active: activeSection === 'gallery' }" @click="scrollTo('#gallery')">GALLERY</a>
          </li>
          <li class="has-dropdown" :class="{ open: openDropdown === 'areas' }">
            <a href="#service-areas" class="nav-link" :class="{ active: activeSection === 'service-areas' }" @click.prevent="handleDropdownClick('areas', $event)">
              SERVICE AREAS <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="dropdown">
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Cleveland</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Lakewood</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Euclid</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Parma</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Cleveland Heights</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Shaker Heights</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Garfield Heights</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Solon</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Beachwood</a></li>
              <li><a href="#service-areas" @click="scrollTo('#service-areas')">Westlake</a></li>
            </ul>
          </li>
          <li>
            <a href="#faq" class="nav-link" :class="{ active: activeSection === 'faq' }" @click="scrollTo('#faq')">BLOG</a>
          </li>
          <li>
            <a href="#contact-footer" class="nav-link" :class="{ active: activeSection === 'contact-footer' }" @click="scrollTo('#contact-footer')">CONTACT</a>
          </li>
        </ul>
      </nav>

      <div class="header-ctas">
        <a href="#quote-form" class="btn btn-yellow" id="header-quote-btn" @click="scrollTo('#quote-form')">GET FREE QUOTE</a>
        <a href="tel:+12166788692" class="btn btn-white" id="header-phone-btn">
          <i class="fas fa-phone"></i> (216) 678-8692
        </a>
      </div>

      <button
        class="mobile-menu-toggle"
        :class="{ active: isMobileMenuOpen }"
        id="mobile-menu-toggle"
        aria-label="Toggle Menu"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const openDropdown = ref<string | null>(null)
const activeSection = ref('hero')

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleDropdownClick = (dropdown: string, e: Event) => {
  if (window.innerWidth <= 768) {
    e.preventDefault()
    openDropdown.value = openDropdown.value === dropdown ? null : dropdown
  }
}

const scrollTo = (selector: string) => {
  if (import.meta.client) {
    const el = document.querySelector(selector)
    if (el) {
      const headerH = document.getElementById('site-header')?.offsetHeight || 80
      const top = el.getBoundingClientRect().top + window.scrollY - headerH
      window.scrollTo({ top, behavior: 'smooth' })
    }
    // Close mobile menu after click
    if (window.innerWidth <= 768) {
      isMobileMenuOpen.value = false
      openDropdown.value = null
    }
  }
}

onMounted(() => {
  // Sticky header
  const onScroll = () => {
    isScrolled.value = window.scrollY > 100

    // Active section tracking
    const sections = document.querySelectorAll('section[id]')
    let current = 'hero'
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top < 200) {
        current = section.getAttribute('id') || 'hero'
      }
    })
    activeSection.value = current
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
})
</script>

<style scoped>
#site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(var(--navy-rgb), 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  transition: all var(--transition-fast);
}

#site-header.scrolled {
  background: rgba(var(--navy-rgb), 0.98);
  box-shadow: var(--shadow-header);
}

.header-inner {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}

.logo img {
  height: 60px;
  width: auto;
}

#main-nav .nav-list {
  display: flex;
  gap: 0;
}

#main-nav .nav-link {
  color: var(--white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 28px 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  transition: color var(--transition-fast);
}

#main-nav .nav-link::after {
  content: '';
  position: absolute;
  bottom: 20px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transition: transform var(--transition-fast);
}

#main-nav .nav-link:hover::after,
#main-nav .nav-link.active::after {
  transform: scaleX(1);
}

#main-nav .nav-link:hover,
#main-nav .nav-link.active {
  color: var(--gold);
}

#main-nav .nav-link i {
  font-size: 0.6rem;
  transition: transform var(--transition-fast);
}

/* Dropdown */
.has-dropdown {
  position: relative;
}
.has-dropdown:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.has-dropdown:hover .nav-link i {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 250px;
  background: var(--navy);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-fast);
  z-index: 100;
}

.dropdown li a {
  display: block;
  padding: 12px 20px;
  color: #ccc;
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  transition: all var(--transition-fast);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dropdown li a:hover {
  color: var(--gold);
  background: rgba(var(--gold-rgb), 0.08);
  padding-left: 26px;
}

.dropdown li:last-child a {
  border-bottom: none;
  border-radius: 0 0 8px 8px;
}

/* Header CTAs */
.header-ctas {
  display: flex;
  gap: 10px;
  align-items: center;
}

.header-ctas .btn {
  padding: 10px 20px;
  font-size: 0.75rem;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-toggle span {
  width: 28px;
  height: 3px;
  background: var(--white);
  border-radius: 3px;
  transition: all var(--transition-fast);
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}
.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}
.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

/* ---- RESPONSIVE ---- */
@media (max-width: 768px) {
  #main-nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    background: var(--navy);
    padding: 20px;
    transform: translateY(-120%);
    transition: transform var(--transition-medium);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }

  #main-nav.active {
    transform: translateY(0);
  }

  #main-nav .nav-list {
    flex-direction: column;
    gap: 0;
  }

  #main-nav .nav-link {
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  #main-nav .nav-link::after { display: none; }

  .dropdown {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: rgba(var(--navy-rgb), 0.5);
    border-radius: 0;
    display: none;
  }

  .has-dropdown.open .dropdown {
    display: block;
  }

  .header-ctas { display: none; }
  .mobile-menu-toggle { display: flex; }
}
</style>
