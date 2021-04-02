import React from 'react'

import classes from './Item.module.scss'

const Item = ({ item, activeId, selectItem, deleteItem }) => {
  const { id, title, url } = item

  return (
    <div className={id === activeId ?
        [classes.Item, classes.activeItem].join(' ')
      : classes.Item}
      onClick={() => selectItem(id)} >
      <img className={classes.image} 
        src={url}  
        alt={title}
      />
      <p className={classes.title} >{title}</p>
      <span className={classes.delete}
        onClick={() =>  deleteItem(id)} >X</span>
    </div>
  )
}

export default Item
