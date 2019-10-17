<template>
    <div class="cinema_body">
        <div class="wrapper">
            <ul>
                <CinemaItem v-for="item in cinemaList" :key="item.id" :itemDate="item"/>
            </ul>
        </div>
    </div>
</template>

<script>
import CinemaItem from './components/cinemaItem'
import { cinemaList } from '@/axios/api'
export default {
    name : 'AllCity',
    data() {
        return {
            cinemaList : []
        }
    },
    components : {
        CinemaItem
    },
    beforeMount(){
        cinemaList().then(res => {
            this.cinemaList = res.data.cinemas
        })
    },
}
</script>

<style lang="">
    .cinema_body{
        margin-bottom: 10px;
        height: 100%;
    }
    .cinema_body .wrapper{
        height: 100%;
        margin-bottom: 50px;
    }
    .cinema_body ul{
        padding: 20px;
    }
</style>