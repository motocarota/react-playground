import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import style from './App.module.css'

function App() {
  const [id, setId] = useState(null)

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Header id={id} />
      </div>
      <div className={style.sidebar}>
        <Sidebar id={id} setId={setId} />
      </div>
      <div className={style.content}>
        <Content id={id} />
      </div>
    </div>
  )
}

export default App
