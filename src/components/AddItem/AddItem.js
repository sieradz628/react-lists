import React, { useState, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import classes from './AddItem.module.scss'

const AddItem = () => {
  const dispatch = useDispatch();
  const dbLength =  useSelector(store => store.db.length)
  const [item, setItem] = useState({ url:'', title:'' })
  const [addItemError, setAddItemError] = useState('')

  const handleOnChange = useCallback((e) => {
      const itemTemp = { ...item }
      Object.keys(itemTemp).map((key) => {
        if (key === e.target.id) {
          return itemTemp[key] = e.target.value
        } 
        return null
      })
      setItem(itemTemp)
    }, [ item ])

  const addItem = useCallback(() => {
    if (!item.url && !item.title) 
      return setAddItemError('Please enter at least url or title')
    if (item.url && !item.url.match(/https?:[^)''"]+\.(?:jpg|jpeg|gif|png)(?![a-z/])/g)) 
      return setAddItemError('Please provide image url with .jpg, .jpeg, .gif or .png')

    dispatch({ type: 'ADD_ITEM', payload: { id: dbLength+1, title: item.title, url: item.url } })
    setItem({ url:'', title:'' })
    setAddItemError(false)
  }, [ dispatch, item.url, item.title, dbLength])

  return (
    <div className={classes.AddItem} >
      <div className={classes.Element} >
        <label>image url: </label>
        <input type='text' 
          id='url' 
          placeholder='https://picsum.photos/250/120.jpg' 
          value={item.url} 
          onChange={handleOnChange}
        />
      </div>
      <div className={classes.Element} >
        <label>title: </label>
        <input type='text' 
          id='title' 
          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit' 
          value={item.title} 
          onChange={handleOnChange}
        />
      </div>

      {addItemError ?
        <p className={classes.Error} >{addItemError}</p> 
      : null }

      <button onClick={addItem} >Add Item</button>
    </div>
  )
}

export default React.memo(AddItem)
