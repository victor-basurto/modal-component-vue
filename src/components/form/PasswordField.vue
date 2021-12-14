<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'PasswordField',
	setup () {


		return {}
	}
})
</script>
<template>
	<div class="flex flex-col mb-6">
		<label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
		<div class="relative">
			<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
				<span><i class="fas fa-lock text-blue-500"></i></span>
			</div>

			<input id="password" type="password" name="password" class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your password" />
		</div>
	</div>
</template>
<style scoped>

</style>
