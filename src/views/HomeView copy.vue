<script setup>
import { RouterLink } from 'vue-router'

const description = "gundar.id is an open-source platform designed to empower students by streamlining their academic life through efficient organization, collaboration, and automation."
</script>

<template>
  <main>
    <div> 
      <section>
        <div class="w-full h-screen flex flex-col justify-center text-lg gap-4 sm:p-24"><!-- Bagian sini bisa dibuat wrapper -->
          <p class="text-6xl">gundar.id</p>
          <p class="font-bold">The Open Source Academic Ecosystem.</p>
          <p class="max-w-[1000px]">{{ description }}</p>
          <RouterLink
            to="/web/shortener"
            class="inline-flex w-fit items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition"
          >
            Coba URL Shortener
          </RouterLink>
        </div>
      </section>
    </div>
  </main>
</template>
