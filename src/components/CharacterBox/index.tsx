import * as S from './style'
import React from 'react'

export function CharacterBox() {
  return (
    <S.CharacterRoom>
      <S.CharacterName>
        <div className="profileAndInfo">
          <div className="profileContent">
            <img src="src\assets\profile.svg" alt="" />
          </div>
          <div className="info">
            {' '}
            <S.stats>
              <ul>
                <li>
                  {' '}
                  <h2 className="name">Gabriel Suptitz</h2>
                </li>
                <li>
                  <img src="src\assets\coração.svg" alt="icone de coração" />
                  <div>
                    <S.TagAndNumber>
                      {' '}
                      <h3>HP</h3> <h3>100/100</h3>
                    </S.TagAndNumber>
                    <S.HPBar></S.HPBar>
                  </div>
                </li>
                <li>
                  <img src="src\assets\stamina.svg" alt="icone de stamina" />
                  <div>
                    <S.TagAndNumber>
                      {' '}
                      <h3>STA</h3> <h3>150/150</h3>
                    </S.TagAndNumber>
                    <S.STABar></S.STABar>
                  </div>
                </li>
                <li>
                  <img src="src\assets\brain.svg" alt="icone de cerebro" />
                  <div>
                    <S.TagAndNumber>
                      {' '}
                      <h3>INT</h3> <h3> 67</h3>
                    </S.TagAndNumber>
                    <S.INTBar>
                      <h3>xp</h3>
                    </S.INTBar>
                  </div>
                </li>

                <li>
                  <img
                    src="src\assets\class.svg"
                    alt="icone de livro fechado"
                  />
                  <div>
                    <h3 className="class">Class:</h3> <p>Developer </p>{' '}
                  </div>
                </li>
                <li>
                  <img src="src\assets\book.svg" alt="icone de livro aberto" />
                  <div>
                    <p>Junior Developer</p>
                    <S.DEVBar>
                      <h3>xp</h3>
                    </S.DEVBar>
                  </div>
                </li>
              </ul>
            </S.stats>
            <S.BoxItems>
              <img src="src\assets\book.svg" alt="" />
              <img src="src\assets\book.svg" alt="" />
              <img src="src\assets\book.svg" alt="" />
              <img src="src\assets\book.svg" alt="" />
            </S.BoxItems>
          </div>{' '}
        </div>
      </S.CharacterName>
      <S.Phrases>
        <p>Olá! Seja bem-vindo a meu portifólio! Espero que goste!</p>
      </S.Phrases>
    </S.CharacterRoom>
  )
}
