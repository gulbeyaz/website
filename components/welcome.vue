<template>
	<div class="flex justify-center mt-40">
		<div class="flex flex-col gap-5">
			<div>If you want to watch You must login !</div>
			<UButtonGroup orientation="vertical" class="group">
				<UButton label="Login" to="/auth/login" block />
				<UButton label="Register" to="/auth/register" color="white" block />
			</UButtonGroup>
		</div>
	</div>
</template>
