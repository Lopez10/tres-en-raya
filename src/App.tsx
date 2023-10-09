import { Route, Routes } from 'react-router-dom'
import './App.css'
import { UsernameForm } from './pages/UsernameForm'
import { Ranking } from './pages/Ranking'
import { Game } from './pages/Game'
import { BackButton } from './components/BackButton'

function App() {
  return (
    <main className='board'>
      <BackButton />
      <h1 className='title'>Tres en raya</h1>
      <div className='content'>
        <Routes>
          <Route path='/' element={<UsernameForm />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
