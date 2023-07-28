import { Affinitys } from '../Affinity'
import { CharacterBox } from '../CharacterBox'
import { Skills } from '../Skills'
import { Technologies } from '../Technologies'
import { Traits } from '../Traits'
import * as S from './style'

import TypeIt from 'typeit-react'

export function DevInfo() {
  return (
    <S.DevInfo>
      <CharacterBox />

      <div className="info">
        {' '}
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
      </div>
    </S.DevInfo>
  )
}
