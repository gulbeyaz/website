<template>
	<header class="h-12">
		<span class="logo">Gulbeyaz</span>
		<SlideoverButton v-if="authStore.isAuthenticated()" />
	</header>
</template>
<script setup lang="ts">
const authStore = useAuthStore();
</script>

<style scoped>
header {
	@apply flex items-center justify-between w-full gap-4;
}
.logo {
	@apply text-lg ml-3 font-medium;
	font-family: 'Moirai One', system-ui;
}
</style>
