import { toast } from "vue3-toastify"
import type { TaskFromDb } from "~/interfaces/task-from-db.interface"

export const useTasks = defineStore('tasks', () => {
  let tasks = ref<TaskFromDb[]>([])
  const config = useRuntimeConfig()

  const SERVER_URL = config.public.apiBase
  async function getAll() {
    let tasksFromDb: TaskFromDb[] | undefined = await $fetch(SERVER_URL + '/tasks/', {
      method: 'GET'
    })

    console.log(tasksFromDb);
    

    if (tasksFromDb?.length) {
      tasks.value = tasksFromDb
      return true
    } else {
      toast('Не удалось получить Tasks', {
        type: "error",
      })
      return false
    }
  }

  return {
    // variables
    tasks,
    // functions
    getAll
  }
})