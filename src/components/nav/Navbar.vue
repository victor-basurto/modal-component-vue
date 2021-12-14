<template>
	<nav class="font-sans flex flex-col text-white text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full bg-gray-800">
		<div class="mb-2 sm:mb-0">
			<a href="/home" class="text-2xl no-underline ">Home</a>
		</div>
		<div>
			<a href="#" class="text-lg no-underline ml-2" @click.prevent="openModal">Sign in</a>

			<a href="/two" v-if="isLoggedIn" class="text-lg no-underline ml-2">Two</a>
			<a href="/three" v-if="isLoggedIn" class="text-lg no-underline ml-2">Three</a>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'Navbar',
	setup (props, { emit }) {
		const isLoggedIn = ref(false)
		const openModal = () => {
			emit('openModal', 'login modal')
		}

		return {
			isLoggedIn,
			openModal
		}
	}
})
</script>

<style scoped lang="scss">

</style>
