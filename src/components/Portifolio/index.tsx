import * as S from './style'
import React, { useEffect } from 'react'
import { CharacterBox } from '../CharacterBox'
import { Header } from '../Header'
import { Technologies } from '../Technologies'
import { Traits } from '../Traits'
import { Skills } from '../Skills'
import { Affinitys } from '../Affinity'
import { useCharacter } from '../../Contexts/Context'
import dragon from '../../assets/dragon.gif'
import TypeIt from 'typeit-react'

export function Portifolio() {
  const { items } = useCharacter()

  return (
    <S.Portifolio>
      <main>
        <section id="presentation">
          <div className="header">
            <Header />
          </div>
          <img id="dragon" src={dragon} alt="" />
          <p>
            {/* <span>
              Bem vindo ao portifólio, heróis, desafios e aventuras lhe
              aguardam. Não estou falando de um mundo de fantasia, mas da rotina
              de um DEV.
            </span> */}
            <TypeIt>
              Bem vindo ao portifólio, heróis, desafios e aventuras lhe
              aguardam. Não estou falando de um mundo de fantasia, mas da rotina
              de um DEV.
            </TypeIt>
          </p>
        </section>
        <section id="devInfo">
          <CharacterBox />
          <div className="TraitsAndTechs">
            {' '}
            <Traits />
            <Technologies />
          </div>{' '}
          <div className="SkillsAndAffinitys">
            {' '}
            <Skills />
            <Affinitys />
          </div>
        </section>
      </main>
    </S.Portifolio>
  )
}
