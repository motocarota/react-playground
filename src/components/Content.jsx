import { useEffect } from 'react';
import useFetch from "../hooks/useFetch";

function Content(props) {
  const { id } = props
  
  const {
    loading, error, data,
  } = useFetch(`users/${id}`);

  return (
    <>
      Selected: {id}
      {loading && <div>Wait a moment please...</div>}
      {error && <div>There is a problem fetching the data - {error}</div>}
      {data && <pre>{JSON.stringify(data, 0, 2)}</pre>}
    </>
  )
}

export default Content