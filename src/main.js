import Vue from 'vue';
//  vue-router 是插件里的name 把vue-router值赋值给VueRouter变量
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';

Vue.use(VueRouter);

//  这里的App是上文引用的App组件
let app = Vue.extend(App);
//  创建一个router实例
let router = new VueRouter();
router.map({
  '/goods': {
    component: goods
  }
});
router.start(app, '#app');
