import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { sendEmail } from 'src/services/email.service';

export const contactUs = {
	sendEmail: defineAction({
		accept: 'form',
		input: z.object({
			fullName: z.string(),
			email: z.string().email(),
			message: z.string(),
		}),
		handler: async (input) => {
			console.log('Sending email', input);

			const { error } = await sendEmail({
				name: input.fullName,
				to: 'mail@shamscorner.com',
				subject: 'Contact from hobenakicoffee.com (Respond)!',
				html: `
					<p>Hi team,</p>
					<p>${input.message}</p>
					<br>
					<p>Regards,<br> ${input.fullName}<br>${input.email}</p>
				`,
			});

			if (error) {
				console.log('Failed to send email', error);
				return {
					success: false,
					message: 'Failed to send email!',
				};
			}

			return {
				success: true,
				message: 'Email sent successfully!',
			};
		},
	}),
};
