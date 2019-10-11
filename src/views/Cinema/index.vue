<template>
    <div>
        <Header title="我的影院"/>
            hello cinema
        <Tabbar /> 
    </div>
</template>

<script>
import Header from '@/components/header'
import Tabbar from '@/components/tabBar'
export default {
    name : 'Cinema',
    components:{
        Header,
        Tabbar
    }
}
</script>

<style>

</style>