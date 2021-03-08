import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '@/components/Catalog'

Vue.use(Router)

let router = new Router({
  routes: [ 
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
  ]
});

export default router;