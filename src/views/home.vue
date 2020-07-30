<template>
	<div class="home">
		<header class="header">
			<div id="background_image">
				<!-- <img src="@/assets/fond.png" style="width:100%;"/> -->
			</div>
			<navbar class="navbar_component"></navbar>

			<Cover />
			<hr/>
			<VideoPlayer />
		</header>
		<main>
		<hr/>
			<SliderCocktail />
			<hr/>
			<ArticleCocktail />
			<hr/>
			<SelectionCocktail />
		</main>
		
		<footer>		
			<Footer/>
		</footer>
		
	</div>
</template>

<script>
	import Navbar from '@/components/navbar.vue'
	import Footer from '@/components/footer.vue'
	import SliderCocktail from '@/components/slider_cocktail.vue'
	import ArticleCocktail from '@/components/article_cocktail.vue'
	import SelectionCocktail from '@/components/selection_cocktail.vue'
	import VideoPlayer from '@/components/video_player.vue'
	import Cover from '@/components/cover.vue'

	export default {
		name: 'Home',
		components: {
			Navbar, Footer, SliderCocktail, ArticleCocktail, SelectionCocktail, VideoPlayer, Cover
		},
		data () {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*@import url(//db.onlinewebfonts.com/c/4a24899e94d8236f671c1090cd9e068c?family=Canela);
	@import url(//db.onlinewebfonts.com/c/1cbc0faa49cc60bfadb363d1a10c4c38?family=BurberryStyreneBCyrWeb+BD);
	*/
	.header {
		/*display: relative;*/
		background-image: url("../assets/fond.png");
		background-repeat: no-repeat;
		/*background-size: cover;*/
		background-size: 100%;
	}
	#background_image {
		/*background: linear-gradient(to left, #231F10 100%, rgba(35, 31, 16, 20) 20%,#231F10 100% );*/
		/*background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1));*/
		/*background-image: linear-gradient(to right, blue, green, #0ff, rgb(200, 30, 170));*/
		/*width: 100%;*/
	}
	.navbar_component {
		/*position: absolute;*/
		width: 100%;
		top:5%;
	}

</style>
