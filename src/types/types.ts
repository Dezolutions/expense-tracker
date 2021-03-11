
export interface TransObj {
  transactions: Trans[]
}
export type Trans = {
  id: number,
  text: string,
  amount: number,
  completed: boolean
}