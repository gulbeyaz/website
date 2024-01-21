<template>
	<header>
		<span class="logo">Gulbeyaz</span>
		<SlideoverButton />
	</header>
</template>

<style scoped>
header {
	@apply flex items-center justify-between w-full gap-4;
}
.logo {
	@apply text-lg ml-3 font-medium;
	font-family: 'Moirai One', system-ui;
}
</style>
