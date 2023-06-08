<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="名字" width="180" />
    <el-table-column prop="address" label="登录地址" />
  </el-table>
</template>

<script lang="ts" setup>
  const tableData = [
    {
      date: '2023-05-03',
      name: '唐玉森',
      address: '郑州',
    },
    {
      date: '2023-05-02',
      name: '唐玉森',
      address: '郑州',
    },
    {
      date: '2023-05-04',
      name: '唐玉森',
      address: '郑州',
    },
    {
      date: '2023-05-01',
      name: '唐玉森',
      address: '郑州',
    },
  ]
</script>
