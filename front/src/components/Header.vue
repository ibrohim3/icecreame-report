<template>
  <header>
    <button class="toggle-btn" @click="$emit('toggleSidebar')">☰</button>
    <div class="logo" aria-label="Ice Cream Admin logo">Ice Cream Admin</div>
  </header>
</template>

<script setup>
defineEmits(["toggleSidebar"]);
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  contain: layout paint;
  padding: 0 20px;
  background-color: #4a90e2;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.toggle-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}

.logo {
  font-weight: bold;
  font-size: 18px;
  font-display: swap;
}

@media (max-width: 768px) {
  .toggle-btn {
    display: block;
  }
}
</style>
