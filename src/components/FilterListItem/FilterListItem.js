import classes from './FilterListItem.module.scss'

const FilterListItem = ({ match, setMatch }) => {
  return (
    <div className={classes.FindItem} >
      <label>serch: </label>
      <input type='text' 
        placeholder='please use lower keys' 
        value={match} 
        onChange={e => setMatch(e.target.value)}
      /> 
      <button onClick={() => setMatch('')} >X</button> 
    </div>
  )
}

export default FilterListItem
