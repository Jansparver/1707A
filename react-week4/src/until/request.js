import mock from '../mock/mock'

function RequestData(url){
    return new Promise(res=>{
        res(mock[url]())
    })
}

export default RequestData