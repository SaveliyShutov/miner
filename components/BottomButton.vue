<script setup lang="ts">
const emit = defineEmits(['buttonClick'])

function emitClick() {
  emit('buttonClick')
}
</script>
<template>
  <div class="absolute bottom-20 left-0 w-full px-6 pb-4">
    <button @click="emitClick" type="button" class="z-2 box w-full text-black bg-white rounded-lg py-2.5">
      <p class="unbounded-regular text-lg">
        <slot />
      </p>
    </button>
  </div>
</template>
