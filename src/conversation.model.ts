import { User } from "./app/user.model";

export class Conversation {
  constructor(public id: number, public users: User[]) {}
}