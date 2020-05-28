<template>
<div>
    <h1 class='pb-3 border-bottom'>{{posts.name}}</h1>
    <div class="row mx-auto mt-4">
        <div v-for='(post, index) in posts.recent_posts' :key='`${post.slug}_${index}`' class="col-lg-4 col-md-6 col-12 p-3">
            <small class='text-muted'>Дата публикации: {{new Date(post.published).toLocaleDateString("ru-RU")}}</small>
            <router-link :to="'/'+post.slug">
                <img class='rounded mt-1 img-same img-fluid' :src="post.featured_image ? post.featured_image : 'http://via.placeholder.com/600x250'" :alt="post.featured_image_alt">
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
        posts: []
    }),
    mounted() {
      butter.category.retrieve(this.$route.params.slug, {
            include: 'recent_posts'
        })
        .then(res => {
            this.posts = res.data.data
        })
    }
}
</script>

<style lang="css" scoped>
.img-same {
	width: 600px;
	height: 250px;
	object-fit: cover;
}
</style>
