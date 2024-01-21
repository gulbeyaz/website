import { type RegisterForm, type LoginForm, type User } from '~/types/auth';

export const useAuthStore = defineStore(
	'auth',
	() => {
		const Loading = ref(false);
		const AuthStore = reactive({
			accessToken: '',
			refreshToken: '',
			user: {} as User,
		});

		const isAuthenticated = () => !!AuthStore.accessToken;

		return { Loading, AuthStore, isAuthenticated };
	},
	{
		persist: true,
	}
);
