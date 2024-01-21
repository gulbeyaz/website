import { type RegisterForm, type LoginForm } from '~/types/auth';

export const useAuthStore = defineStore('auth', () => {
	const loading = ref(false);
	const registerInput = reactive<RegisterForm>({
		username: '',
		password: '',
		confirmPassword: '',
	});
	const loginInput = reactive<LoginForm>({
		username: '',
		password: '',
	});

	return { loading, registerInput, loginInput };
});
