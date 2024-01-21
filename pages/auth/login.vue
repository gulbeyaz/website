<template>
	<div class="flex justify-center">
		<UCard class="mt-20 w-[500px]">
			<template #header>
				<div class="flex justify-between">
					<span>Login</span>
					<UButton
						icon="i-heroicons-home"
						label="Go back home"
						to="/"
						variant="link"
					/>
				</div>
			</template>

			<UForm :state="loginInput" class="space-y-5">
				<UFormGroup size="lg" label="Username" required>
					<UInput
						type="username"
						placeholder="coolcat"
						icon="i-heroicons-user"
						v-model="loginInput.username"
					/>
				</UFormGroup>
				<UFormGroup size="lg" label="Password" required>
					<UInput
						type="password"
						placeholder="coolcat123"
						icon="i-heroicons-key"
						v-model="loginInput.password"
					/>
				</UFormGroup>
				<UButton
					class="mt-10"
					size="xl"
					block
					label="Login"
					:loading="loading"
				/>
			</UForm>
			<template #footer>
				<UButton
					icon="i-heroicons-arrow-left-solid"
					label="You don't have an account ? Register"
					to="/auth/register"
					variant="link"
					class="pl-0"
				/>
			</template>
		</UCard>
	</div>
</template>

<script setup lang="ts">
import type { LoginForm } from '~/types/auth';

const authStore = useAuthStore();
const loading = authStore.Loading;
const loginInput = reactive<LoginForm>({
	username: '',
	password: '',
});

definePageMeta({
	layout: 'auth',
});
</script>
