<template>
	<USlideover v-model="slideOverStore.isOpen">
		<div class="p-4 flex-1">Abbas</div>
	</USlideover>
</template>

<script setup lang="ts">
const slideOverStore = useSlideOverStore();
</script>
