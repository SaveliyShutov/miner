import type { UserFromTg } from '@/interfaces/user-from-tg'
import type { UserFromDb } from '@/interfaces/user-from-db'


export const useAuth = defineStore('auth', () => {
    let isAuth = ref<boolean>(false)
    let user = ref<UserFromDb>()
    const config = useRuntimeConfig()

    const SERVER_URL = config.public.apiBase

    async function login(tgUser: UserFromTg) {
        try {            
            let res: any = await useFetch(SERVER_URL + '/auth/login', {
                method: 'POST',
                body: {
                    user: tgUser,
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

    async function startEarn() {
        try {
            let res: any = await useFetch(SERVER_URL + '/auth/start-earn', {
                method: 'POST',
                body: {
                    // pass the tgId!!!!!!
                    tgId: user.value?.id,
                    startEarnDate: new Date()
                }
            })
            
            if (res.status.value == 'success') {
                user.value = res.data.value
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function setTokenCount(tokenCount: number) {
        try {
            let res: any = await $fetch(SERVER_URL + '/auth/set-token-count', {
                method: 'PUT',
                body: {
                    // pass the tgId!!!!!!
                    tgId: user.value?.id,
                    newTokenCount: tokenCount
                }
            })
            return res
        } catch (error) {
            console.log(error);
            return error
        }
    }
    async function addNewFriend(senderId: string, invitedId: string) {
        try {
            let res: any = await $fetch(SERVER_URL + '/auth/add-new-friend', {
                method: 'POST',
                body: {
                    senderId,
                    invitedId
                }
            })
            return res
        } catch (error) {
            console.log(error);
            return error
        }
    }

    return {
        // variables
        isAuth, user,
        // functions
        login, startEarn, setTokenCount, addNewFriend
    }
})