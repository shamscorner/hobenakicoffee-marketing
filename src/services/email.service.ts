export const apiKey = import.meta.env.PLUNK_SECRET_KEY;
export const apiUrl = import.meta.env.PLUNK_API_URL;

export const sendEmail = async ({
	name,
	to,
	subject,
	html,
}: {
	name?: string;
	from?: string;
	to: string;
	subject: string;
	html: string;
}): Promise<{ success: boolean; data?: any; error?: any }> => {
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
		body: JSON.stringify({
			to: to,
			subject: subject,
			body: html,
			subscribed: true,
			name: name,
		}),
	};

	try {
		const response = await fetch(`${apiUrl}/v1/send`, options);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);

		return {
			success: true,
			data,
		};
	} catch (error) {
		console.error('Error sending email:', error);

		return {
			success: false,
			error,
		};
	}
};
