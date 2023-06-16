import React, { ReactNode, useContext, useState } from 'react'

// Criando valor inicial

export type ItensProps = 'Standard' | 'Game' | 'Coffee' | 'Contract' | 'Unknown'

type UserContextType = {
  itens: ItensProps
  setItens: (value: ItensProps) => void
}

const item: ItensProps = 'Standard'

const initialValue = {
  itens: item,
  setItens: () => {}
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
  const [itens, setItens] = useState<ItensProps>('Standard')

  return (
    <CharacterContext.Provider value={{ itens, setItens }}>
      {children}
    </CharacterContext.Provider>
  )
}
