import React, { Fragment } from 'react'
import useFetchPosts from '../Hooks/useFetchPosts';
import useFetchComments from '../Hooks/useFetchComments';

export default () => {
  const [ setUserIdPosts ] = useFetchPosts();
  const [ setPostIdComments ] = useFetchComments();

  const setUserIdInCustomHooks = (id) => {
    setUserIdPosts(id)
    setPostIdComments(id)
  }

  const renderDropdownValues = () => {
    const ids = [ 'None selected', 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 ];
    return ids.map((id, index) =>
      <option key={ index } value={ id }>{ id }</option>
    );
  }

  return (
    <Fragment>
      <h3>Input component</h3>
      <label>Select userId (posts) / postId (comments) </label>
      <select onChange={({ target }) => setUserIdInCustomHooks(target.value)}>
        { renderDropdownValues() }
      </select>
    </Fragment>
  )
}