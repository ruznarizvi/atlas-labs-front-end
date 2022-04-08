<template>
  <div class="home">
    <top-header> </top-header>
    <all-tasks></all-tasks>
  </div>
</template>

<script>
// @ is an alias to /src

import TopHeader from "@/components/TopHeader.vue";
import AllTasks from "@/components/AllTasks.vue";

export default {
  name: "HomeView",
  components: {
    TopHeader,
    AllTasks,
  },
};
</script>
