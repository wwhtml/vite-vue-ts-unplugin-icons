<script lang="ts" setup>
// import IconBaseball from '~icons/ep/baseball'
// import IconAddAim from '~icons/ep/aim'
// import IconApple from '~icons/ep/apple'

//引入自定义图标
// import IconChecked from '~icons/syt/checked'
// import IconCompass from '~icons/syt/compass'
</script>

<template>
  <!-- <IconBaseball />
  <IconAddAim />
  <IconApple /> -->

  <!-- 按需引入并注册的时候要注意前缀 -->
  <i-ep-baseball />
  <i-ep-aim />
  <i-ep-apple />

  <!-- 设置前缀为 icon ; 默认前缀是 i -->
  <!-- <icon-ep-baseball />
  <icon-ep-aim />
  <icon-ep-apple /> -->

  <!-- 取消前缀：必须要把使用的图标集id放到vite.confgi.ts中配置的数组中，否则不生效 -->
  <!-- <ep-baseball />
  <ep-aim />
  <ep-apple /> -->

  <!--集合别名 -->
  <!-- <el-baseball />
  <el-aim />
  <el-apple /> -->

  <!-- 自定义图标的使用 -->
  <!-- <IconChecked />
  <IconCompass /> -->

  <!-- 按需引入并注册自定义图标 -->
  <i-syt-checked />
  <i-syt-compass />
</template>

<style lang="scss">
#app {
  background-color: antiquewhite;
}
</style>
