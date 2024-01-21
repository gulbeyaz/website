<template>
	<div class="flex justify-center">
		<UCard class="mt-20 w-[500px]">
			<template #header>
				<div class="flex justify-between">
					<span>Register</span>
					<UButton
						icon="i-heroicons-home"
						label="Go back home"
						to="/"
						variant="link"
					/>
				</div>
			</template>

			<UForm :state="registerInput" class="space-y-5">
				<UFormGroup size="lg" label="Username" required>
					<UInput
						type="username"
						placeholder="coolcat"
						icon="i-heroicons-user"
						v-model="registerInput.username"
					/>
				</UFormGroup>
				<UFormGroup size="lg" label="Password" required>
					<UInput
						type="password"
						placeholder="coolcat123"
						icon="i-heroicons-key"
						v-model="registerInput.password"
					/>
				</UFormGroup>
				<UFormGroup size="lg" label="Confirm Password" required>
					<UInput
						type="password"
						placeholder="coolcat123"
						icon="i-heroicons-key"
						v-model="registerInput.confirmPassword"
					/>
				</UFormGroup>
				<UButton
					class="mt-10"
					size="xl"
					block
					label="Register"
					:loading="loading"
				/>
			</UForm>
			<template #footer>
				<UButton
					icon="i-heroicons-arrow-left-solid"
					label="You have an account ? Login"
					to="/auth/login"
					variant="link"
					class="pl-0"
				/>
			</template>
		</UCard>
	</div>
</template>

<script setup lang="ts">
import type { RegisterForm } from '~/types/auth';

const authStore = useAuthStore();
const loading = authStore.Loading;

const registerInput = reactive<RegisterForm>({
	username: '',
	password: '',
	confirmPassword: '',
});

definePageMeta({
	layout: 'auth',
});
</script>
