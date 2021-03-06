require('./bootstrap');
import Vue from 'vue'
window.Vue = require('vue');

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

        add: false,
        pets: {}
    },

    mutations: {
       CHANGE_ADD: (state ) => {
state.add = !state.add;
        },
        SET_PETS(state, response) {
            console.log("SET_PETS")
            state.pets = response;
          }
    },

    actions: {
        TOOGLE_ADD({commit}) {
commit('CHANGE_ADD')
},
FETCH_PETS: (state) => {
    setTimeout(function() {
      state.commit('SET_PETS', ['t7m12qbvb/apple_9', '6pat9znxz/1448127928_kiwi'])
    }, 1000)
  }
    },

    getters: {
SHOW_ADD(state) {
    return state.add;
}
    }
})

//-- Import vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//-- Import Components
import User from './components/User/MainComponent.vue'
import Callendar from './components/Callendar/Callendar.vue'
import Vcallendar from './components/Callendar/Vcallendar.vue'
import Base from './components/base/BaseComponent.vue'
import Personal from './components/Personal/PersonalComponent.vue'
import Test from './components/TestComponent.vue'
import Setings from './components/Setings/SetingsComponent.vue'


const routes = [

    { path: '/home',  name: 'mainPage', component: Base},
    { path: '/user', component: User },
    { path: '/callendar', component: Callendar },
    { path: '/vcallendar', component: Vcallendar },
    { path: '/personal', component: Personal },
    { path: '/test', component: Test },
    { path: '/setings', component: Setings },

]


const router = new VueRouter({

    routes,

})



//-- VCalendar
// import VCalendar from 'v-calendar';
// // Use v-calendar & v-date-picker components
// Vue.use(VCalendar, {
//   componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
//               // ...other defaults
// });

//-- vue2-datepicker
import DatePicker from 'vue2-datepicker'
Vue.use(DatePicker);
// import 'vue2-datepicker/index.css'

//-- ant-design-vue
import { Button, message } from 'ant-design-vue';
Vue.use(Button)


//-- Buefy
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
Vue.use(Buefy)

//-- Vuetify
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

//-- at-ui
import AtComponents from 'at-ui'
// import 'at-ui-style'
Vue.use(AtComponents)

//-- VueMaterial
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

//-- BootstrapVue  &  BootstrapVueIcons
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)

//-- vue-the-mask
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

//-- multiselect
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

//-- VueToast
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);


//-- Head
Vue.component('head-component', require('./components/header/head.vue').default);
Vue.component('list-up-component', require('./components/header/List-up-side.vue').default);

//-- User
Vue.component('add-foto', require('./components/User/AddFoto.vue').default);
Vue.component('edit-profile', require('./components/User/EditProfile.vue').default);
Vue.component('edit-personal', require('./components/User/EditPersonal.vue').default);
Vue.component('input-component', require('./components/User/InputComponent.vue').default);
Vue.component('edit-roles-in-usercard', require('./components/User/EditRolesModal.vue').default);

//-- Settings
Vue.component('edit-roles-in-settings', require('./components/Setings/EditRolesModal.vue').default);
Vue.component('delete-roles-in-settings', require('./components/Setings/DeleteRolesModal.vue').default);
Vue.component('edit-access-in-settings', require('./components/Setings/Three/EditAccessModal.vue').default);
Vue.component('delete-access-in-settings', require('./components/Setings/Three/DeleteAccessModal.vue').default);

// -- Weather
Vue.component('weather-component', require('./components/Weather/WeatherComponent.vue').default);

Vue.component('callendar-component', require('./components/User/Callendar.vue').default);

// -- Base
Vue.component('empty-component', require('./components/base/EmptyComponent.vue').default);



const app = new Vue({

    el: '#app',
    router,
    store,
    mode: 'history',

});
export default app;

