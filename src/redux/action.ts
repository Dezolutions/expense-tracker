export const addTransaction = (obj:any) => ({
  type: 'ADD_TRANSACTION',
  payload: obj

})

export const toggleTransaction = (id:number) => ({
  type: 'TOGGLE_TRANSACTION',
  id
})

export const deleteTransaction = (arr:any) => ({
  type: 'DELETE_TRANSACTION',
  arr
})