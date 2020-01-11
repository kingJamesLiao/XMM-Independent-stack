import Vue from 'vue';
import Vuex from 'vuex';
import * as todoTypes from "./todo-types.js";
import todoActions from './actions/todoActions.js';


Vue.use(Vuex)

export default new Vuex.Store({
	state : {
		"todos" : []
	},
	mutations : {
		[todoTypes.INIT] (state , todos){
			state.todos = todos;
		},
		[todoTypes.UPDATE](state, payload){
			state.todos.forEach((item) => {
				if(item.name === payload.name){
					item.data.forEach((data) => {
						if(data.name === payload.checked){
							data.name = payload.title;
						}
					})
				}
			})
			// for(var i = 0; i< state.todos[payload.name].data.length;i++){
			// 	if(state.todos[payload.name].data[i].name == payload.checked){
			// 		state.todos[payload.name].data[i].name = payload.title;
			// 		console.log(state.todos[payload.name].data[i])
			// 	}
			// }
		}		
	},
	actions : {
		...todoActions
	}
})