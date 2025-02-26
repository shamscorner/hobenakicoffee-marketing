<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index';
	import type { FaqItem } from './types';
	let { faqs = [] } = $props<{ faqs: FaqItem[] }>();
</script>

<Accordion.Root type="single" class="w-full">
	{#each faqs as faq, index}
		<Accordion.Item
			value={`item-${index}`}
			class="my-4 rounded-xl border-2 px-4 transition hover:border-primary"
		>
			<Accordion.Trigger
				class="py-6 text-base font-semibold transition hover:text-primary hover:no-underline"
			>
				{faq.question}
			</Accordion.Trigger>
			<Accordion.Content class="text-base">{faq.answer}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
