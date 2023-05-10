import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore('userInfo', () => {
	const userId = ref('');
	const isLogin = computed(() => {
		return userId.value !== '';
	});
	const clearUsername = () => {
		return (userId.value = '');
	};

	return { userId, isLogin, clearUsername };
});
