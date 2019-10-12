<template>
  <div class="comingsoon">
    <MovieItem />
  </div>
</template>

<script>
import MovieItem from "@/components/movieItem";
export default {
  name: "Comingsoon",
  components: {
    MovieItem
  }
};
</script>

<style lang="" scoped>
.comingsoon {
  margin: 0 12px;
  overflow: hidden;
}
</style>