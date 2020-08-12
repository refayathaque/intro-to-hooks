import React, { Fragment } from 'react';
import Input from './Input';
import Posts from './Posts';
import Comments from './Comments';
import UserId from './UserId';
import { PostsContextProvider } from '../Hooks/PostsContext';
import { CommentsContextProvider } from '../Hooks/CommentsContext';

export default () => {
  return (
    <Fragment>
      <CommentsContextProvider>
        <Comments />
        {/* ^ won't access to posts */}
        <PostsContextProvider>
          <Input />
          <UserId />
          <Posts />
          <Posts listType='titles' header='(Sibling)' />
        </PostsContextProvider>
      </CommentsContextProvider>
    </Fragment>
  );
}
