# Icon 图标

Y-UI 推荐使用 xicons 作为图标库

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想使用用例一样直接使用，需要注册全局组件，才能在项目中使用。

<script setup lang="ts">
import { ArrowUndo } from "@vicons/ionicons5"
</script>

<y-icon color="red" size="40">
  <ArrowUndo />
</y-icon>

<y-icon color="green" size="40">
  <ArrowUndo />
</y-icon>

```vue
<script setup lang="ts">
import { ArrowUndo } from '@vicons/ionicons5'
</script>

<template>
  <y-icon color="red" size="40">
    <ArrowUndo />
  </y-icon>
</template>
```

## API

### Icon Props

| 属性  | 说明     | 类型            | 默认值    |
| ----- | -------- | --------------- | --------- |
| color | 图标颜色 | string          | undefined |
| size  | 图标大小 | string \ number | undefined |
