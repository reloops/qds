<template>
<div class="common-layout">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside width="20vw"><SideMenu></SideMenu></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import SideMenu from '../components/SideMenu.vue';
import Header from '../components/Header.vue'
</script>

<style scoped>



</style>