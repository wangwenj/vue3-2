import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import useSessionStore from '@/stores/session'

NProgress.configure({ showSpinner: false })

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
      requiresAuth: false,
    },
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/components/Layout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: 'Home',
          requiresAuth: false,
        },
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: '/about',
        meta: {
          title: 'About',
          requiresAuth: false,
        },
        component: () => import('@/views/About/index.vue'),
      },
      {
        path: '/user',
        meta: {
          title: 'User',
          requiresAuth: true,
        },
        component: () => import('@/views/User/index.vue'),
      },
    ],
  },
  {
    // path: '/:w+',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  const sessionStore = useSessionStore()

  if (to.meta.requiresAuth && !sessionStore.token) {
    return next({
      name: 'Login',
      query: { redirect: to.fullPath },
    })
  }

  next()
})

router.afterEach((to) => {
  document.title = `${to.meta.title ? to.meta.title + ' -' : ''} Vue3 Admin`

  NProgress.done()
})

export default router
