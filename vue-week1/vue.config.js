const data = require('./src/mock/data.json')

module.exports = {
    devServer:{
        before:function(app){
            app.get('/data/json',(req,res)=>{
                res.send(data)
            })
        }
    }
}