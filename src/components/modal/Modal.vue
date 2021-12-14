<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
	props: {
		modalId: {
			type: String,
			required: false,
		},
		headerTitle: {
			type: String,
			required: false,
		},
		headerSubtitle: {
			type: String,
			required: false,
		},
	},
	emits: ['close'],
	setup (props, { emit }) {

		const { modalId } = toRefs(props)

		const modalInfo = computed(() => `modalId: ${modalId.value}`)

		/**
		 * @description - Close modal
		 * @emit close - Emit close event
		 * @returns {void}
		 */
		const close = (): void => {
			emit('close',`closed - ${modalInfo.value}`)
		}

		/**
		 * @description - close Modal Wrapper
		 * @param {Event} e - Prevents closing modal from when clicking into modal actions
		 * @returns {void}
		 */
		const closeWrapper = (e: Event): void => {
			if (e.target === e.currentTarget) {
				close()
			}
		}

		return { close, closeWrapper, }
	}
})
</script>
<template>
	<div class="modal-mask" :id="modalId">
		<div class="modal-wrapper" @click="closeWrapper">
			<div class="modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div class="modal-content px-8 pt-8 pr-8 pl-8 pb-4">
					{{ modalId }}
					<div class="modal-header text-center">
						<h2 class="font-medium self-center text-xl sm:text-3xl text-gray-800">{{ headerTitle }}</h2>
						<p class="mt-4 self-center text-xl sm:text-sm text-gray-800">{{ headerSubtitle }}</p>
					</div>
					<div class="modal-body">
						<slot name="body">
							default body
						</slot>
					</div>
				</div>
				<div class="modal-footer bg-gray-50 px-2 py-3 sm:px-2 sm:flex sm:flex-row-reverse">
					<button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="close">Deactivate</button>
					<button type="button" class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="close">Deactivate</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.modal-mask {
	--card-width: 90%;

	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
		.modal-container {
			width: var(--card-width);
			margin: 0px auto;
			background-color: #fff;
			border-radius: 2px;
			transition: all .7s ease;
			animation: fadeIn .35s ease-in;
			.modal-header h3 { margin-top: 0; }
		}
	}
}
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: scale(0);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
@media (min-width: 992px) {
	.modal-mask {
		--card-width: 600px;
	}
}
@media (min-width: 768px) and (max-width: 991px) {
	.modal-mask {
		--card-width: 65%;
	}
}
</style>
