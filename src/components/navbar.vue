<template>
	<!-- <link href="//db.onlinewebfonts.com/c/4a24899e94d8236f671c1090cd9e068c?family=Canela" rel="stylesheet" type="text/css"/> -->
	<nav class="navbar">

		<span class="menu_title">
			<v-icon name="home" scale="2"/>
		</span>

		<span class="menu_title">
			<span>Le bar connecté</span>
		</span>

		<span class="menu_title">
			<span>Cartouches</span>
		</span>

		<span class="menu_title">
			<span>Accessoires</span>
		</span>

		<span class="menu_title menu_main_title">
			OPN
		</span>

		<span class="menu_title">
			<span>Cocktails</span>
		</span>

		<span class="menu_title">
			<span>Food</span>
		</span>

		<span class="menu_title">
			<span>Recevoir</span>
		</span>

		<span>
			<v-icon name="search" scale="2"/>
			<v-icon name="user" scale="2"/>
			<v-icon name="shopping-bag" scale="2"/>
		</span>

	</nav>

</template>

<script>

	export default {
		name: 'Navbar',
		data () {
			return {}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navbar {
		/*text-align:center;*/
		display:flex;
		flex-flow:row nowrap;
		justify-content:space-around;
		align-items:baseline;
	}
	.menu_title:hover > span {
		border-bottom: 2px solid #eee;
	}

	.menu_main_title {
		font-size: 85px;
	}

	span {
		vertical-align: top;
		font-size: 26px;
		font-family: Canela;
		color : #eee;
	}

</style>
