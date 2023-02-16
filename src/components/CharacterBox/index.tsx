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
          {' '}
          <S.stats>
            <ul>
              <li>
                <img src="src\assets\coração.svg" alt="icone de coração" />
                <img
                  className="bar"
                  src="src\assets\hp.svg"
                  alt="icone de stamina"
                />
              </li>

              <li>
                <img src="src\assets\brain.svg" alt="icone de cerebro" />
              </li>
              <li>
                <img src="src\assets\stamina.svg" alt="icone de stamina" />
              </li>
              <li>
                <img src="src\assets\class.svg" alt="icone de livro fechado" />
                <p>Developer </p>
              </li>
              <li>
                <img src="src\assets\book.svg" alt="icone de livro aberto" />
                <p>Junior Developer</p>
              </li>
            </ul>
          </S.stats>
          <S.BoxItems>
            {' '}
            <S.Items>
              <img src="src\assets\book.svg" alt="" />
              <img src="src\assets\book.svg" alt="" />
              <img src="src\assets\book.svg" alt="" />
              <img src="src\assets\book.svg" alt="" />
            </S.Items>
            <img
              className="item"
              src="src\assets\inventory.svg"
              alt="Imagem de inventário"
            />{' '}
          </S.BoxItems>
        </div>{' '}
      </div>
      <S.Phrases>
        <p>Olá! Seja bem vindo a meu portifólio! Espero que goste!</p>
      </S.Phrases>
    </S.CharacterRoom>
  )
}
