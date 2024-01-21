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
		const RegisterInput = reactive<RegisterForm>({
			username: '',
			password: '',
			confirmPassword: '',
		});
		const LoginInput = reactive<LoginForm>({
			username: '',
			password: '',
		});

		const isAuthenticated = () => !!AuthStore.accessToken;

		return { Loading, AuthStore, RegisterInput, LoginInput, isAuthenticated };
	},
	{
		persist: true,
	}
);
