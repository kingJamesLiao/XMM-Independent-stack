import * as todoTypes from "../todo-types.js";

export default{
    //初始化]
    [todoTypes.INIT]({commit} ,payload){
        commit(todoTypes.INIT , payload.itemList)
    },
    [todoTypes.UPDATE]({commit} ,payload){
        commit(todoTypes.UPDATE , payload)
    }
}