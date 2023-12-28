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
import { SocialLinks } from '../SocialLinks'
import { PortfolioRules } from '../PortfolioRules'

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
    const intervalId = setInterval(() => toggleBackground(), 25000)

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
            <TypeIt>
              Bem vindo ao Portfólio, heróis, desafios e aventuras lhe aguardam,
              afinal é isto que compõem a história de qualquer pessoa incluindo
              de um Dev!
            </TypeIt>
          </p>
        </section>
        <PortfolioRules />
        <DevInfo />

        <DragonRoom />
        <KnightRoom />
        <div>
          <VoltageButton />
          <SocialLinks />
        </div>
      </main>
    </S.Portifolio>
  )
}
