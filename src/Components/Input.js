import React, { Fragment } from 'react'
import useFetchPosts from '../Hooks/useFetchPosts';

export default () => {
  const [ setUserId ] = useFetchPosts();

  const renderDropdownValues = () => {
    const userIds = [ 'None selected', 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 ];
    return userIds.map((userId, index) =>
      <option key={ index } value={ userId }>{ userId }</option>
    );
  }

  return (
    <Fragment>
      <h3>Input component</h3>
      <label>Pick a userId </label>
      <select onChange={({ target }) => setUserId(target.value)}>
        { renderDropdownValues() }
      </select>
    </Fragment>
  )
}
