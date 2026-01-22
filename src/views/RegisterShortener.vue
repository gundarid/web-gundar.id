<script setup>
import { computed, ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// Use Case: Shorten URL with validation
const urlInput = ref('')
const customCode = ref('')
const expireDays = ref('')
const loading = ref(false)
const error = ref('')
const result = ref(null)
const isVisible = ref(false)

const canSubmit = computed(() => urlInput.value.trim() !== '' && !loading.value)

// Port: API Gateway
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
			error.value = body.error || 'Failed to create short link'
			return
		}

		result.value = body
	} catch (err) {
		error.value = err instanceof Error ? err.message : 'An error occurred'
	} finally {
		loading.value = false
	}
}

const copyToClipboard = async () => {
	if (result.value?.short_url) {
		await navigator.clipboard.writeText(result.value.short_url)
	}
}

onMounted(() => {
	isVisible.value = true
})
</script>

<template>
	<main class="shortener-page">
		<!-- Header Section -->
		<section class="shortener-header" :class="{ 'fade-in': isVisible }">
			<div class="header-content">
				<RouterLink to="/" class="back-link">
					<svg fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
					</svg>
					<span>Back</span>
				</RouterLink>
				
				<div class="header-label">TOOLS /</div>
				<h1 class="page-title">url shortener</h1>
				<p class="page-description">Transform long URLs into clean, shareable links.</p>
			</div>
		</section>

		<!-- Form Section -->
		<section class="form-section">
			<article class="form-container">
				<form @submit="submitForm" class="shortener-form">
					<div class="form-group">
						<label class="form-label">Target URL</label>
						<input
							v-model="urlInput"
							type="url"
							required
							class="form-input"
							placeholder="https://example.com/your-long-url"
						/>
					</div>

					<div class="form-row">
						<div class="form-group">
							<label class="form-label">
								Custom Code 
								<span class="label-optional">(optional)</span>
							</label>
							<input
								v-model="customCode"
								type="text"
								maxlength="32"
								class="form-input"
								placeholder="my-custom-link"
							/>
							<p class="form-hint">3-32 characters, auto-generated if empty</p>
						</div>

						<div class="form-group">
							<label class="form-label">
								Expiration 
								<span class="label-optional">(optional)</span>
							</label>
							<input
								v-model="expireDays"
								type="number"
								min="0"
								class="form-input"
								placeholder="Days"
							/>
							<p class="form-hint">0 = never expires</p>
						</div>
					</div>

					<button
						type="submit"
						:disabled="!canSubmit"
						class="submit-button"
					>
						<span v-if="loading" class="loading-content">
							<svg class="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Creating...
						</span>
						<span v-else>Create Short Link</span>
					</button>

					<div v-if="error" class="error-message">
						<svg fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
						</svg>
						<p>{{ error }}</p>
					</div>
				</form>

				<!-- Result -->
				<div v-if="result" class="result-card">
					<div class="result-header">
						<svg fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
						</svg>
						<h3>link created successfully</h3>
					</div>
					
					<div class="result-url">
						<a
							:href="result.short_url"
							target="_blank"
							rel="noopener noreferrer"
							class="short-url"
						>
							{{ result.short_url }}
						</a>
						<button @click="copyToClipboard" class="copy-button" title="Copy to clipboard">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
							</svg>
						</button>
					</div>
					
					<div class="result-target">
						<span class="target-label">redirects to:</span>
						<span class="target-url">{{ result.target }}</span>
					</div>
				</div>
			</article>
		</section>
	</main>
</template>

<style scoped>
/* Shortener Page - Get.tech inspired */
.shortener-page {
  min-height: 100vh;
  background: var(--color-bg-dark);
}

/* Header Section */
.shortener-header {
  padding: var(--space-section-md) 2rem;
  background: linear-gradient(to bottom, var(--color-bg-darker) 0%, var(--color-bg-dark) 100%);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}

.shortener-header.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  margin-bottom: 2rem;
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: var(--color-text-primary);
}

.back-link svg {
  width: 1.25rem;
  height: 1.25rem;
}

.header-label {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.page-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
}

.page-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Form Section */
.form-section {
  padding: var(--space-section-md) 2rem;
}

.form-container {
  max-width: 700px;
  margin: 0 auto;
}

.shortener-form {
  background: var(--color-bg-section);
  padding: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-text-muted);
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 2rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

.label-optional {
  font-weight: 400;
  color: var(--color-text-muted);
  text-transform: lowercase;
}

.form-input {
  width: 100%;
  padding: 1rem 1.25rem;
  background: var(--color-bg-dark);
  border: 1px solid var(--color-text-muted);
  border-radius: 0.375rem;
  color: var(--color-text-primary);
  font-size: 1rem;
  transition: all var(--transition-fast);
}

.form-input::placeholder {
  color: var(--color-text-muted);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-text-primary);
  background: var(--color-bg-darker);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.form-hint {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-top: 0.5rem;
}

.submit-button {
  width: 100%;
  padding: 1.25rem 2rem;
  background: var(--color-accent);
  color: var(--color-bg-dark);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.spinner {
  width: 1.25rem;
  height: 1.25rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Error Message */
.error-message {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0.375rem;
  color: #fca5a5;
  margin-top: 1.5rem;
}

.error-message svg {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.error-message p {
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Result Card */
.result-card {
  background: var(--color-bg-section);
  padding: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-text-primary);
  animation: slideUp 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.result-header svg {
  width: 2rem;
  height: 2rem;
  color: #10b981;
  flex-shrink: 0;
}

.result-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.result-url {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  background: var(--color-bg-dark);
  border-radius: 0.375rem;
  margin-bottom: 1rem;
}

.short-url {
  flex: 1;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text-primary);
  word-break: break-all;
  transition: color var(--transition-fast);
}

.short-url:hover {
  color: var(--color-text-secondary);
}

.copy-button {
  padding: 0.5rem;
  background: transparent;
  border: 1px solid var(--color-text-muted);
  border-radius: 0.375rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.copy-button:hover {
  background: var(--color-bg-section);
  color: var(--color-text-primary);
  border-color: var(--color-text-primary);
}

.copy-button svg {
  width: 1.25rem;
  height: 1.25rem;
  display: block;
}

.result-target {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.target-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.target-url {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  word-break: break-all;
}

/* Responsive */
@media (max-width: 768px) {
  .shortener-form {
    padding: 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .result-card {
    padding: 1.5rem;
  }
  
  .result-url {
    flex-direction: column;
    align-items: stretch;
  }
  
  .copy-button {
    width: 100%;
  }
}
</style>
