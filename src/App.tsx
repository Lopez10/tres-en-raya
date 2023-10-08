import { Route, Routes } from 'react-router-dom'
import './App.css'
import { UsernameForm } from './pages/UsernameForm'
import { Ranking } from './components/Ranking'
import { Game } from './pages/Game'

function App() {
  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <Routes>
        <Route path='/' element={<UsernameForm />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </main>
  )
}

export default App
