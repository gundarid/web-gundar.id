<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

// Entity: Business logic for tagline
const tagline = "nothing says tech"
const emphasis = "like being on gundar.id_"
const description = "open-source platform that empowers students through efficient organization and automation."

// Animation state
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <main>
    <div>
      <!-- Hero Section - Get.tech inspired minimal & bold -->
      <section class="hero-section">
        <div class="hero-content" :class="{ 'fade-in': isVisible }">
          <h1 class="hero-title">
            <span class="hero-title-light">{{ tagline }}</span>
            <br>
            <span class="hero-title-emphasis">{{ emphasis }}</span>
          </h1>
          <p class="hero-description">{{ description }}</p>
        </div>
      </section>

      <!-- Trust Section -->
      <section class="trust-section">
        <div class="trust-content">
          <h2 class="trust-heading">
            <span class="trust-number">500+</span> students
            <br>
            trust <span class="trust-highlight">gundar.id</span> for
            <br>
            their academic needs.
          </h2>
        </div>
      </section>

      <!-- Contribute Section -->
      <section class="contribute-section">
        <article class="contribute-content">
          <h2 class="section-heading">we're still growing</h2>
          <p class="section-description">Join our open-source community. Whether you're a developer, designer, or student, your contributions matter.</p>
          
          <div class="contribute-grid">
            <div class="contribute-card">
              <div class="card-label">CODE /</div>
              <p class="card-text">Develop features, fix bugs, improve performance.</p>
            </div>
            <div class="contribute-card">
              <div class="card-label">DESIGN /</div>
              <p class="card-text">Create UI/UX, improve user experience.</p>
            </div>
            <div class="contribute-card">
              <div class="card-label">COMMUNITY /</div>
              <p class="card-text">Share ideas, report issues, help others.</p>
            </div>
          </div>

          <a href="https://github.com/gundarid" target="_blank" rel="noopener noreferrer" class="cta-button">
            <span>Join Us on GitHub</span>
            <svg class="arrow-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </article>
      </section>

      <!-- Projects Section -->
      <section class="projects-section">
        <article class="projects-content">
          <div class="projects-header">
            <h2 class="section-heading">our projects</h2>
            <p class="section-description">Tools we're building for the community.</p>
          </div>
          
          <div class="projects-grid">
            <div class="project-card">
              <div class="project-label">SECURITY /</div>
              <h3 class="project-title">API Visualization</h3>
              <p class="project-description">Secure your APIs with monitoring tools.</p>
            </div>
            <div class="project-card">
              <div class="project-label">TOOLS /</div>
              <h3 class="project-title">Shortlink</h3>
              <p class="project-description">Create and manage short URLs.</p>
            </div>
            <div class="project-card">
              <div class="project-label">NETWORK /</div>
              <h3 class="project-title">Free VPN</h3>
              <p class="project-description">Secure open-source VPN solution.</p>
            </div>
            <div class="project-card">
              <div class="project-label">DEVOPS /</div>
              <h3 class="project-title">Self-host Registry</h3>
              <p class="project-description">Host Docker images and repos.</p>
            </div>
          </div>
        </article>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <article class="cta-content">
          <h2 class="section-heading">try our URL shortener</h2>
          <p class="section-description">Create short, memorable links instantly.</p>
          <RouterLink to="/web/shortener" class="cta-button">
            <span>Get Started</span>
            <svg class="arrow-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </RouterLink>
        </article>
      </section>

      <!-- Footer -->
      <footer class="footer-section">
        <article class="footer-content">
          <div class="footer-grid">
            <div class="footer-brand">
              <h3 class="footer-logo">gundar.id</h3>
              <p class="footer-tagline">Empowering students with open-source tools.</p>
            </div>
            <div class="footer-links">
              <h4 class="footer-heading">Quick Links</h4>
              <ul class="footer-list">
                <li><RouterLink to="/web/about" class="footer-link">About</RouterLink></li>
                <li><RouterLink to="/web/shortener" class="footer-link">URL Shortener</RouterLink></li>
              </ul>
            </div>
            <div class="footer-links">
              <h4 class="footer-heading">Community</h4>
              <ul class="footer-list">
                <li><a href="https://github.com/gundarid" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a></li>
                <li><a href="#" class="footer-link">Contribute</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 gundar.id. All rights reserved.</p>
          </div>
        </article>
      </footer>
    </div>
  </main>
</template>

<style scoped>
/* Hero Section - Get.tech inspired bold typography */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(to bottom, var(--color-bg-dark) 0%, var(--color-bg-darker) 100%);
}

.hero-content {
  max-width: 1400px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.hero-content.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  margin-bottom: 2rem;
}

.hero-title-light {
  display: block;
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
}

.hero-title-emphasis {
  display: block;
  font-size: clamp(3rem, 12vw, 10rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--color-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Trust Section */
.trust-section {
  padding: var(--space-section-xl) 2rem;
  background: var(--color-bg-section);
}

.trust-content {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.trust-heading {
  font-size: clamp(2rem, 6vw, 4.5rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.trust-number {
  color: var(--color-text-primary);
  font-weight: 700;
}

.trust-highlight {
  color: var(--color-text-primary);
  font-weight: 700;
}

/* Contribute Section */
.contribute-section {
  padding: var(--space-section-lg) 2rem;
  background: var(--color-bg-dark);
}

.contribute-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-heading {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.section-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-secondary);
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.contribute-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.contribute-card {
  text-align: left;
  padding: 2rem;
  background: var(--color-bg-section);
  border-radius: 0.5rem;
  transition: transform var(--transition-normal);
}

.contribute-card:hover {
  transform: translateY(-4px);
}

.card-label {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.card-text {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Projects Section */
.projects-section {
  padding: var(--space-section-lg) 2rem;
  background: var(--color-bg-section);
}

.projects-content {
  max-width: 1400px;
  margin: 0 auto;
}

.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 2rem;
  background: var(--color-bg-dark);
  border-radius: 0.5rem;
  transition: all var(--transition-normal);
  border: 1px solid transparent;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-text-muted);
}

.project-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
}

.project-description {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: var(--space-section-lg) 2rem;
  background: var(--color-bg-dark);
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: var(--color-accent);
  color: var(--color-bg-dark);
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  transition: all var(--transition-normal);
  margin-top: 2rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.15);
}

.arrow-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform var(--transition-fast);
}

.cta-button:hover .arrow-icon {
  transform: translateX(4px);
}

/* Footer */
.footer-section {
  padding: var(--space-section-md) 2rem;
  background: var(--color-bg-darker);
  border-top: 1px solid var(--color-text-muted);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.footer-tagline {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.footer-heading {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.footer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-text-primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-text-muted);
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .contribute-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
