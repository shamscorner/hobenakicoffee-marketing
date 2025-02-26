/// <reference path="../.astro/types.d.ts" />
// /// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_SIGN_UP_PAGE_URL: string;
	readonly PUBLIC_SIGN_IN_PAGE_URL: string;
	readonly GTM_ID: string;
	readonly SITE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
