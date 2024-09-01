import { toast } from "vue3-toastify"
import type { TaskFromDb } from "~/interfaces/task-from-db.interface"
import type { UserFromDb } from "~/interfaces/user-from-db"

export const useTasks = defineStore('tasks', () => {
  let tasks = ref<TaskFromDb[]>([])
  const config = useRuntimeConfig()

  const SERVER_URL = config.public.apiBase
  async function getAll() {
    let tasksFromDb: TaskFromDb[] | undefined = await $fetch(SERVER_URL + '/tasks/', {
      method: 'GET'
    })

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

  async function claimTask(taskId: string, userId: string) {
    let userFromDB: UserFromDb | null = await $fetch(SERVER_URL + '/tasks/claim', {
      method: 'POST',
      body: {
        taskId,
        userId
      }
    })
    const userStore = useAuth()
    if (userFromDB?._id) {
      userStore.user = userFromDB
    }
  }

  return {
    // variables
    tasks,
    // functions
    getAll, claimTask
  }
})