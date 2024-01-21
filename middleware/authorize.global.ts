export default defineNuxtRouteMiddleware((to) => {
	const { isAuthenticated } = useAuthStore();
	const { layout } = to.meta;

	if (isAuthenticated() && layout === 'auth') {
		return navigateTo('/');
	}
});
