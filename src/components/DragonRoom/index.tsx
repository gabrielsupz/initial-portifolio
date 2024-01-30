import * as S from './style'
import React, { useEffect } from 'react'

import dragon from '../../assets/dragon.gif'
import TypeIt from 'typeit-react'
import { InfoRoom } from '../InfoRoom'
import { InfoRoomProps } from '../InfoRoom'

export function DragonRoom() {
  const nightFury: InfoRoomProps = {
    name: 'Night Fury (Não nomeado)',
    lvl: '??',
    personality: 'Docile',
    history:
      'Um dragão misterioso que chegou no portifólio e o tornou seu abrigo, parece estranhamente docil, mas durante a noite é possivel ouvir seus rugidos e clarões roxos no horizonte.'
  }
  return (
    <>
      <S.DragonRoom>
        <div id="room">
          <>
            <h2>Dragon's Room</h2>

            <img src={dragon} alt="Gif de um dragão furia da noite" />
          </>

          <InfoRoom character={nightFury} key={1} />
        </div>
      </S.DragonRoom>
    </>
  )
}
