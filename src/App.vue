<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useModalStore } from '@store/useModalStore'
import { ModalTypes } from '@@types/index'
// * Components [Navbar, Modal]
import Navbar from '@components/nav/Navbar.vue'
import Modal from '@components/modal/Modal.vue'
import Form from '@components/form/Form.vue'
import NameField from '@components/form/NameField.vue'

// * Store
const modalStore = useModalStore()
const { modalShow, modalId } = storeToRefs(modalStore)

/**
 * @description Opens Modal with ID
 * @param {ModalTypes} currentModalId - Current modal id Inferred type
 * @returns {void}
 */
const openModal = (currentModalId: ModalTypes): void => {
	modalStore.modalId = currentModalId
	modalStore.open(modalId.value as ModalTypes)
}
/**
 * @description - Cloases Modal and sends info back to parent component
 * @param {string} closedInfo - information needed when closing the modal
 * @returns {any}
 */
const closeModal = (closedInfo: string): any => {
	console.log('closeModal ' + closedInfo )
	modalStore.close()
};
</script>

<template>
	<Navbar @openModal="openModal" />

	<!-- login modal -->
	<transition name="modal">
		<Modal v-if="modalShow" modalId="Sign in" headerTitle="Welcome Back" headerSubtitle="Enter your credentials to access your account" @close="closeModal">
			<template #body>
				<Form />
			</template>
		</Modal> <!-- end login modal -->
	</transition>
	<router-view></router-view>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app {
	font-family: 'Karla', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

</style>
