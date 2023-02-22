import React, { ReactNode, useContext, useState } from 'react'

// Criando valor inicial

type ItemsProps = 'Standard' | 'Coffe' | 'Game' | 'Contract' | 'Unknown'

type UserCOntextType = {
  items: ItemsProps
  setItems: (value: ItemsProps) => void
}

const item: ItemsProps = 'Standard'

const initialValue = {
  items: item,
  setItems: () => {}
}
export const CharacterContext =
  React.createContext<UserCOntextType>(initialValue)

interface IProps {
  children: ReactNode
}

export const useCharacter = () => {
  const context = useContext(CharacterContext)
  return context
}
export const CharacterProvider = ({ children }: IProps) => {
  const [items, setItems] = useState<ItemsProps>('Coffe')

  return (
    <CharacterContext.Provider value={{ items, setItems }}>
      {children}
    </CharacterContext.Provider>
  )
}
