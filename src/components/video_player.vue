<template>
	<article class="header_player">
		<h2 class="h2-like font-canela">Redécouvrez le plaisir d’une soirée cocktails à la maison</h2>

		<div class="player_area">
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
					<v-icon class="player_button" name="play-circle" scale="5"/>
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
	</article>
</template>

<script>
	export default {
		name: 'VideoPlayer'
	}
</script>

<style scoped>
	.header_player {
		background-color: white;
		margin: 0 7%;
	}

	.header_player > .player_area{
		display:flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-items: center;
	}

	.header_player > .player_area > .left, .header_player > .player_area > .right {
		min-width: 150px;
		max-width: 20%;
		margin: 2%;
		color: #8D8E93;
	}

	.header_player > .player_area > .left > div :nth-child(1) , .header_player > .player_area > .right > div :nth-child(1) {
		fill: #DFB57B;
	}

	.header_player > .player_area > .center {
		position: relative;
		min-width: 250px;
		max-width: 50%;
	}

	.player_button {
		position:absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index:99;
	}
</style>