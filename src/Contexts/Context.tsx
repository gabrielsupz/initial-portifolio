import React, { ReactNode, useContext, useState } from 'react'

type ItemsProps = 'Coffe' | 'Game'

type UserCOntextType = {
  items: ItemsProps
  setItems: (value: ItemsProps) => void
}

const item: ItemsProps = 'Coffe'

const initialValue = {
  items: item,
  setItems: () => {}
}
export const TabsContext = React.createContext<UserCOntextType>(initialValue)

interface IProps {
  children: ReactNode
}

export const useTabs = () => {
  const context = useContext(TabsContext)
  return context
}
export const TabsProvider = ({ children }: IProps) => {
  const [items, setItems] = useState<ItemsProps>('Coffe')

  return (
    <TabsContext.Provider value={{ items, setItems }}>
      {children}
    </TabsContext.Provider>
  )
}
