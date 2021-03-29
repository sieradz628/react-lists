import classes from './AddItem.module.scss'

const AddItem = ({ item, addItem, handleOnChange, addItemError }) => {
  return (
    <div className={classes.AddItem} >
      <div className={classes.Element} >
        <label>image url: </label>
        <input type='text' 
          id='url' 
          placeholder='https://picsum.photos/250/120' 
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

      <button onClick={() => addItem()} >Add Item</button>
    </div>
  )
}

export default AddItem
