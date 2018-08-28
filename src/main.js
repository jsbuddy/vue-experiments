import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faCoffee,
	faHeart,
	faCalendar,
	faUser,
	faCreditCard,
	faWineGlass,
	faMapPin,
	faChevronLeft,
	faHome,
	faToolbox,
	faSearch,
	faStar,
	faAtom,
	faEnvelope,
	faEye
} from '@fortawesome/free-solid-svg-icons'

import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
	faCoffee,
	faHeart,
	faCalendar,
	faMapPin,
	faUser,
	faWineGlass,
	faCreditCard,
	faChevronLeft,
	faHome,
	faToolbox,
	faSearch,
	faStar,
	faAtom,
	faEnvelope,
	faEye,
	faVuejs
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
