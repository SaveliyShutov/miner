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
                let response: user = await $fetch('https://plantcoin.ru/auth/login', {
                    method: 'POST',
                    body: {
                        id: tgId,
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
        async openBox(_id: string) {
            try {
                let response: user = await $fetch('https://plantcoin.ru/auth/open-box', {
                    method: 'POST',
                    body: {_id:_id}
                })
                this.user = response
                return true
            } catch (err) {
                return err
            }
        },
        async count(count: number, _id: string) {
            try {
                let response: user = await $fetch('https://plantcoin.ru/auth/count', {
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
    count: number;
    _id: string;
    isWaiting: boolean,
    timerLimit: number,
    remainingTime: number,
    lastSignTime: number
}
