import * as S from './style'
import { useEffect } from 'react'

import { Header } from '../Header'

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
