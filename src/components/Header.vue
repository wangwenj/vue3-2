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
    <div class="logo"></div>
    <el-menu
      :default-active="activeIndex"
      class="nav"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Menu Item 1</el-menu-item>
      <el-menu-item index="2">Menu Item 2</el-menu-item>
      <el-menu-item index="3">Menu Item 3</el-menu-item>
    </el-menu>
    <div class="operation" @click="router.push('/login')">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      signOut
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: white;

    .logo {
      background: url(@/assets/images/logo.png) no-repeat center / 100% 100%;
      width: 168px;
      height: 40px;
      margin: 0 16px;
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
