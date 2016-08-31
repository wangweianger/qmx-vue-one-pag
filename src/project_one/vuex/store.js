
import Vue from 'vue';
import Vuex from 'vuex';
import order from 'components/order/vuex/modules';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    order,
  }
})
