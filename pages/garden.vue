<script setup>
</script>
<template>
    <div class="mt-4 text-md grid grid-cols-2 gap-4">
        <UCard>
            <template #header>
                <div class="flex flex-row justify-around content-center">
                    <p class="font-bold text-lg">подсолнух</p>
                    <UPopover>
                        <UButton variant="link" class="mt-1" :padded="false" color="white"
                            trailing-icon="i-heroicons-ellipsis-vertical-16-solid" />
                            <template #panel>
                            <div>
                                иди на хуй
                            </div>
                            </template>
                    </UPopover>
                </div>
            </template>
            <p>12 в час</p>
        </UCard>
        <UCard>
            <template #header>
                <p class="font-bold text-lg">марковка</p>

            </template>
            3 в час
        </UCard>
        <UCard>
            <template #header>
                <p class="font-bold text-lg">капуста</p>
            </template>
            8 в час
        </UCard>
    </div>
</template>