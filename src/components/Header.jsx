import { useEffect } from 'react';
import useFetch from "../hooks/useFetch";

function Header(props) {
  const { id } = props

  return (
    <>
      Header {id}
    </>
  )
}

export default Header