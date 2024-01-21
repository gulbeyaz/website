<template>
	<div class="flex justify-center">
		<UCard class="mt-20 w-[500px]">
			<template #header>
				<span>Login</span>
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
		</UCard>
	</div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const loginInput = authStore.LoginInput;
const loading = authStore.Loading;

definePageMeta({
	layout: 'auth',
});
</script>
