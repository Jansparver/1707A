<template>
    <div>
        <div>
            <div>
                <label for="">联系人</label>
                <input type="text" v-model="info.name">
            </div>
            <div>
                <label for="">手机号</label>
                <input type="number" v-model="info.phone">
            </div>
            <div>
                <label for="">地址</label>
                <input type="text" v-model="info.address">
            </div>
            <div>
                <label for="">详细地址</label>
                <input type="text" v-model="info.detail">
            </div>
        </div>
        <button v-if="this.id?true:false" @click="delet">删除</button>
        <button @click="finish">完成</button>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState({
            list:state=>state.list,
            current:state=>state.current
        }),
        info(){
            if(this.id){
                let index = this.list.findIndex(item=>item.id == this.id)
                return this.list[index]
            }else{
                return {
                    id: '',
                    name: '',
                    phone: '',
                    address: '',
                    detail: ''
                }
            }
        }
    },
    created(){
        this.id = this.$route.query.id
        console.log(this.id)
        document.title = this.id ?'编辑页面' : '添加页面'
    },
    methods:{
        ...mapMutations({
            finishList:"finishList",
            deletList:"deletList"
        }),
        delet(){
            this.deletList(this.info.id)
            alert('删除成功')
            window.history.back()
        },
        finish(){
            this.finishList(this.info)
            alert('添加地址成功')
            window.history.back()
        }
    }
}
</script>

<style lang="scss">

</style>
