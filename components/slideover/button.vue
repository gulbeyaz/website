<template>
	<UButton
		icon="i-heroicons-bars-3-16-solid"
		variant="ghost"
		class="m-3"
		@click="slideOverStore.isOpen = !slideOverStore.isOpen"
	/>
</template>

<script setup lang="ts">
const slideOverStore = useSlideOverStore();
</script>
