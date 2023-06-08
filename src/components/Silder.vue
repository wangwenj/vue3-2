<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  type List = {
    id: string
    title: string
    path: string
    icon: string
  }

  const route = useRoute()
  const router = useRouter()

  const currNav = ref(route.path)

  const list: List[] = [
    {
      id: 'home',
      title: '首页',
      path: '/home',
      icon: 'home',
    },
    {
      id: 'about',
      title: '关于',
      path: '/about',
      icon: 'about',
    },
    {
      id: 'user',
      title: '用户',
      path: '/user',
      icon: 'user',
    },
    {
      id: 'weather',
      title: '天气',
      path: '/weather',
      icon: 'weather',
    },
  ]

  const handleClick = (nav: List) => {
    currNav.value = nav.path
    router.push(nav.path)
  }
</script>

<template>
  <ul class="silder">
    <li
      v-for="nav in list"
      :key="nav.id"
      :class="['navItem', { active: currNav === nav.path }]"
      @click="handleClick(nav)"
    >
      <SvgIcon :name="nav.icon" />
      <div class="menu-text">{{ nav.title }}</div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .silder {
    width: 200px;
    height: calc(100vh - 60px);
    background-color: white;

    .navItem {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;

      &:hover,
      &.active {
        color: #fff;
        background-color: var(--primary-color);
      }

      .menu-text {
        margin-left: 8px;
      }
    }
  }
</style>
