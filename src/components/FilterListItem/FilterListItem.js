import React, { useMemo, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import classes from './FilterListItem.module.scss'

const FilterListItem = () => {
  const matchSelector =  useSelector(store => store.match)
  const match = useMemo(() => matchSelector, [matchSelector])
  const dispatch = useDispatch();

  const onChange = useCallback(e => dispatch({ type: 'SET_MATCH', payload: e.target.value }), [ dispatch ])

  const onClick = useCallback(() => dispatch({ type: 'SET_MATCH', payload: '' }), [ dispatch ])


  return (
    <div className={classes.FindItem} >
      <label>serch: </label>
      <input type='text' 
        placeholder='please use lower keys' 
        value={match} 
        onChange={onChange}
      /> 
      <button onClick={onClick} >X</button> 
    </div>
  )
}

export default React.memo(FilterListItem)
