import React, { useReducer, createContext } from "react";

export const PostsContext = createContext([ {}, () => {} ]);

const reducer = (state, action) => {
  console.log(PostsContext)
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false, request: action.payload };
        // destructuring statement keeps state object immutable, state is never directly mutated to maintain best practice
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, isError: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true, request: action.payload };
    default:
      throw new Error();
  }
};

const initialState = { isLoading: false, isError: false, request: null }

export const PostsContextProvider = props => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <PostsContext.Provider value={[ state, dispatch ]}>
      { props.children }
    </PostsContext.Provider>
  );
};