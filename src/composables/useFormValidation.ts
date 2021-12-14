import { reactive } from 'vue'

export type FormErrorType = Record<string, string>
const errors: FormErrorType = reactive({})


export default function useFormValidation()  {

	/**
	 * @description - This function is used to validate empty fields in the form
	 * @param {string} fieldName - The name of the field to be validated
	 * @param {string} fieldValue - The value of the field to be validated
	 * @returns {void}
	 */
	const validateNameField = (fieldName: string, fieldValue: string): void => {
		errors[fieldName] = fieldValue === "" ? "The " + fieldName + " field is required" : "";
	}
	return { errors, validateNameField }
}
