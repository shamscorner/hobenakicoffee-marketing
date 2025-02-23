import { i18nObject } from '@i18n/i18n-util';
import { loadLocaleAsync } from '@i18n/i18n-util.async';

await loadLocaleAsync('bn');

export const LL = i18nObject('bn');
