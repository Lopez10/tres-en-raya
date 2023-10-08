import { Route, Routes } from 'react-router-dom'
import './App.css'
import { UsernameForm } from './components/UsernameForm'
import { Ranking } from './components/Ranking'

function App() {
  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <Routes>
        <Route path='/' element={<UsernameForm />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/game' element={<div>Game</div>} />
      </Routes>
    </main>
  )
}

export default App
