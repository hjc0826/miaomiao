<template>
  <div>
    <div class="movieList">
      <MovieItem />
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/movieItem";
export default {
  name: "nowplaying",
  created() {
   
  },
  components: {
    MovieItem
  }
};
</script>

<style scoped>
.movieList {
  margin: 0 12px;
  overflow: hidden;
}
</style>