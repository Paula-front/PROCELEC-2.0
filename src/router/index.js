import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'PROCELEC | Proyectos eléctricos y obras civiles',
    },
  },
  {
    path: '/quienes-somos',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'Quiénes Somos | PROCELEC',
    },
  },
  {
    path: '/servicios',
    name: 'services',
    component: ServicesView,
    meta: {
      title: 'Servicios eléctricos BT y MT | PROCELEC',
    },
  },
  {
    path: '/proyectos',
    name: 'projects',
    component: ProjectsView,
    meta: {
      title: 'Proyectos eléctricos ejecutados | PROCELEC',
    },
  },
  {
    path: '/contacto',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contacto | PROCELEC',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'Página no encontrada | PROCELEC',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 100)
      })
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'PROCELEC'
})

export default router