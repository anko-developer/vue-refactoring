<template>
	<header>
		<div>
			<router-link to="/" class="logo">
				TIL
				<!-- <span v-if="isUserLogin">by {{ $store.state.username }}</span> -->
			</router-link>
		</div>
		<div class="navigations">
			<!-- <template v-if="isUserLogin">
				<span>{{ store.state.username }}</span>
				<a href="#" @click.prevent="logoutUser" class="logout-button"
					>로그아웃</a
				>
			</template> -->
			<template v-if="isUserLogin">
				<span class="username">{{ store.userId }}</span>
				<a href="#" @click.prevent="logoutUser" class="logout-button">
					로그아웃
				</a>
			</template>
			<template v-else>
				<router-link to="/login">로그인</router-link>
				<router-link to="/signup">회원가입</router-link>
			</template>
		</div>
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useUserInfoStore } from '@/stores/userInfo';

const store = useUserInfoStore();
const isUserLogin = computed(() => {
	return store.isLogin;
});
const logoutUser = () => {
	store.clearUsername();
};
</script>

<style lang="scss" scoped>
.username {
	color: white;
}
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #927dfc;
	z-index: 2;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
	color: #dedede;
	font-size: 18px;
}
a.logo {
	font-size: 30px;
	font-weight: 900;
	color: white;
}
.logo > span {
	font-size: 14px;
	font-weight: normal;
}
.navigations a {
	margin-left: 10px;
}
.fixed {
	position: fixed;
	top: 0;
	width: 100%;
}
.logout-button {
	font-size: 14px;
}
a.router-link-exact-active {
	color: white;
	font-weight: bold;
}
</style>
