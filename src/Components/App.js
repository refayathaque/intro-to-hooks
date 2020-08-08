import React, { Fragment } from 'react';
import Input from './Input';
import Posts from './Posts';
import PostsSibling from './PostsSibling';
import { PostsContextProvider } from '../Hooks/PostsContext';

export default () => {
  return (
    <Fragment>
      <PostsContextProvider>
        <Input />
        <Posts />
        <PostsSibling />
      </PostsContextProvider>
    </Fragment>
  );
}
