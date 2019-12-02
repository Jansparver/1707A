import {createStore} from 'redux'


let reducer = (state,action) =>{
    state = JSON.parse(JSON.stringify(state))
    if(action.type==="DATE_JSON"){
        state.list = action.list
    }

    return state
}

let initState ={
    list:[]
}




const store = createStore(reducer,initState)
export default store