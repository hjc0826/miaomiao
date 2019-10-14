<template>
    <div>
        <Header title="我的"/>
            hello mine
        <Tabbar /> 
    </div>
</template>

<script>
import Header from '@/components/header'
import Tabbar from '@/components/tabBar'
export default {
    name : 'Mine',
    components:{
        Header,
        Tabbar
    }
}
</script>

<style>

</style>