import * as S from './style'
import React, { useEffect } from 'react'
import heart from '../../assets/heartDev.png'
import { Stats } from '../Stats'
import { Phrases } from '../Phrases'
import { ItemsProps, useCharacter } from '../../Contexts/Context'

export function CharacterBox() {
  console.log('No futuro terminarei está aplicação hehehe')
  const { items, setItems } = useCharacter()

  return (
    <S.CharacterRoom>
      <S.CharacterName>
        <div className="profileAndInfo">
          <div className="profileContent">
            <img src="src\assets\profile.svg" alt="" />
          </div>
          <div className="info">
            <Stats />
            <S.BoxItems>
              <button onClick={() => setItems('Coffee')}>
                <img src={heart} alt="" />
              </button>
              <button onClick={() => setItems('Contract')}>
                <img src={heart} alt="" />
              </button>
              <button onClick={() => setItems('Game')}>
                <img src={heart} alt="" />
              </button>
              <button onClick={() => setItems('Unknown')}>
                <img src={heart} alt="" />
              </button>
            </S.BoxItems>
          </div>{' '}
        </div>
      </S.CharacterName>

      <Phrases />
    </S.CharacterRoom>
  )
}
