
import Vue from 'vue';
import Vuex from 'vuex';
import index from 'components/index/vuex/modules';
import order from 'components/order/vuex/modules';
import user from 'components/user/vuex/modules';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
  	index,
    order,
    user,
  }
})
