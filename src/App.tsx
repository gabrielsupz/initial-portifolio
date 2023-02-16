import React from 'react'
import { CharacterBox } from './components/CharacterBox'
import { Header } from './components/Header'
import { Traits } from './components/Traits'

export function App() {
  return (
    <div>
      <Header />
      <CharacterBox />
      <Traits />
    </div>
  )
}
