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
  <i-syt-compass />

  <i-syt-checked />
  <i-syt-jiaofei />
  <i-syt-jinggao />

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6 15h1.5V9H5v1.5h1V15Zm3.5 0H12q.425 0 .713-.288T13 14v-4q0-.425-.288-.713T12 9H9.5q-.425 0-.713.288T8.5 10v4q0 .425.288.713T9.5 15Zm.5-1.5v-3h1.5v3H10Zm4 1.5h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75l-1.75 2.25V9H14v6Zm-9 6q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Z"
    />
  </svg>
  <svg
    t="1699723039974"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2032"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M831.81629667 288.02407445a97.09036999 97.09036999 0 0 1 97.09037 97.09037v97.09036998h-218.45333333a121.36296334 121.36296334 0 0 0-121.12023667 113.40155336L589.09036999 603.56777778a121.36296334 121.36296334 0 0 0 113.40155335 121.12023664L710.45333334 724.93074112H928.90666667v97.09036999a97.09036999 97.09036999 0 0 1-97.09036999 97.09036998H152.18370333a97.09036999 97.09036999 0 0 1-97.09037-97.09036998V385.11444445a97.09036999 97.09036999 0 0 1 97.09037-97.09037h679.63259335z m72.81777779 242.72592555a72.81777778 72.81777778 0 0 1 0 145.63555554h-194.18074112a72.81777778 72.81777778 0 0 1 0-145.63555554h194.18074112z m-238.0655889-406.22611002l59.46785222 100.29435336a9.70903666 9.70903666 0 0 1-8.34977222 14.66064554H288.69276446a9.70903666 9.70903666 0 0 1-4.51470223-18.30153443l253.79422776-133.11089779a97.09036999 97.09036999 0 0 1 128.59619557 36.45743332z"
      p-id="2033"
    ></path>
  </svg>
</template>

<style lang="scss">
#app {
  background-color: antiquewhite;
  // svg {
  //   width: 16px;
  //   height: 16px;
  //   color: red;
  // }

  font-size: 1.8em;
}
</style>
