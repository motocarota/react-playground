import useFetch from "../hooks/useFetch";

function Sidebar(props) {
  const {
    id, setId,
  } = props
  const {
    loading, error, data,
  } = useFetch('users');

  return (
    <>
      {loading && <div>Wait a moment please...</div>}
      {error && <div>There is a problem fetching the data - {error}</div>}

      <div>
        {data && data.map(
          ({ id, name = "?" }) => (
            <div key={id} onClick={() => setId(id)}>
              [{id}] {name}
            </div>
          )
        )}
      </div>
    </>
  )
}

export default Sidebar