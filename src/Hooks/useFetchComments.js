import { useContext, useEffect, useState } from 'react'
import { CommentsContext } from './CommentsContext'

export default () => {
  const [ state, dispatch ] = useContext(CommentsContext);
  const [ postId, setPostId ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT', payload: postId });
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        if (data.ok) {
          let json = await data.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: json });
        }
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: postId });
      }
    }

    fetchData();
  }, [ postId ]);

  return [ setPostId ]
}
