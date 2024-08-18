import type { UserFromTg } from '@/interfaces/user-from-tg'
import type { UserFromDb } from '@/interfaces/user-from-db'


export const useAuth = defineStore('auth', () => {
    let isAuth = ref<boolean>(false)
    let user = ref<UserFromDb>()

    async function login(tgUser: UserFromTg) {
        try {
            let res: any = await useFetch('http://localhost:3030/auth/login', {
                method: 'POST',
                body: {
                    user: tgUser
                }
            })
            if (res.status.value == 'success') {
                user.value = res.data.value
                isAuth.value = true
            }
        } catch (error) {
            console.log(error);
        }
    }
    return {
        // variables
        isAuth, user,
        // functions
        login
    }
})