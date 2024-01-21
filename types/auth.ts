export type RegisterForm = {
	username: string;
	password: string;
	confirmPassword: string;
};
export type LoginForm = {
	username: string;
	password: string;
};

export type User = {
	id: string;
	username: string;
};
