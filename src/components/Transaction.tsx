import classnames from 'classnames'
import { toggleTransaction } from '../redux/action'
import {useDispatch} from 'react-redux'
import {Trans} from '../types/types'



function Transaction({id,text,amount,completed}:Trans) {
  const dispatch = useDispatch()

  //выбираем предмет, для того чтобы его можно было удалить
  const onChooseItem = () => {
    dispatch(toggleTransaction(id))
  }
  return (
    <li 
        onClick={onChooseItem}
        className={classnames('history-item',{
          'history-item__income': amount > 0,
          'history-item__expense':amount < 0,
          'history-item-choose': completed
        })}>
      <p className="item-title">{text}</p>
      <p className="item-amount">{amount}$</p>
    </li> 
  )
}

export default Transaction
