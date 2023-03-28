import React, { ReactNode, useContext, useState } from 'react'

// Criando valor inicial

export type ItemsProps = 'Standard' | 'Coffee' | 'Game' | 'Contract' | 'Unknown'

type UserContextType = {
  items: ItemsProps
  setItems: (value: ItemsProps) => void
}

const item: ItemsProps = 'Standard'

const initialValue = {
  items: item,
  setItems: () => {}
}
export const CharacterContext =
  React.createContext<UserContextType>(initialValue)

interface IProps {
  children: ReactNode
}

export const useCharacter = () => {
  const context = useContext(CharacterContext)
  return context
}
export const CharacterProvider = ({ children }: IProps) => {
  const [items, setItems] = useState<ItemsProps>('Standard')

  return (
    <CharacterContext.Provider value={{ items, setItems }}>
      {children}
    </CharacterContext.Provider>
  )
}
