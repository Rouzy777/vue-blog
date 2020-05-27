<template>
<div class='container px-0 mt-4'>
	<div class="row">
		<div v-for='(post, index) in posts' :key='`${post.slug}_${index}`' class="col-4 p-3">
			<small class='text-muted'>Дата публикации: {{new Date(post.published).toLocaleDateString("ru-RU")}}</small>
			<router-link :to='post.slug'>
				<img class='img-fluid rounded mt-1' :src="post.featured_image ? post.featured_image : 'http://via.placeholder.com/600x250'" :alt="post.featured_image_alt">
			</router-link>
			<h4 class='mt-2'>
				<router-link :to='post.slug'>{{post.title}}</router-link>
			</h4>
			<p class='text-muted'>{{post.summary}}</p>
		</div>
	</div>
</div>
</template>

<script>
import {butter} from '@/main.js'

export default {
	data: () => ({
		posts: ''
	}),
	mounted() {
		butter.post.list({
				page: 1,
				page_size: 10
			})
			.then(res => {
				this.posts = res.data.data
			})
	}
}
</script>

<style lang="css" scoped>
</style>
