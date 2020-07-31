<template>
	<div class="selection-cocktail">
		<article class="article-selection-cocktails">
			<h4 class="h4-like font-canela">Notre selection de cocktails</h4>

			<div class="selection-cocktail-items">
				<!-- item 1 -->

				<div v-for="item in Array(4)" class="selection-cocktail-item">
					<img src="@/assets/martinez_1.png" style="width:100%;"/>
					<span class="selection-cocktail-item-title font-styreneb">Martinez</span>

					<span class="selection-cocktail-item-ingredient">
						<span>
							<img class="item-ingredient-img" src="@/assets/absolut.png"/>
							<p class="item-ingredient-text">Absolut</p>
						</span>
						<span>
							<img class="item-ingredient-img" src="@/assets/sucre.png"/>
							<p class="item-ingredient-text">Sucré</p>
						</span>
						<span>
							<img class="item-ingredient-img" src="@/assets/herbace.png"/>
							<p class="item-ingredient-text">Herbacé</p>
						</span>
					</span>
				</div>

			</div>

			<button class="button recette_button">Voir plus de recettes</button>
		</article>
	</div>
</template>	

<script>
	export default {
		name: 'SelectionCocktail'
	}
</script>

<style scoped>
	
	.selection-cocktail-items {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		margin: 25px 0;
	}

	.selection-cocktail-item {
		display: flex;
		flex-flow: column nowrap;
		margin: 0 calc(3vw + 25px);
		width: 10%;
		min-width: 115px;
		max-width: 175px;
	}

	.selection-cocktail-item-title {
		text-align: center;
		font-size: 15px;
		line-height: 22px;
		color: #231F10;
		margin: 0 0 15px 0;
	}

	.selection-cocktail-item-ingredient {
		display:flex;
		flex-flow: row nowrap;
		justify-content: center;
		width: 100%;
	}

	.item-ingredient-img {
		margin:0 auto;
		padding:0 15px;
		display: block;
		border-radius: 50%;
	}

	.item-ingredient-text {
		width: 100%;
		margin:0 auto;
		text-align: center;
	}
	
	
	.recette_button {
		display: block;
		margin: 25px auto;
		text-align: center;

		/* or if we want inline display */
		/*margin: 25px 0 25px 50%;
		transform: translate(-50%, 0%);
		*/
	}

</style>
