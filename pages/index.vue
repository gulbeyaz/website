<template>
	<Welcome v-if="!authStore.isAuthenticated()" />
	<Player v-if="authStore.isAuthenticated()" />
</template>

<script setup lang="ts">
const authStore = useAuthStore();
</script>
