import React, { Fragment } from 'react'
import useFetchPosts from '../Hooks/useFetchPosts';

export default () => {
  const [ setUserId ] = useFetchPosts();

  const renderDropdownValues = () => {
    const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
    return userIds.map((userId) =>
      <option value={userId}>{userId}</option>
    );
  }

  return (
    <Fragment>
      <h3>Input component</h3>
      <label>Pick a userId </label>
      <select onChange={(e) => console.log(e.target.value)}>
        {renderDropdownValues()}
      </select>
    </Fragment>
  )
}
