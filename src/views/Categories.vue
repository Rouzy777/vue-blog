<template>
	<div>
		<h1 class='pb-3 border-bottom'>Категории</h1>
		<div class="mx-auto mt-4">
			<BlogCategories class='col-12 mx-auto row'></BlogCategories>
		</div>
	</div>
</template>

<script>
import BlogCategories from '@/components/BlogCategories'

export default {
	components: {
		BlogCategories
	}
}
</script>
