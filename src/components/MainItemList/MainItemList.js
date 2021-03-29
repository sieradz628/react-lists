import React, { useState } from 'react'
import classes from './MainItemList.module.scss'

import db from '../../utils/data'

import MainItem from './MainItem'
import FilterListItem from '../FilterListItem'
import AddItem from '../AddItem'

const MainItemList = () => {
  const [data, setData] = useState(db)
  const [activeId, setActiveID] = useState(-1)
  const [match, setMatch] = useState('')
  const [item, setItem] = useState({ url:'', title:'' })
  const [addItemError, setAddItemError] = useState('')

  const handleClick = (itemId) => {
    setActiveID(itemId)
  }

  const deleteItem = (itemId) => {
    const confirm = window.confirm('are you sure ?')
    if (confirm) {
      setData(data.filter(el => el.id !== itemId))
    }
  }

  const handleOnChange = (e) => {
    const itemTemp = { ...item }
    Object.keys(itemTemp).map((key) => {
      if (key === e.target.id) {
        return itemTemp[key] = e.target.value
      } 
      return null
    })
    setItem(itemTemp)
  }

  const addItem = () => {
    if (!item.url && !item.title) 
      return setAddItemError('Please enter at least url or title')
    if (item.url && !item.url.match(/https?:[^)''"]+\.(?:jpg|jpeg|gif|png)(?![a-z/])/g)) 
      return setAddItemError('Please provide image url with .jpg, .jpeg, .gif or .png')
    setData([
      ...data, 
      { id: data.length + 1, 
      ...item }
    ])
    setItem({ url:'', title:'' })
    setAddItemError(false)

  }

  const filtering = data.filter (
    el => Object.keys(el).find (
      key => typeof(el[key]) === 'string') ? 
        el['title'].toLowerCase().indexOf(match.toLowerCase()) !== -1 
      : null)

  return (
    <>
      <AddItem item={item} 
        handleOnChange={handleOnChange} 
        addItem={addItem} 
        addItemError={addItemError}
      />
      <FilterListItem match={match} setMatch={setMatch} />
      <div className={classes.ListItem} >
          {filtering.length > 0 ?
            filtering.map(el => <MainItem key={el.id} 
              item={el} 
              activeId={activeId} 
              handleClick={handleClick} 
              deleteItem={deleteItem} 
            />
            )
          : <p>sorry, no match found</p>}
      </div>
    </>
  )
}

export default MainItemList
