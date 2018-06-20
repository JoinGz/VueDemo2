import Home from "./components/home.vue"
import Home2 from "./components/h2.vue"
import Home3 from "./components/h3.vue"
import Home4 from "./components/h4.vue"

//var routes = [{
//	path: "/home",
//	component: homeTempalte
//}]
//把路径规则实例化：
//var router = new VueRouter({
//	routes: routes
//})
//把实例对象传给Vue
//new Vue({
//	router: router
//})
//export var router = new VueRouter({
//	routes: routes
//})
export default{
	routes:[
		{path:'/home', component:Home},
		{path:'/two', component:Home2},
		{path:'/three', component:Home3,
		children:[{
					path:"abc/:id/whh/:p",//不要斜杠
					component:{
						template:"<h2>today {{$route.params.id}} ... {{$route.params.p}}</h2>"
					}
				}]
		},
		{path:'/four', component:Home4}
	]
}