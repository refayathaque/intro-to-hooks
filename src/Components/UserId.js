import React, { Fragment, useContext } from 'react'
import { PostsContext } from '../Hooks/PostsContext'

export default ({listType='body', header='Posts'}) => {
  const [ state ] = useContext(PostsContext);

  return (
    <Fragment>
      <h3>userId component</h3>
      <h4>userId: {state.request ? <span>{state.request}</span>: <span>No data requested</span>}</h4>
    </Fragment>
  )
}
