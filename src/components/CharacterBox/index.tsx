import * as S from './style'
import React from 'react'

export function CharacterBox() {
  return (
    <S.CharacterRoom>
      <div className="profileAndInfo">
        <div className="profileContent">
          <img src="src\assets\profile.svg" alt="" />
        </div>
        <div className="info">
          <S.Items></S.Items>
          <S.stats></S.stats>
        </div>{' '}
      </div>
      <S.Phrases>
        <p>Olá! Seja bem vindo a meu perfil e portifólio!</p>
      </S.Phrases>
    </S.CharacterRoom>
  )
}
