import { useState, useEffect, useContext } from 'react'
import { PostsContext } from './PostsContext'

export default () => {
  const [ userId, setUserId ] = useState(null)
  const [ state, dispatch ] = useContext(PostsContext);

  useEffect(() => {
    let didCancel = false
    // boolean to let data fetching logic know about the state (mounted/unmounted) of component, if component unmounted then boolean will be true which will prevent setting thee component state after data fetching asynchronously resolved eventually

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT', payload: userId });
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        if (data.ok) {
          let json = await data.json();
          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: json });
          }
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE', payload: userId });
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [ userId ]);

  return [ setUserId ]
}
