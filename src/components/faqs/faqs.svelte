<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index';
	import type { FaqItem } from './types';
	let { faqs = [] } = $props<{ faqs: FaqItem[] }>();
</script>

<Accordion.Root type="single" class="w-full">
	{#each faqs as faq, index}
		<Accordion.Item value={`item-${index}`}>
			<Accordion.Trigger>{faq.question}</Accordion.Trigger>
			<Accordion.Content>{faq.answer}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
