// router.options.js
import type { RouterConfig } from "nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'root',
      path: '/',
      children: [
        {
          name: 'home',
          path: '',
          component: () => import('~/pages/index.vue'),
        },
        {
          name: 'phim',
          path: 'phim',
          children: [
            {
              name: 'movies-detail',
              path: ':title',
              component: () => import('@/pages/movies/detail.vue'),
            }
          ]
        },
      ]
    },
  ], 
}