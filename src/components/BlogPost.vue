<template>
    <div v-if='loaded'>
        <span v-for='(category, index) in post.data.categories' :key='`category-${index}`' class='badge badge-pill badge-primary'>{{category.name}}</span>
        <h1>{{post.data.title}}</h1>
        <h5 class='text-muted'>Дата публикации: {{new Date(post.data.published).toLocaleDateString("ru-RU")}}</h5>
        <div class='mt-4 page-content' v-html="post.data.body"></div>
        <h5 class='text-muted mt-2 pb-4'>Автор: {{post.data.author.first_name}} {{post.data.author.last_name}}</h5>
    </div>
</template>

<script>
import { butter } from '@/main.js'

export default {
	data: () => ({
		post: {},
        loaded: false
	}),
	created() {
		butter.post.retrieve(this.$route.params.slug)
			.then(res => {
				this.post = res.data
                this.loaded = true
			}).catch(res => {
				console.log(res)
			})
	}
}
</script>

<style>
    .page-content img {
        max-width: 100%;
        height: auto;
    }
</style>
