import type { Task } from "./task.interface";

export interface TaskFromDb extends Task{
  _id: string
}