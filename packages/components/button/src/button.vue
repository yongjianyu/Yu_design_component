<script lang="ts" setup>
import { createNamespace } from '@yu_design/utils/create';
import { buttonEmits, buttonProps } from './button';
const bem = createNamespace('button')
defineOptions({
  name: 'y-button'
})
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

</script>

<template>
  <button
    :class="[bem.b(), bem.m(type), bem.m(size), bem.is('round', round), bem.is('loading', loading), bem.is('disabled', disabled)]"
    :type="nativeType" :disabled="disabled || loading">
    <slot />
  </button>
</template>
