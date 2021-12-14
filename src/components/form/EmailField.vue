<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import useFormValidation from '@composables/useFormValidation'

export default defineComponent({
	name: 'EmailField',
	setup () {

		const input = ref('')
		const { validateNameField, errors } = useFormValidation()
		const validateInput = () => {
			validateNameField('email', input.value)
		}

		return {
			input,
			validateInput,
			errors
		}
	}
})
</script>
<template>
	<div class="flex flex-col mb-5">
		<label for="email" class="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
		<div class="relative">
			<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
				<i class="fas fa-at text-blue-500"></i>
			</div>

			<input
				id="email"
				type="email"
				name="email"
				class="
					text-sm
					placeholder-gray-500
					pl-10 pr-4
					rounded-2xl
					border
					border-gray-400
					w-full py-2
					focus:outline-none
					focus:border-blue-400"
				placeholder="Enter your email"
				autocomplete="off"
				v-model="input"
				@keyup="validateInput"
				@blue="validateInput"
			/>
		</div>
		<div class="show-pop-up-field-error" v-if="errors.email">
			<span class="text-red-500 text-sm">{{ errors.email }}</span>
		</div>
	</div>
</template>
<style scoped>

</style>
