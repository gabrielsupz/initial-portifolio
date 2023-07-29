import * as S from './style'
import React, { useEffect, useState } from 'react'
import { CharacterBox } from '../CharacterBox'
import { Header } from '../Header'
import { Technologies } from '../Technologies'
import { Traits } from '../Traits'
import { Skills } from '../Skills'
import { Affinitys } from '../Affinity'
import { useCharacter } from '../../Contexts/Context'
import dragon from '../../assets/dragon.gif'
import TypeIt from 'typeit-react'
import { DragonRoom } from '../DragonRoom'
import { KnightRoom } from '../KnightRoom'
import { DevInfo } from '../DevInfo'
import { VoltageButton } from '../VoltageButton'

export function Portifolio() {
  function toggleBackground() {
    var presentation = document.querySelector('section#presentation')

    if (!presentation?.classList.contains('active')) {
      presentation?.classList.add('active')
    } else {
      presentation.classList.remove('active')
    }
  }
  useEffect(() => {
    const intervalId = setInterval(() => toggleBackground(), 20000)

    return () => clearInterval(intervalId)
  })

  return (
    <S.Portifolio>
      <main>
        <section id="presentation">
          <div className="header">
            <Header />
          </div>

          <p id="phrasePresentation">
            {/* <span>
              Bem vindo ao portifólio, heróis, desafios e aventuras lhe
              aguardam. Não estou falando de um mundo de fantasia, mas da rotina
              de um DEV.
            </span> */}
            <TypeIt>
              Bem vindo ao portifólio, heróis, desafios e aventuras lhe
              aguardam. Não estou falando de um outro mundo, mas da realidade de
              um DEV.
            </TypeIt>
          </p>
        </section>
        <DevInfo />

        <DragonRoom />
        <KnightRoom />
        <VoltageButton />
      </main>
    </S.Portifolio>
  )
}
