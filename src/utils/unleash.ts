import { UnleashClient } from 'unleash-proxy-client';

export const unleash = new UnleashClient({
	url: 'https://ff.hobenakicoffee.com/api/frontend/',
	clientKey: import.meta.env.UNLEASH_API_KEY,
	appName: 'unleash-onboarding-javascript',
});

unleash.start();
