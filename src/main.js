// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-awesome/icons'
// import 'vue-awesome/icons/cocktail'
// import 'vue-awesome/icons/search'
// import 'vue-awesome/icons/shopping-bag'
// import 'vue-awesome/icons/user'
// import 'vue-awesome/icons/home'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
