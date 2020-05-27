<template>
<div id="app">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<router-link class="font-weight-bold navbar-brand" tag='a' to="/">Vue-blog</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link v-for="item in links" :key="item.title" :to="item.link" tag="a" class="nav-item nav-link" active-class="active" exact>
						{{item.title}}
					</router-link>
				</div>
			</div>
		</div>
	</nav>
	<router-view />
</div>
</template>

<script>
export default {
	name: "App",
	data: () => ({
		links: [{
				link: "/",
				title: "Home"
			},
			{
				link: "/categories",
				title: "Categories"
			}
		]
	})
}
</script>

<style>
	.min-vh-90 {
		min-height: 90vh;
	}
</style>
