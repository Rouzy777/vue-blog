<template>
    <div class="container mt-4">
        <h1 class='pb-3 border-bottom'>Категории</h1>
        <div class="row mx-auto mt-4">
            <div v-for='category in categories' :key='category.name' class="col-lg-4 col-md-6 col-12">
                <div class="rounded bg-gray p-3">
                    <h4>
                        <router-link tag='a' :to='/categories/ + category.slug'>{{category.name}}</router-link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {butter} from '@/main.js'

export default {
    data: () => ({
        categories: []
    }),
    mounted() {
        butter.category.list()
          .then(res => {
              this.categories = res.data.data
          })
    }
}
</script>

<style lang="css" scoped>
.bg-gray {
    background-color: rgba(0,0,0,0.09)
}
</style>
