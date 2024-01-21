<template>
	<div class="flex justify-center">
		<UCard class="mt-20 w-[500px]">
			<template #header>
				<span>Register</span>
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
const authStore = useAuthStore();
const registerInput = authStore.RegisterInput;
const loading = authStore.Loading;

definePageMeta({
	layout: 'auth',
});
</script>
