import App from '../pages/App/app.vue'

import VueRouter from 'vue-router'
import Learn1 from '../pages/learn1'
import Learn2 from '../pages/learn2'
import Learn3 from '../pages/learn3'
import Learn4 from '../pages/learn4'
import Learn5 from '../pages/Learn5'
import Learn6 from '../pages/Learn6'
import Learn7 from '../pages/Learn7'
window.App = App
window.Learn1 = Learn1
window.Learn2 = Learn2
window.Learn3 = Learn3
window.Learn4 = Learn4
window.Learn5 = Learn5
window.Learn6 = Learn6
window.Learn7 = Learn7
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/learn2',
      component: Learn2
    },
    {
      path: '/learn1',
      component: Learn1
    },
    {
      path: '/learn3',
      component: Learn3
    },
    {
      path: '/learn4',
      component: Learn4
    },
    {
      path: '/learn5',
      component: Learn5
    },
    {
      path: '/learn6',
      component: Learn6
    },
    {
      path: '/learn7',
      component: Learn7
    }
  ]
})
