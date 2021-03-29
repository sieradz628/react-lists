import classes from './MainItem.module.scss'

const MainItem = ({ item, activeId, handleClick, deleteItem }) => {
  const { id, title, url } = item

  return (
    <div className={id === activeId ?
        [classes.Item, classes.activeItem].join(' ')
      : classes.Item}
      onClick={() => handleClick(id)} >
      <img className={classes.image} 
        src={url}  
        alt={title}
      />
      <p className={classes.title} >{title}</p>
      <span className={classes.delete}
        onClick={() => deleteItem(id)} >X</span>
    </div>
  )
}

export default MainItem
