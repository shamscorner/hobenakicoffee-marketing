<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = AccordionPrimitive.ItemProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let value: $$Props['value'];
</script>

<AccordionPrimitive.Item
	{value}
	class={cn(
		'mb-6 overflow-hidden rounded-2xl border-2 border-foreground/40 px-4 py-4 transition duration-300 hover:border-foreground sm:px-6',
		className
	)}
	{...$$restProps}
>
	<slot />
</AccordionPrimitive.Item>
