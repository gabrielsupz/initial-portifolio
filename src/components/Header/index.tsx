import * as S from './style'
import React from 'react'
import { useCharacter } from '../../Contexts/Context'

export function Header() {
  const { items, setItems } = useCharacter()
  return <S.Title>Player Profile and Portfolio </S.Title>
}
