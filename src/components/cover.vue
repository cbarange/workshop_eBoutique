<template>
	<article class="header_introduction">
		<div class="left font-canela">
			<h2>L'experience  <br/> cocktail <br/> à la maison</h2>
		</div>

		<div class="right font-canela">
			<h4>Opn, votre bar connecté à domicile</h4>
			<p>Le premier bar connecté qui vous permet <br/>de créer des centaines de cocktails<br /> à la maison en s'amusant</p>
			<p> Découvrir OPN en détails - 1’40 </p>

			<button class="button">
				Dévourir le starter pack
			</button>

			<p>Déja OPNer ? Rechargez votre bar.</p>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'Cover'
	}
</script>

<style scoped>

	.header_introduction {
		display:flex;
		flex-flow: row wrap;
		justify-content:space-around;
		align-items:baseline;
		margin-bottom: calc(5vh);
	}

	.header_introduction > .left {
		/*width: 30%;*/
		/*font-size: 5vh;
		line-height: 10vh;*/
		font-size:44px;
		line-height: 77px;
		color: #fff;
	}

	.header_introduction > .right {
		/*width: 30%;*/
		color: #fff;
		/*font-size: 3vh;*/
		
	}

</style>