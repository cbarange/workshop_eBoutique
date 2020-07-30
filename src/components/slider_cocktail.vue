<template>
	<article class="slider-cocktail">
		<h2 class="h2-like slider-cocktail__title">Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !</h2>


		<div class="carousel">
			<nav class="carousel-nav">
				<span>Des idées selon vos envies</span>
				<span>Des recommandations personnalisées</span>
				<span>+ 300 recettes exclusives</span>
				<span>Des recettes pas à pas</span>
			</nav>
			<!-- carousel title -->
			<!-- carousel navigation -->

			<!-- carousel items list -->
			<div class="carousel-items">
				<!-- carousel item 1 -->
				<div class="carousel-item">
					<!-- background image of item -->
					<img class="carousel-item-img" src="@/assets/slider.png"/>

					<!-- content over background image -->
					<div class="carousel-item__content">

						<!-- left image -->
						<div class="carousel-item__content-img">
							<img src="@/assets/smartphone.png" style="width:100%;"/>
						</div>

						<!-- right text -->
						<div class="carousel-item__content-text">
							<h3 class="carousel-item__content-text-h3">TROUVEZ LES COCKTAILS REALISABLES AVEC LES INGREDIENTS DISPONIBLES CHEZ VOUS</h3>
							<p class="carousel-item__content-text-p">
								Nous nous sommes tous déjà retrouvés à la maison avec l’envie de prendre un verre sans la motivation pour faire des courses. Avec la fonctionnalité « Frigo », il suffit de rentrer les ingrédients disponibles chez vous et l’application vous trouvera tous les cocktails réalisables sans sortir de chez vous ! Pour aller plus loin, l’app vous recommandera aussi les ingrédients qui vous manquent pour débloquer toujours plus de recettes.
							</p>
							<button class="button">Google Play Store</button>
							<button class="button">Apple Store Play</button>
						</div>

					</div>
				</div>
				<!-- carousel item 2 -->

			</div>

		</div>
	</article>
</template>

<script>
	export default {
		name: 'SliderCocktail'
	}
</script>

<style scoped>
	.slider-cocktail {
		background-color: #F5F6F6;
	}
	.slider-cocktail__title {
		
	}

	.carousel {
		position: relative;
		width:80%;
		margin: 0 auto;
	}

	.carousel-nav > span {
		display: inline-block;

	}
	.carousel-nav {
		text-align: center;
		margin-bottom: 35px;
	}
	.carousel-item__content {
		position: absolute;
		display:flex;
		flex-flow: row wrap-reverse;
		justify-content: space-between;
		/*top: 0;*/
		align-items: center;
		bottom: 0;
		right: 49px;
	}
	.carousel-item__content-img {
		
	}
	.carousel-item__content-text {
		max-width: 50%;
	}

	.carousel-item__img {
		/*z-index:*/
	}


</style>
