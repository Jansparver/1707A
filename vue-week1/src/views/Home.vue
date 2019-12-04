<template>
  <div class="home">
    <div class="top">
      <input type="text" @input="changeEvent(value)" v-model="value"/>
    </div>
    <div class="middle">
      <span  v-for="(item,index) in list" :key="index" @click="btnEvent(item)">{{item.name}}</span>
    </div>
    <div class="bottom">
      <P v-for="(item,index) in last" :key="index">{{item.title}}</P>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
/*import {mapMutations,mapState} from 'vuex'*/
export default {
  /*...mapState(){
      last = state=>state.list
  }*/
  data(){
    return {
      list:[{//tap切换所需要的选项
          name:"已完成"
        },{
          name:"未完成"
        },{
          name:"正在进行"
        }],
        last:[]//需要把axios请求到的数据赋值
    }
  },
  created(){
    this.getData()//初始化调用使页面一开始就能拿到数据
  },
  methods:{
    /*...mapMutations(){
      userList:"userList"
      btnEvent:"btnevent"
    },*/
    getData(){
      axios.get('/data/json').then(res=>{
        console.log(res)//获取数据发起axios请求
        //this.userList(res)
        this.last = res.data//把值赋给定义的空数组
      })
    },
    btnEvent(loop){
      console.log(loop)
      axios.get('/data/json').then(res=>{
        let index = res.data.filter(item=>item.name===loop.name)//将数据赛选一遍拿到跟你匹配的数据进行渲染
        //this.btnEvent(index)
        this.last = index
      })
    },
    changeEvent(value){
      console.log(value)
      axios.get('/data/json').then(res=>{
        let index = res.data.filter(item=>item.title.includes(value))//查找你的数据有没有这个关键词进行渲染
        //this.changeEvent(index)
        this.last = index
      })
    }
  }
}
</script>
<style lang="scss">
.top{
  width: 100%;
  height: 50px;
  input{
    width: 80%;
    margin-left: 10%;
  }
}
.middle{
  width: 100%;
  height: 50px;
  background: #eee;
  display: flex;
  span{
   flex:1;
   text-align: center;
   line-height: 50px;
  }
}
</style>
