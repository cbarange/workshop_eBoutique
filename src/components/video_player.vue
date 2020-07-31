<template>
	<article class="header-player">
		<div class="header-player-container">
			<h2 class="h2-like font-canela header-player-title">Redécouvrez le plaisir d’une soirée cocktails à la maison</h2>

			<div class="player-area">
				<div class="left font-styreneb">
					<div>
						<v-icon name="cocktail" scale="2"/>
						<p>Des recettes à découvrir et personnaliser en fonction de vos goûts</p>
					</div>
					<div>
						<v-icon name="blender" scale="2"/>
						<p>Des dosages précis pour réaliser vos cocktails favoris</p>
					</div>
					<div>
						<v-icon name="globe" scale="2"/>
						<p>Des alcools reconnus mondialement</p>
					</div>
				</div>
				<div class="center">
					<div class="player">
						<img src="@/assets/video.png" style="width:100%;"/>
						<v-icon class="player-button" name="play-circle" scale="5"/>
					</div>
				</div>
				<div class="right font-styreneb">
					<div>
						<v-icon name="sync" scale="2"/>
						<p>Une gestion et un réapprovisionnement facilité de votre bar</p>
					</div>
					<div>
						<v-icon name="shield-alt" scale="2"/>
						<p>Un accès contrôlé et sécurisé à vos alcools préférés</p>
					</div>
					<div>
						<v-icon name="cube" scale="2"/>
						<p>Un design moderne et élégant s’intégrant dans votre quotidien</p>
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'VideoPlayer'
	}
</script>

<style scoped>
	.header-player {
		display: inline-block;
		min-height: 304px;
		max-width:85vw;
		/*width: min-content;*/
		
		display: inline-block;
	position: relative;
	left: 50%;
	transform: translateX(-50%);

		/*max-width:calc(1420px - 5vw);
		*/
		/*max-width:1420px;*/
	}

	.header-player-container {
		margin: 0 auto;
		background-color: white;
		/*display: table;*/
		padding: 0;
		margin: 0;
	}

	.header-player > .header-player-container > .player-area {
		display:flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		max-width:1420px;
		margin: 0 auto;
	}

	.header-player > .header-player-container > .player-area > .left, .header-player > .header-player-container > .player-area > .right {
		min-width: 150px;
		max-width: 20%;
		margin: 2%;
		color: #8D8E93;
	}

	.header-player > .header-player-container > .player-area > .left > div :nth-child(1) , .header-player > .header-player-container > .player-area > .right > div :nth-child(1) {
		fill: #DFB57B;
	}

	.header-player > .header-player-container > .player-area > .center {
		position: relative;
		min-width: 250px;
		max-width: 50%;
	}

	.player-button {
		position:absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index:99;
	}

	.header-player-title {
		max-width:1420px;
		margin: 0 auto;
	}
</style>