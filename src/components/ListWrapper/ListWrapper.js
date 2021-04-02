import React, { lazy, Suspense } from 'react'

import FilterListItem from '../FilterListItem'
import AddItem from '../AddItem'
const ItemList = lazy(() => import('./ItemList'))

const ListWrapper = () => {

  return (
    <>
      <AddItem />
      <FilterListItem />
      <Suspense fallback={<div>Loading a list of items...</div>} >
        <ItemList  />
      </Suspense>
    </>
  )
}

export default React.memo(ListWrapper)