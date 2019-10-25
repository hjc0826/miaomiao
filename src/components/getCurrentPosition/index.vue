<template>
    <div class="position_body">
        <h2>定位</h2>
        <p>{{city.nm}}</p>
        <div>
            <div @click="jumpPlace">切换</div>
            <div @click="rejectJump">取消定位</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'CurrentPosition',
    props: {
        city : Object
    },
    methods: {
        jumpPlace(){
            this.$store.commit('ChangeCurrenId',this.city)
            this.$store.state.isChangeCity = null
        },
        rejectJump(){
            this.$store.state.isChangeCity = null
        }
    },
}
</script>

<style lang="stylus" scoped>
    .position_body
        width: 200px;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #fff;
        box-shadow: 3px 3px 3px 3px #ccc;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -60px 0 0 -100px;
        z-index 999

    .position_body h2 , .position_body p
        text-align: center;
        line-height: 40px;

    .position_body>div
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #ccc;
    .position_body>div div
        flex: 1;
        text-align: center;
        line-height: 30px;
        border-right: 1px solid #ccc;
    .position_body>div div:last-child
        border none 
</style>