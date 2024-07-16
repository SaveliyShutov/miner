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
                let response: user = await $fetch('http://localhost:3030/auth/login', {
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
        },
        async click(clickLevel: number, _id: string) {
            try {
                let response: user = await $fetch('http://localhost:3030/auth/click', {
                    method: 'POST',
                    body: {
                        _id: _id,
                        clickLevel: clickLevel,
                    }
                })
                this.user.click = response.click

                return true
            } catch (err) {
                return err
            }
        },
        async waterLevel(waterLevel: number, _id: string) {
            try {
                let response: user = await $fetch('http://localhost:3030/auth/water-level', {
                    method: 'POST',
                    body: {
                        _id: _id,
                        waterLevel: waterLevel,
                    }
                })
                this.user.waterLevel = response.waterLevel

                return true
            } catch (err) {
                return err
            }
        },
        async water(water: number, _id: string) {
            try {
                let response: user = await $fetch('http://localhost:3030/auth/water', {
                    method: 'POST',
                    body: {
                        _id: _id,
                        water: water,
                    }
                })
                this.user.currentWater = response.currentWater

                return true
            } catch (err) {
                return err
            }
        },
        async level(level: number, _id: string) {
            try {
                let response: user = await $fetch('http://localhost:3030/auth/level', {
                    method: 'POST',
                    body: {
                        _id: _id,
                        level: level,
                    }
                })
                this.user.level = response.level

                return true
            } catch (err) {
                return err
            }
        },
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
