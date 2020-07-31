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
			<div class="carousel-left-arrow carousel-arrow">
				<v-icon name="arrow-circle-left" scale="2"/>
			</div>
			<div class="carousel-items">
				<!-- carousel item 1 -->
				<div class="carousel-item">
					<!-- background image of item -->
					<div class="carousel-item-background">
						<img class="carousel-item-background-img" src="@/assets/slider.png"/>
						<div class="carousel-item-background-shape">
						</div>
					</div>
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
							<div class="carousel-item__content-text-btn">
								<button class="button">Google Play Store</button>
								<button class="button">Apple Store Play</button>
							</div>
						</div>

					</div>
				</div>
				<!-- carousel item 2 -->

			</div>
			<div class="carousel-right-arrow carousel-arrow">
				<v-icon name="arrow-circle-right" scale="2"/>
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
		margin: 0 auto;
		max-width:calc(100%);
		min-height: 304px;
	}
	.slider-cocktail__title {
		
	}

	.carousel {
		position: relative;
		width:80%;
		margin: 0 auto;
		/*overflow:hidden;*/
	}

	.carousel-nav > span {
		display: inline-block;

	}
	.carousel-nav {
		text-align: center;
		margin-bottom: 35px;
	}
	.carousel-item {
		/*overflow: hidden;*/
	}

	.carousel-item-background {
		position: relative;
	}
	.carousel-item-background-img {
		display: inline-block;
		/*margin: 0 auto;*/
	}
	
	.carousel-item-background-shape {
		background-color: red;
		display:inline-block;
		position:absolute;
		right:0;
		top:0;
		transform:skewX(-25deg);
		/*width:min-content;*/
		width:70%;
		height:100%;
	}

	.carousel-item-background-shape:before {
		
	}


	.carousel-item__content {
		position: absolute;
		display:flex;
		flex-flow: row wrap-reverse;
		
		justify-content: space-around;
		/*top: 0;*/
		align-items: center;
		bottom: 0;
		right: 49px;
		/*display: none;*/
	}
	.carousel-item__content-img {
		
	}

	.carousel-item__content-text {
		max-width: 50%;
		/*overflow: scroll;*/
	}


	@media screen and (max-width: 450px) {
		.carousel-item__content-text-btn, .carousel-item__content-text{
			display: none;
		}
	}

	.carousel-item__img {
		/*z-index:*/
	}

	.carousel-arrow {
		position: absolute;
		z-index:1;
	}

	.carousel-left-arrow {
		top: 50%;
		left: 0;
		transform: translate(-70%, 50%);
	}

	.carousel-right-arrow {
		top: 50%;
		right : 0;
		transform: translate(70%, 50%);
	}


</style>
