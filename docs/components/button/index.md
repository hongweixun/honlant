<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hongweixun
 * @Date: 2022-10-26 10:54:47
 * @LastEditors: hongweixun
 * @LastEditTime: 2022-10-26 11:27:04
-->
# Button 按钮

## type属性

:::demo type共有两个属性，为`primary`与`default`，默认为`primary`

```vue

<template>
  <hl-button type="primary" style="margin-right: 15px;">默认按钮</hl-button>
  <hl-button>默认按钮</hl-button>
</template>

```

:::

## size属性

:::demo size共有四个属性，为`large`，`middle`，`small`，`mini`，默认为`middle`

```vue

<template>
  <hl-button type="primary" size="large" style="margin-right: 15px;">large</hl-button>
  <hl-button type="primary" size="middle" style="margin-right: 15px;">middle</hl-button>
  <hl-button type="primary" size="small" style="margin-right: 15px;">small</hl-button>
  <hl-button type="primary" size="mini">mini</hl-button>
</template>

```

:::

## effect属性

:::demo effect表示按钮主题色，默认为`light`, 当effect=`dark`时，配合type属性，按钮可以呈现另一种展示方式

```vue

<template>
  <hl-button type="primary" effect="dark" style="margin-right: 15px;">primary</hl-button>
  <hl-button type="danger" effect="dark" style="margin-right: 15px;">danger</hl-button>
  <hl-button type="error" effect="dark" style="margin-right: 15px;">error</hl-button>
  <hl-button type="other" effect="dark">other</hl-button>
</template>

```

:::

## block属性

:::demo block该属性表示按钮为块级元素
```vue

<template>
  <hl-button type="primary" block>block按钮</hl-button>
</template>

```

:::

## disabled属性

:::demo disabled属性表示按钮不可点击

```vue

<template>
  <hl-button type="primary" disabled>disabled按钮</hl-button>
</template>

```

:::

## color属性

:::demo color属性表示自定义按钮颜色

```vue

<template>
  <hl-button type="primary" color="red">自定义</hl-button>
</template>

```

:::

## fontColor属性

:::demo fontColor属性表示自定义按钮字体颜色

```vue

<template>
  <hl-button fontColor="red">自定义</hl-button>
</template>

```

:::

## 点击事件

:::demo `@click`表示按钮点击事件

```vue

<template>
  <hl-button type="primary" effect="dark" @click="handle">点击触发</hl-button>
</template>
<script lang="ts" setup>
 const handle = () => {
  alert('点击了')
 }
</script>

```

:::

## 其它属性
该按钮默认有点击特效，默认为圆角`round`展示

## 参数详细说明

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  | 备注  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- | ------- |
| size    | 尺寸   | string  | large / middle / small / mini                               | middle | - |
| type    | 类型   | string  | primary / default                                  | default | 当effect的值为dark时，可选值有primary / danger / error / other   |
| effect | 主题 | string | light / dark                                                 | light   | 当effect的值为dark时，配合type值变化，可以呈现不同的方式   |
| block    | 块级元素   | boolean  | true / false                              | false | - |
| disabled    | 禁用元素   | boolean  | true / false                              | false | - |
| color    | 自定义背景色   | string  | -                              | - | - |
| fontColor    | 自定义字体色   | string  | -                              | - | - |


## event方法说明

| 事件名称    | 参数   | 返回值    |
| ------- | ------ | ------- |
| click    | -   | function  |