import {TransObj} from '../types/types'

let initialState :TransObj = {
  transactions: []
}


const reducer = (state = initialState,action:any) => {
  switch (action.type) {
    case 'ADD_TRANSACTION' :
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    case 'TOGGLE_TRANSACTION' :
      const chooseArr = state.transactions.map(transaction =>
        transaction.id === action.id 
         ? {...transaction,completed: !transaction.completed}
         : transaction
      )

      return {
        ...state,
        transactions: [...chooseArr]
      }
    case 'DELETE_TRANSACTION' :
      const filterTrans = state.transactions.filter(item => item.completed === false)
      
      return {
        ...state,
        transactions: [...filterTrans]
      }
      
  
    default:
      return state;
  }
}

export default reducer;