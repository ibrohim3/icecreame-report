<template>
  <section>
    <Header @toggleSidebar="isSidebarOpen = !isSidebarOpen" />
    <Sidebar :open="isSidebarOpen" />
  </section>
  <main :class="{ shifted: isSidebarOpen }">
    <Suspense>
      <router-view />
    </Suspense>
  </main>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import Header from "../components/Header.vue";
const Sidebar = defineAsyncComponent(() => import("../components/Sidebar.vue"));
const isSidebarOpen = ref(false);
</script>

<style scoped>
main {
  margin-left: 220px;
  padding: 20px;
  transition: margin-left 0.3s;
}
main.shifted {
  margin-left: 0;
}
@media (max-width: 768px) {
  main {
    margin-left: 0;
  }
}
</style>
