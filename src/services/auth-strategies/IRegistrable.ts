export interface IRegistrable {
  register(user, password): Promise<void>
}
