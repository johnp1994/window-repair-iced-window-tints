<template>
  <footer id="contact-footer" class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="~/assets/images/logo.png" alt="Iced Window Tints" class="footer-logo" />
          <p>Iced Window Tints — Premium Vehicle Tinting & Home Window Repair</p>
          <div class="footer-contact-info">
            <a href="tel:+12166788692"><i class="fas fa-phone"></i> (216) 678-8692</a>
            <a href="https://maps.google.com/?q=1418+E+176th+St,+Cleveland,+OH+44110" target="_blank"><i class="fas fa-map-marker-alt"></i> 1418 E 176th St, Cleveland, OH 44110</a>
            <a href="mailto:info@icedwindowtints.com"><i class="fas fa-envelope"></i> info@icedwindowtints.com</a>
          </div>
        </div>
        <div class="footer-links">
          <h4>CONTACT</h4>
          <p class="footer-label">business</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reviews">Testimonials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#contact-footer">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><a href="#services">Vehicle Window Tinting</a></li>
            <li><a href="#services">Home Window Repair</a></li>
            <li><a href="#services">Commercial Window Tinting</a></li>
            <li><a href="#services">Storm Window Solutions</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>SERVICE AREAS</h4>
          <ul>
            <li v-for="area in areas" :key="area">
              <a href="#service-areas">{{ area }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-hours">
          <h4>OPERATING HOURS</h4>
          <ul>
            <li v-for="day in hours" :key="day.label">
              <span>{{ day.label }}:</span> {{ day.time }}
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p>&copy; {{ currentYear }} Iced Window Tints. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const areas = [
  'Cleveland', 'Lakewood', 'Euclid', 'Parma', 'Cleveland Heights',
  'Shaker Heights', 'Garfield Heights', 'Solon', 'Beachwood', 'Westlake',
]

const hours = [
  { label: 'Sun', time: '8:00am - 5:00pm' },
  { label: 'Mon', time: '8:00am - 8:00pm' },
  { label: 'Tue', time: '8:00am - 8:00pm' },
  { label: 'Wed', time: '8:00am - 5:00pm' },
  { label: 'Thu', time: '8:00am - 8:00pm' },
  { label: 'Fri', time: '8:00am - 8:00pm' },
  { label: 'Sat', time: '8:00am - 8:00pm' },
]
</script>

<style scoped>
.site-footer {
  background: var(--dark);
  padding: 60px 0 0;
  color: #ccc;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  gap: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border-subtle);
}

.footer-logo {
  width: 80px;
  margin-bottom: 12px;
}

.footer-brand p {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-bottom: 16px;
  line-height: 1.5;
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-contact-info a {
  color: var(--gold);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color var(--transition-fast);
}

.footer-contact-info a:hover {
  color: var(--white);
}

.footer-links h4,
.footer-hours h4 {
  color: var(--white);
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
}

.footer-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links ul li a {
  color: var(--text-light);
  font-size: 0.82rem;
  transition: all var(--transition-fast);
}

.footer-links ul li a:hover {
  color: var(--gold);
  padding-left: 6px;
}

.footer-hours ul {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-hours ul li {
  font-size: 0.82rem;
  color: var(--text-light);
}

.footer-hours ul li span {
  color: var(--white);
  font-weight: 600;
  min-width: 40px;
  display: inline-block;
}

.footer-bottom {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-bottom p {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.footer-legal {
  display: flex;
  gap: 20px;
}

.footer-legal a {
  color: var(--text-light);
  font-size: 0.78rem;
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: var(--gold);
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
