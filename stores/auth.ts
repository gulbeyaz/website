import { type RegisterForm, type LoginForm, type User } from '~/types/auth';

export const useAuthStore = defineStore(
	'auth',
	() => {
		const Loading = ref(false);
		const User = reactive<User>({
			id: '',
			username: '',
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

		return { Loading, User, RegisterInput, LoginInput };
	},
	{
		persist: true,
	}
);
