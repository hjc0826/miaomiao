<template>
    <div class="shopping_body">
        <Header :title="'我的购物车'" />
            我是购物车车
        <Tabbar />
    </div>
</template>

<script>
import Header from '@/components/header'
import Tabbar from '@/components/tabBar'
export default {
    name : 'ShoppingCart',
    components:{    
        Header,
        Tabbar
    }
}
</script>

<style lang="stylus" scoped>

</style>