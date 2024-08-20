import type { UserFromTg } from "./user-from-tg";

export interface UserFromDb extends UserFromTg {
  _id: string,
  isClaimed: boolean
}