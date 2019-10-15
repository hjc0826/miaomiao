<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props:{
        title:{
            type:String,
            default:'喵喵电影'
        }
    }
}
</script>

<style scoped>
    #header{
        width: 100%;
        height: 50px;
        color: #fff;
        background-color: #e54847;
        border-bottom: 1px solid #e54847;
        position: relative;
        z-index: 10;
    }
    #header h1{
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
    }
</style>