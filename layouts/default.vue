<script setup lang="ts">
// auto import from vue-use
let { height } = useWindowSize()
// ref to element
let mainContent: any = ref(null)
function setMargin(newHeight: number) {
    if (mainContent.value.offsetHeight >= newHeight - 90) {
        mainContent.value.style.paddingBottom = '90px'
    } else {
        mainContent.value.style.paddingBottom = '0px'
    }
}
watch(height, (newHeight) => {
    setMargin(newHeight)
})
onMounted(() => {
    setMargin(window.innerHeight)
})
</script>
<template>
    <UContainer>
        <!-- 80px - height of AppHeader and 10px на всякий -->
        <div ref="mainContent" style="min-height: calc(100vh - 90px);">
            <slot />
        </div>
        <AppHeader />
    </UContainer>
</template>
<style scoped lang="scss"></style>