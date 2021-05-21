import React, {useState, useMemo, useCallback} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Item from '../Item'

import classes from './ItemList.module.scss'

const ItemList = () => {
  const db =  useSelector(store => store.db)
  const match =  useSelector(store => store.match)
  const data = useMemo(() => db, [db])
  const dispatch = useDispatch();
  const [activeId, setActiveID] = useState(-1)

  const selectItem = useCallback((itemId) => {
    setActiveID(itemId)
  }, [ setActiveID ])

  const deleteItem = useCallback((itemId) => {
    const confirm = window.confirm('are you sure ?')
    if (confirm) {
        dispatch({ type: 'DELETE_ITEM', payload: itemId })
    }
  }, [ dispatch ])

  const filtering = data.filter (
    el => Object.keys(el).find (
      key => typeof(el[key]) === 'string') ? 
        el['title'].toLowerCase().indexOf(match.toLowerCase()) !== -1 
      : null)

  console.log(db)

  return (
    <>
      <div className={classes.ListItem} >
        {filtering.length > 0 ?
          filtering.map(el => <Item key={el.id} 
            item={el} 
            activeId={activeId} 
            selectItem={selectItem} 
            deleteItem={deleteItem} 
          />
          )
        : <p>sorry, no match found</p>}
      </div>
    </>
  )
}

export default React.memo(ItemList)