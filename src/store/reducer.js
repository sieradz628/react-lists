import * as types from './types'
import db from '../utils/data'

const reducer = (store = {
  db: [ ...db ],
  match: '',
}, action) => {
  
  switch(action.type) {
    case types.ADD_ITEM:
      return {
        ...store,
        db: [
          ...store.db, 
          action.payload
        ]
      }
    case types.DELETE_ITEM:
      return  {
        ...store,
        db: store.db.filter(el => el.id !== action.payload)
      }
    case types.SET_MATCH:
      return  {
        ...store,
        match: action.payload
      }
    default:
      return store
  }
}

export default reducer
