import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from "../views/HomePage.vue"
import writerLogin from "../views/Login/WriterLogin.vue"
import editorLogin from "../views/Login/EditorLogin.vue"
import editorPage from "../views/EditorPage.vue"
import writerPage from "../views/WriterPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component:HomePage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login/writer',
    name: 'WriterLogin',
    // component: HomeView
    component:writerLogin,
  },
  {
    path: '/login/editor',
    name: 'EditorLogin',
    // component: HomeView
    component:editorLogin,
  },
  {
    path: '/editor',
    name: 'editorPage',
    // component: HomeView
    component:editorPage,
  },
  {
    path: '/writer',
    name: 'writerPage',
    // component: HomeView
    component:writerPage,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
