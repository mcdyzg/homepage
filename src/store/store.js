import Vue from 'vue'
import Vuex from 'vuex'
import part2 from './modules/part2.js'
import request from 'superagent'

Vue.use(Vuex)
const state = {
	encourageWord:'222'
}

// const getters = {
// 	getter1: state => {
// 		return state.count === 0 ?'true':'false'
// 	}
// }

const mutations = {
	// increment(state,a){
	// 	console.log(a)
	// 	state.count++
	// },
	// decrement(state){
	// 	state.count--
	// }
	setEncourageWord(state, data){
		console.log(data)
		// state.encourageWord = data
	}
}

const actions = {
	// incrementAsync({commit,state,dispatch}){
	// 	setTimeout(()=>{
	// 		commit('increment','haha')
	// 	},1000)
	// }
	getEncourageWord({commit,state}){
		console.log(111)
		request
		.get('http://open.iciba.com/dsapi/')
		.end(function(err, res){
		     console.log(res)
		});
	}
}

export default new Vuex.Store({
	actions,
	// getters,
	// modules:{
	// 	part2
	// },
  	state,
  	mutations
})