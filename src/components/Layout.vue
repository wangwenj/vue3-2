<script setup lang="ts">
  import Header from './Header.vue'
  import Silder from './Silder.vue'
</script>

<template>
  <Header />
  <main class="main">
    <Silder />
    <section class="content">
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </keep-alive>
      </router-view>
    </section>
  </main>
</template>

<style scoped lang="scss">
  .main {
    display: flex;

    .content {
      flex: 1;
      margin: 24px;
      padding: 24px;
      background-color: white;
    }
  }
</style>
