import React from 'react'
import { Portifolio } from './components/Portifolio'
import { CharacterProvider } from './Contexts/Context'

export function App() {
  return (
    <CharacterProvider>
      {' '}
      <Portifolio />
    </CharacterProvider>
  )
}
