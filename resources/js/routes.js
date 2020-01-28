import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Airline from './components/inputs/Airline.vue'
import Airport from './components/inputs/Airport.vue'
import Message from './components/inputs/Message.vue'

export default new VueRouter({
   routes:[
       {path: '/airline', name: 'airline', component: Airline, props: true},
       {path: '/airport', name: 'airport', component: Airport, props: true},
       {path: '/message', name: 'message', component: Message, props: true}
   ]
});
