<template>
  <div class="page">
    <header class="page__header">
      <global-header />
    </header>

    <div class="page__main">
      <div class="my-4">
        <router-view />
      </div>
    </div>

    <footer class="page__footer">
      <global-footer />
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "BasicLayout",
};
</script>

<style lang="scss" scoped></style>
