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
        <div className="comments">
          <Comments />
        </div>
        {/* ^ won't have access to posts bc <PostsContextProvider> is not its parent  */}
        <div className="postsContextProvider">
          <PostsContextProvider>
            <Input />
            <div className="postsSiblings">
              <UserId />
            </div>
            <div className="postsSiblings">
              <Posts />
            </div>
            <div className="postsSiblings">
              <Posts listType='titles' header='(Sibling)' />
            </div>
          </PostsContextProvider>
        </div>
      </CommentsContextProvider>
    </div>
  );
}
