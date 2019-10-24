<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabbar from "@/components/tabBar";
export default {
  name: "Mine",
  components: {
    Header,
    Tabbar
  }
};
</script>

<style scoped>

</style>