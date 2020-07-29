<template>
	<div class="home">
		<header class="header">
			<div id="background_image">
				<!-- <img src="@/assets/fond.png" style="width:100%;"/> -->
			</div>
			<navbar class="navbar_component"></navbar>

			<article class="header_introduction">
				<div class="left">
					<h2>L'experience cocktail <br/> à la maison</h2>
				</div>

				<div class="right">
					<h4>Opn, votre bar connecté à domicile</h4>
					<p>Le premier bar connecté qui vous permet de créer des centaines de cocktails à la maison en s'amusant</p>
					<p> Découvrir OPN en détails - 1’40 </p>

					<div class="button">
						Dévourir le starter pack
					</div>

					<p>Déja OPNer ? Rechargez votre bar.</p>
				</div>
			</article>

			<article class="header_player">
				<h2 class="title">Redécouvrez le plaisir d’une soirée cocktails à la maison</h2>
				
				<div class="player_area">
					<div class="left">
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
					<div class="right">
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
		</header>

	</div>
</template>

<script>
	import Navbar from '@/components/navbar.vue'
	export default {
		name: 'Home',
		components: {
			Navbar
		},
		data () {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url(//db.onlinewebfonts.com/c/4a24899e94d8236f671c1090cd9e068c?family=Canela);
	@import url(//db.onlinewebfonts.com/c/1cbc0faa49cc60bfadb363d1a10c4c38?family=BurberryStyreneBCyrWeb+BD);
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
		width: 100%;
	}
	.navbar_component {
		/*position: absolute;*/
		width: 100%;
		top:5%;
	}
	.header_introduction {
		display:flex;
		flex-flow: row wrap;
		justify-content:space-around;
		align-items:baseline;
	}

	.header_introduction > .left {
		width: 30%;
		font-size:44px;
		font-family: Canela;
		line-height: 77px;
		color: #fff;
	}

	.header_introduction > .right {
		width: 30%;
		font-family: Canela;
		color: #fff;
		
	}

	.header_player {
		background-color: white;
		margin: 0 7%;
	}	

	.header_player > .player_area{
		display:flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;

	}

	.header_player > .title {
		text-align:center;
		font-size: 32px;
		padding-top: 5%;
		line-height: 38px;
		font-family: Canela;
	}

	.header_player > .player_area > .left, .header_player > .player_area > .right {
		min-width: 150px;
		max-width: 20%;
		margin: 2%;
		font-family: BurberryStyreneBCyrWeb BD;
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
