<script setup>
import { RouterLink } from 'vue-router'

const description = "open-source platform designed to empower students by streamlining their academic life through efficient organization, collaboration, and automation."
</script>

<template>
  <main>
    <div>
      <section class="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 text-gray-600">
        <div class="text-center px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl sm:text-6xl lg:text-[10rem] font-bold mb-4">Gundar.id</h1>
          <p class="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto">{{ description }}</p>
        </div>
      </section>

      <section class="my-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Contribute to gundar.id</h2>
          <p class="text-lg text-gray-600 mb-8">We are still growing and need your help! Join our open-source community to build the future of academic tools. Whether you're a developer, designer, or student, your contributions matter.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Code</h3>
              <p class="text-gray-600 text-sm">Help develop features, fix bugs, or improve performance.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p class="text-gray-600 text-sm">Create UI/UX designs or improve user experience.</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p class="text-gray-600 text-sm">Share ideas, report issues, or help others.</p>
            </div>
          </div>
          <a href="https://github.com/gundarid" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition duration-300 shadow-lg">
            Join Us on GitHub
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </section>

      <section class="py-16 my-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900">Our Projects</h2>
            <p class="mt-4 text-lg text-gray-600">Explore the tools and services we're building for the community.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Basic Security and API Visualization</h3>
              <p class="text-gray-600 text-sm">Secure your APIs with visualization tools for better monitoring and management.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Shortlink</h3>
              <p class="text-gray-600 text-sm">Create and manage short URLs with custom codes and expiration options.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Free VPN Service</h3>
              <p class="text-gray-600 text-sm">Secure your internet connection with our free, open-source VPN solution.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Selfhost Repository and Image Registry</h3>
              <p class="text-gray-600 text-sm">Host your own Docker images and repositories with ease.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="my-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Try Our URL Shortener</h2>
          <p class="text-lg text-gray-600 mb-8">Create short, memorable links instantly. Perfect for sharing and
            tracking.</p>
          <RouterLink to="/web/shortener"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg">
            Get Started
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </RouterLink>
        </div>
      </section>

      <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-4">gundar.id</h3>
              <p class="text-gray-400 text-sm">Empowering students with open-source academic tools.</p>
            </div>
            <div>
              <h4 class="text-md font-medium mb-4">Quick Links</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  <RouterLink to="/web/about" class="text-gray-400 hover:text-white transition">About</RouterLink>
                </li>
                <li>
                  <RouterLink to="/web/shortener" class="text-gray-400 hover:text-white transition">URL Shortener
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-md font-medium mb-4">Community</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="https://github.com/yourusername/gundar.id" target="_blank" rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white transition">GitHub</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition">Contribute</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-8 pt-8 text-center">
            <p class="text-gray-400 text-sm">&copy; 2026 gundar.id. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<style scoped>
section.bg-cover {
  background-image: url('/imgs/image.webp');
}
</style>