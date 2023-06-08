<template>
  <div>
    <div>天气播报员：唐玉森: 202250915129</div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="city" label="城市" width="180" />
      <el-table-column prop="weather" label="天气" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2023-06-03',
    city: '郑州',
    weather: '多云转晴',
  },
  {
    date: '2023-06-04',
    city: '郑州',
    weather: '晴天',
  },
  {
    date: '2023-06-05',
    city: '郑州',
    weather: '小雨',
  },
  {
    date: '2023-06-06',
    city: '郑州',
    weather: '暴雨',
  }
]
</script>
