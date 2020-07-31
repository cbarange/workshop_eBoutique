<template>
	<div class="article-cocktail">
		<article class="article-article-cocktail">
			<h2 class="h2-like font-canela">Besoin d’inspiration pour votre prochaine soirée maison ?</h2>
			<p class="font-styreneb">Des centaines de recettes ou idées à découvrir sur notre application ou sur notre magazine</p>
			<h4 class="h4-like font-canela">Les derniers articles</h4>

			<div class="article-cocktail-items">
				<div v-for="item in Array(4)" class="article-cocktail-item">
					<img src="@/assets/article.png" alt="" style="width:100%;"/>
					<div class="item-text">
						<span class="item-title font-styreneb">Cocktails</span>
						<p class="item-p font-canela">Une histoire amère (qui finit bien)</p>
					</div>
				</div>
			</div>

			<button class="button article-button">Voir plus de publications</button>
		</article>
	</div>
</template>	

<script>
	export default {
		name: 'ArticleCocktail'
	}
</script>

<style scoped>
	.article-article-cocktail > p {
		font-size: 15px;
		line-height: 22px;
		text-align: center;
		color: #8D8E93;
	}

	.article-button {
		display: block;
		margin: 0 auto;
	}

	.article-cocktail-items {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}
	.article-cocktail-item {
		margin: 0 25px;
		width: 18%;
		min-width: 260px;
		max-width: 390px;
	}

	.item-text {
		background-color: white;
		position: relative;
		top:-50px;
		width:70%;
		margin: 0 auto;
		padding: 8%;
	}

	.item-title {
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.03em;
		color: #DFB57B;
	}

	.item-p {
		font-size: 16px;
		line-height: 19px;
		color: #231F10;
	}
</style>
