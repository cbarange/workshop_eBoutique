<template>
	<div class="footer">
		<!-- footer top -->
		<div class="footer__top font-canela">
			<!-- footer top left -->
			<div class="footer__top__left">
				<span class="footer--title">Des cocktails dans votre boîte mail !</span>
				<p class="footer--p">Nos recettes, nos conseils et nos histoires tous les mois.</p>

				<input type="email" placeholder="Votre adresse mail ..."/>

				<button class="button">Je m’inscris</button>
			</div>
			<!-- footer top right -->
			<div class="footer__top__right">
				<span class="footer--title">Rejoignez-nous</span>
				<p class="footer--p">Nos recettes, nos conseils et nos histoires tous les mois.</p>
				<button class="button">Facebook</button>
				<button class="button">Instagram</button>
			</div>
		</div>
		<!-- footer bottom -->
		<div class="footer__bottom font-styreneb">
			<span>CGU</span>
			<span>Mentions légales</span>
			<span>Cookies</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style scoped>
	.footer__top {
		background-color: #231F10;
		display:flex;
		flex-flow: row wrap;
		justify-content:space-evenly;
		color: #fff;
	}
	
	.footer__bottom {
		width:100%;
		background-color: #6C6D72;
		display:flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}
	.footer__bottom > span {
		margin: 20px;
		color: #fff;
		border-bottom: 1px solid #fff;
		text-align: center;
		text-transform: uppercase;
		font-size: 11px;
		line-height: 16px;
	}

</style>