<script setup lang="ts">
const tasksStore = useTasks()
const userStore = useAuth()

let { tasks } = storeToRefs(tasksStore)
let loading = ref<boolean>(false)

function claimTask(taskId: string) {
  if (userStore.user?._id) {
    tasksStore.claimTask(taskId, userStore.user._id)
  }
}

onMounted(async () => {
  loading.value = true
  await tasksStore.getAll()
  loading.value = false
})
</script>
<template>
  <div class="flex justify-start flex-col text-white">
    <div class="mt-10 relative inline-flex items-center">
      <p class="text-2xl unbounded-bold">Tasks</p>
      <div class="relative -top-3 text-md unbounded-bold">{{ tasks.length }}</div>
    </div>
    <p class="text-base font-medium text-start flex align-center mt-5 text-zinc-400">
      Выполняй задания, умней прям как в школе
    </p>

    <TasksSkeleton v-if="loading"/>
    <div v-else v-for="task of tasks" :key="task._id" class="mt-5 flex items-center justify-between">
      <div class="max-w-[60%] min-w-[60%]">
        <p class="truncate text-base unbounded-medium">{{ task.name }}</p>
        <p class="text-sm text-zinc-300 unbounded-medium">+{{ task.tokenReward }} iq</p>
      </div>
      <SmallButton @claim="claimTask(task._id)" :taskId="task._id"></SmallButton>
    </div>

    <div class="mt-10 relative inline-flex items-center">
      <p class="text-2xl unbounded-bold">Socials</p>
      <div class="relative -top-3 text-md unbounded-bold">4</div>
    </div>
    <p class="text-base font-medium text-start flex align-center mt-5 text-zinc-400">
      Ну подпишсь пж, а мы тебе копеек насыпем честно!
    </p>

    <!-- <div class="mt-5 flex items-center justify-between">
      <div class="max-w-[60%] min-w-[60%]">
        <p class="truncate text-base font-medium unbounded-medium">Роман онлифанс</p>
        <p class="text-sm text-zinc-300 font-medium unbounded-medium">+1000 iq</p>
      </div>
      <SmallButton></SmallButton>
    </div>
    <div class="mt-5 flex items-center justify-between">
      <div class="max-w-[60%] min-w-[60%]">
        <p class="truncate text-base font-medium unbounded-medium">Гриша приват</p>
        <p class="text-sm text-zinc-300 font-medium unbounded-medium">-999 iq</p>
      </div>
      <SmallButton></SmallButton>
    </div>
    <div class="mt-5 flex items-center justify-between">
      <div class="max-w-[60%] min-w-[60%]">
        <p class="truncate text-md font-medium unbounded-medium">Порадуй маму</p>
        <p class="text-sm text-zinc-300 font-medium unbounded-medium">+150 iq</p>
      </div>
      <SmallButton></SmallButton>
    </div> -->
  </div>
</template>
<style></style>
