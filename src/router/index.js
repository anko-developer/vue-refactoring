import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/main',
			name: 'main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			name: 'signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	console.log('test');
	next();
});

export default router;
