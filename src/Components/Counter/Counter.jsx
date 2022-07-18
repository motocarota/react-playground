import classes from './Counter.module.css'

function Counter(props) {
  const { count, setCount } = props

  return (
    <div className={classes.card}>
      counter 1
      <button onClick={() => setCount(count + 1)}>
        new count is {count}
      </button>
    </div>
  )
}

export default Counter
