import Vue from 'vue'
import App from './App.vue'

import "@/assets/flexible.js"
// import "@/assets/flexible.css"
import "./assets/reset.css"
import router from "@/router"

import { Tabbar, TabbarItem, NavBar,
Cell,CellGroup, Grid, GridItem, Image as VanImage,Icon,Search,Tag,List, Toast,
} from 'vant';
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);
Vue.use(Toast);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
