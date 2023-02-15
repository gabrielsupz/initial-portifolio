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
          <S.stats>
            <ul>
              <li>
                <img src="src\assets\muscle.svg" alt="icone de musculos" />
              </li>
              <li>
                <img src="src\assets\coração.svg" alt="icone de coração" />
              </li>
              <li>
                <img src="src\assets\brain.svg" alt="icone de cerebro" />
              </li>
              <li>
                <img src="src\assets\stamina.svg" alt="icone de stamina" />
              </li>
            </ul>
          </S.stats>
        </div>{' '}
      </div>
      <S.Phrases>
        <p>Olá! Seja bem vindo a meu perfil e portifólio!</p>
      </S.Phrases>
    </S.CharacterRoom>
  )
}
