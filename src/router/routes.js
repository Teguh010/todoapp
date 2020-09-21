
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'pageTodo',
        component: () => import('pages/PageTodo.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('pages/PageAbout.vue')
      },
      {
        path: '/addTask',
        name: 'addTask',
        component: () => import('pages/addTask.vue')
      },
      {
        path: '/editTask/:id',
        name: 'editTask',
        component: () => import('pages/editTask.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
