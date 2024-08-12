export const useAuth = defineStore('auth', {
    state: () => ({
        isAuth: false,
        user: <user>{}
    }),
    getters: {
    },
    actions: {
        async login(tgId: number) {
            try {
                let response: user = await $fetch('http://localhost:3030/auth/login', {
                    method: 'POST',
                    body: {
                        id: tgId,
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
                let response: user = await $fetch('http://localhost:3030/auth/open-box', {
                    method: 'POST',
                    body: { _id: _id }
                })
                this.user = response
                return true
            } catch (err) {
                return err
            }
        },
        async count(count: number, _id: string) {
            try {
                let response: user = await $fetch('http://localhost:3030/auth/count', {
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
