<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <el-header>Header</el-header>
      <el-container>
        <NavMenu />
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