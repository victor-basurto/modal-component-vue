import { defineStore, _GettersTree, _ActionsTree } from 'pinia'
import { IModalState } from './interfaces'
import { ModalTypes } from '@@types/index'

// Modal State
export const state: IModalState = {
	modalId: '',
	modalTitle: '',
	modalBody: '',
	modalShow: false,
	editModalById: ''
};

export interface IGetters extends _GettersTree<IModalState> {
	getModalInfo: (state: IModalState) => string;
}
export interface IActions extends _ActionsTree {
	close(): void;
	open(modalId: ModalTypes): void;
};
export const useModalStore = defineStore('modalStore', {
	state: () => (state as IModalState),
	getters: {
		getModalInfo: (state: IModalState) => `Current Modal - ${state.modalId} ${state.modalTitle} ${state.modalBody}`,
	} as IGetters,
	actions: {

		/**
		 * @description - Close the modal and Reset the state
		 * @returns {void}
		 */
		close(): void {
			/**
			 * @description - Reset the state
			 * @type {IModalState} - Current Modal State
			 * @memberof IModalState
			 * @property {string} modalId
			 * @property {string} modalTitle
			 * @property {string} modalBody
			 * @property {boolean} modalShow
			 * @property {string} editModalById
			 *
			 */
			this.$patch((state: IModalState): void => {
				state.modalId = '',
				state.modalTitle = '',
				state.modalBody = '',
				state.modalShow = false,
				state.editModalById = ''
			})
		},
		open(modalId: ModalTypes): void {
			console.log(modalId)
			this.$patch((state: IModalState) => {

				state.modalId = modalId || '',
				state.modalShow = true;
			});
		}
	} as IActions
});
