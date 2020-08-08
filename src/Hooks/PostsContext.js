import React, { useReducer, createContext } from "react";

export const PostsContext = createContext();

const initialState = { isLoading: false, isError: false, request: null }

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false, request: action.payload };
        // the destructuring statement keeps the state object immutable, i.e., the state is never directly mutated - to maintain best practice
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, isError: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true, request: action.payload };
    default:
      throw new Error();
  }
};

export const PostsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostsContext.Provider value={[state, dispatch]}>
      {props.children}
    </PostsContext.Provider>
  );
};