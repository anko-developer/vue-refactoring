<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button :disabled="!isUsernameValid" type="submit" class="btn">
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation';
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '@/stores/userInfo';

const router = useRouter();
const store = useUserInfoStore();
const username = ref('');
const password = ref('');
const logMessage = ref('');

const isUsernameValid = computed(() => {
	return validateEmail(username.value);
});

const submitForm = async () => {
	try {
		// 비즈니스 로직
		const userData = {
			username: username.value,
			password: password.value,
		};

		const { data } = await loginUser(userData);
		logMessage.value = `${data.user.username} 님 환영합니다`;
		store.userId = data.user.username;
		router.push({ name: 'main' });
	} catch (error) {
		logMessage.value = error.response.data;
	} finally {
		initForm();
	}
};

const initForm = () => {
	username.value = '';
	password.value = '';
};
</script>

<style lang="scss" scoped></style>
