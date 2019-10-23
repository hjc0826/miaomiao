<template>
    <div class="layout">
        <Header :title="'我的信息'" />
            <div class="content">
                <h3>{{user.name}}</h3>
                <h4>{{user.sex}}</h4>
            </div>
        <Tabbar />
    </div>
</template>

<script>
import Header from '@/components/header'
import Tabbar from '@/components/tabBar'
export default {
    name : 'Loginout',
    components:{
        Header,
        Tabbar
    },
    data() {
        return {
            // user : ''
        }
    },
    beforeMount() {
        var obj = eval('(' + sessionStorage.getItem("user") + ')');
        this.user = obj
        console.log(this.user)
    },
}
</script>

<style lang="stylus" scoped>
    .content
        display flex
        width 100%
        justify-content center
        align-items center
        flex-direction column
    .content h3
        line-height 35px
    
</style>