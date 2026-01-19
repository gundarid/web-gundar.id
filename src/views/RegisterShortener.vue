<script setup>
import { computed, ref } from 'vue'

const urlInput = ref('')
const customCode = ref('')
const expireDays = ref('')
const loading = ref(false)
const error = ref('')
const result = ref(null)

const canSubmit = computed(() => urlInput.value.trim() !== '' && !loading.value)

const submitForm = async (event) => {
	event.preventDefault()
	error.value = ''
	result.value = null
	loading.value = true

	const days = expireDays.value === '' ? 0 : Number(expireDays.value)
	const payload = {
		url: urlInput.value.trim(),
		expire_in_days: Number.isFinite(days) && days > 0 ? days : 0,
	}

	const code = customCode.value.trim()
	if (code) {
		payload.code = code
	}

	try {
		const res = await fetch('/api/shorten', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})

		const body = await res.json().catch(() => ({}))

		if (!res.ok) {
			error.value = body.error || 'Gagal membuat short link'
			return
		}

		result.value = body
	} catch (err) {
		error.value = err instanceof Error ? err.message : 'Terjadi kesalahan'
	} finally {
		loading.value = false
	}
}
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
		<!-- Header -->
		<header class="bg-white shadow-sm">
			<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between h-16">
					<div class="flex items-center">
						<router-link to="/" class="text-2xl font-bold text-gray-900">gundar.id</router-link>
					</div>
					<div class="flex items-center space-x-4">
						<router-link to="/" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
						<router-link to="/web/about" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</router-link>
					</div>
				</div>
			</nav>
		</header>

		<main class="py-12">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12">
					<div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
						<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
						</svg>
						URL Shortener
					</div>
					<h1 class="text-4xl font-bold text-gray-900 mb-4">Create Short Links Instantly</h1>
					<p class="text-xl text-gray-600 max-w-2xl mx-auto">Transform long URLs into clean, shareable links. Add custom codes and set expiration dates for better control.</p>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-1 gap-8">
					<!-- Form Card -->
					<div class="bg-white rounded-xl shadow-lg p-8">
						<h2 class="text-2xl font-semibold text-gray-900 mb-6">Shorten Your URL</h2>
						<form @submit="submitForm" class="space-y-6">
							<div>
								<label class="block text-sm font-medium text-gray-700 mb-2">Target URL</label>
								<input
									v-model="urlInput"
									type="url"
									required
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
									placeholder="https://example.com/your-long-url"
								/>
							</div>

							<div>
								<label class="block text-sm font-medium text-gray-700 mb-2">Custom Code <span class="text-gray-500">(optional)</span></label>
								<input
									v-model="customCode"
									type="text"
									maxlength="32"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
									placeholder="my-custom-link (3-32 alphanumeric chars)"
								/>
								<p class="text-xs text-gray-500 mt-1">Leave empty for auto-generated code</p>
							</div>

							<div>
								<label class="block text-sm font-medium text-gray-700 mb-2">Expiration <span class="text-gray-500">(optional)</span></label>
								<input
									v-model="expireDays"
									type="number"
									min="0"
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
									placeholder="Days (0 = never expires)"
								/>
							</div>

							<div class="flex items-center justify-between">
								<button
									type="submit"
									:disabled="!canSubmit"
									class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
								>
									<span v-if="loading" class="flex items-center justify-center">
										<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
											<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Creating...
									</span>
									<span v-else>Create Short Link</span>
								</button>
							</div>

							<div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
								<div class="flex">
									<svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
									</svg>
									<p class="text-sm text-red-800">{{ error }}</p>
								</div>
							</div>
						</form>
					</div>

					<!-- Result and Info -->
					<div class="space-y-6">
						<div v-if="result" class="bg-white rounded-xl shadow-lg p-8">
							<div class="flex items-center mb-4">
								<svg class="w-8 h-8 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
								</svg>
								<h3 class="text-xl font-semibold text-gray-900">Success!</h3>
							</div>
							<p class="text-gray-600 mb-4">Your short link is ready:</p>
							<a
								:href="result.short_url"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium"
							>
								{{ result.short_url }}
								<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
								</svg>
							</a>
							<p class="text-sm text-gray-500 mt-2">Redirects to: {{ result.target }}</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>
