<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu />
      <el-container>
        <!-- 头部 -->
        <el-header>Header</el-header>
        <!-- 主题 -->
        <el-main>
          main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from './navMenu.vue'
</script>

<style scoped>

</style>