import { useContext, useEffect, useState } from 'react'
import { PostsContext } from './PostsContext'

export default () => {
  const [ state, dispatch ] = useContext(PostsContext);
  const [ userId, setUserId ] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT', payload: userId });
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: userId });
      }
    }
    fetchData();
  }, [ userId ]);
  return [ setUserId ]
}
