<template>
	<div id="app">
		<div class="flex1" @click="add">
			{{num2}}
			<input type="text" v-model="msg" /> {{msg}}
			<keep-alive>

				<router-view></router-view>

			</keep-alive>
		</div>
		<div class="foot">
			<ul>
				<router-link to="/home" tag="li" active-class="active">
					首页
				</router-link>
				<router-link to="/two" tag="li" active-class="active">
					第二页
				</router-link>
				<router-link to="/three" tag="li" active-class="active">
					3页
					
					
				</router-link>
				<router-link to="/four" tag="li" active-class="active">
					4页
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "100",
				num2: 22
			}
		},
		methods: {
			add: function() {
				this.num2++;
			}
		}

	}
</script>

<style>
	body,
	html {
		margin: 0;
		padding: 0;
		font-size: 30px;
	}
	
	#app {
		display: flex;
		height: 100vh;
		flex-flow: column wrap;
		font-size: 1rem;
	}
	
	.flex1 {
		display: flex;
		flex: 1;
		flex-flow: column wrap;
	}
	
	h1 {
		padding: 0;
		margin: 0;
	}
	
	.foot {
		height: 2rem;
	}
	
	input {
		height: 1.5rem;
	}
	
	.foot ul {
		display: flex;
		margin: 0;
		padding: 0;
	}
	
	.foot ul li {
		width: 25%;
		display: flex;
		justify-content: center;
	}
</style>