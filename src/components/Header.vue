<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const activeIndex = ref('1')

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="/src/assets/images/logo.png">
      唐玉森：202250915129
    </div>
    <!-- <el-menu
      :default-active="activeIndex"
      class="nav"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Menu Item 1</el-menu-item>
      <el-menu-item index="2">Menu Item 2</el-menu-item>
      <el-menu-item index="3">Menu Item 3</el-menu-item>
    </el-menu> -->
    <div class="operation" @click="router.push('/login')">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      退出登录
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: white;

    .logo {
      width: 50px;
      height: 50px;
      margin: 0 16px;
      display: flex;
    }

    .nav {
      margin-left: 24px;
      flex: 1;
      gap: 24px;
    }

    .operation {
      display: inline-flex;
      align-items: center;
      margin-right: 24px;
      cursor: pointer;
    }
  }
</style>
