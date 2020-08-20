import React, { Fragment } from 'react';
import '../styles.css';
import Input from './Input';
import Posts from './Posts';
import Comments from './Comments';
import UserId from './UserId';
import { PostsContextProvider } from '../Hooks/PostsContext';
import { CommentsContextProvider } from '../Hooks/CommentsContext';

export default () => {
  return (
    <div className="commentsContextProvider">
      <CommentsContextProvider>
        <Comments />
        {/* ^ won't have access to posts */}
        <div className="postsContextProvider">
          <PostsContextProvider>
            <Input />
            <div className="siblings">
              <UserId />
            </div>
            <div className="siblings">
              <Posts />
            </div>
            <div className="siblings">
              <Posts listType='titles' header='(Sibling)' />
            </div>
          </PostsContextProvider>
        </div>
      </CommentsContextProvider>
    </div>
  );
}
