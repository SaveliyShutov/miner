export const useAuth = defineStore('auth', {
    state: () => ({
        isAuth: false,
        user: <user>{}
    }),
    getters: {
    },
    actions: {
        async login(tgId: number, username: string, is_bot: boolean) {
            try {
                let response: user = await $fetch('http://89.169.129.49:3030/auth/login', {
                    method: 'POST',
                    body: {
                        tgId: tgId,
                        username: username,
                        is_bot: is_bot
                    }
                })

                this.user = response
                this.isAuth = true
                return true
            } catch (err) {
                return err
            }
        },
        async count(count: number, _id: string) {
            try {
                let response: user = await $fetch('http://89.169.129.49:3030/auth/count', {
                    method: 'POST',
                    body: {
                        _id: _id,
                        count: count,
                    }
                })
                this.user.count = response.count

                return true
            } catch (err) {
                return err
            }
        }
    }
})

interface user {
    tgId: number;
    userName: string;
    waterLevel: number;
    click: number;
    count: number;
    currentWater: number;
    level: number;
    _id: string;
}
