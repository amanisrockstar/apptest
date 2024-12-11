/* eslint-disable no-console */
'use server';

export async function submitTestDetails() {
	try {
		const companyData = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());

		return {
			success: true,
			message: 'Test details submitted',
			companyData,
		};
	} catch (error) {
		console.error(error);

		return {
			success: false,
			message: 'Failed to submit test details',
		};
	}
}
