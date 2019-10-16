<template>
    <div id="loading">
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
export default {
    name : 'Loading',
    props:{
        msg:String
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="">
    #loading{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background-color: rgba(red, green, blue, 0.6)
    }
    #loading h3{
        color: deeppink;
        font-size: 18px;
        text-align: center;
        margin: 50% 0;
    }
</style>