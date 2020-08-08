import React, { Fragment, useContext } from 'react'
import { PostsContext } from '../Hooks/PostsContext'

export default () => {
  const [ state ] = useContext(PostsContext);
  console.log(state)

  return (
    <Fragment>
      <h3>Posts component</h3>
    </Fragment>
  )
}
