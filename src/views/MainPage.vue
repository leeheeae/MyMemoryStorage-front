<template>
  <div class="main-container">
    <my-storage />
  </div>
</template>

<script>
import MyStorage from "@/components/main/MyStorage.vue";

export default {
  components: {
    MyStorage,
  },
};
</script>

<style scoped>
.main-container {
  padding: 3rem 4rem;
}
</style>