import React, { Component } from 'react'
import {connect} from 'react-redux'
import RequestData from '../../until/request'

class Classify extends Component {
    render() {
        let {list} = this.props
        console.log(list)
        return (
            <div>
                分类
            </div>
        )
    }
    componentDidMount(){
        this.props.getDate()
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    let list = state
    return {    
        list
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDate(){
            RequestData('/data/json').then(res=>{
                dispatch({type:'DATE_JSON',list:res})
            })
        }
    }
}




export default Classify = connect(mapStateToProps,mapDispatchToProps)(Classify)
