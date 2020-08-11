import { useContext, useEffect, useState } from 'react'
import { PostsContext } from './PostsContext'

export default () => {
  const [ state, dispatch ] = useContext(PostsContext);
  const [ userId, setUserId ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT', payload: userId });
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        if (data.ok) {
          let json = await data.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: json });
        }
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: userId });
      }
    }

    fetchData();
  }, [ userId ]);

  return [ setUserId ]
}
