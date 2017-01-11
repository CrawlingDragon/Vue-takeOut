import Vue from 'vue';
//  vue-router 是插件里的name 把vue-router值赋值给VueRouter变量
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

import 'common/stylus/index.styl';

// vue.use命令是插件规定
Vue.use(VueRouter);
Vue.use(VueResource);
//  使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
let app = Vue.extend(App);
//  创建一个router实例
let router = new VueRouter({
  // 配置被选中的样式class
  linkActiveClass: 'active'
});
// router.map()使用定义具体路由。 '/goods'是写在html里{path:'/goods'}里的，compontent是上面import引用的变量
router.map({
  '/goods': {
    component: goods
  }
});
router.map({
  '/ratings': {
    component: ratings
  }
});
router.map({
  '/seller': {
    component: seller
  }
});
// 触发函数app是Vue.extend(app)的变量，'#app'是index.html里定义的id
router.start(app, '#app');
router.go('/goods');

