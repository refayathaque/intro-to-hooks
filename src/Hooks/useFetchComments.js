import { useState, useEffect, useContext } from 'react'
import { CommentsContext } from './CommentsContext'

export default () => {
  const [ postId, setPostId ] = useState(null)
  const [ state, dispatch ] = useContext(CommentsContext);

  useEffect(() => {
    let didCancel = false
    // boolean to let data fetching logic know about the state (mounted/unmounted) of component, if component unmounted then boolean will be true which will prevent setting thee component state after data fetching asynchronously resolved eventually

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT', payload: postId });
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        if (data.ok) {
          let json = await data.json();
          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: json });
          }
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE', payload: postId });
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [ postId ]);

  return [ setPostId ]
}
