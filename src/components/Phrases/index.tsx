import { useCharacter } from '../../Contexts/Context'
import * as S from './style'
import TypeIt from 'typeit-react'
import { useEffect } from 'react'

export function Phrases() {
  const { items, setItems } = useCharacter()

  if (items === 'Standard') {
    return (
      <S.Phrases>
        <p>
          <TypeIt>
            Olá! Parece um ótimo dia para colocar a mão no código não acha?
          </TypeIt>
        </p>
      </S.Phrases>
    )
  }

  if (items === 'Contract') {
    return (
      <S.Phrases>
        <p>
          <TypeIt>
            Um contrato? Desde que não queira minha alma, o resto podemos
            negociar!
          </TypeIt>
        </p>
      </S.Phrases>
    )
  }
  if (items === 'Game') {
    return (
      <S.Phrases>
        <p>
          <TypeIt>
            {' '}
            Não posso! Minhas noites de sono... Tanto faz hora de dominar o
            mundo uhaha!
          </TypeIt>
        </p>
      </S.Phrases>
    )
  }
  if (items === 'Unknown') {
    return (
      <S.Phrases>
        <p>
          <TypeIt>Hmm... oque será que vem ai?</TypeIt>
        </p>
      </S.Phrases>
    )
  }
  if (items === 'Coffee') {
    return (
      <S.Phrases>
        <TypeIt>
          <p>Ahaha! Agora sim! Modo turbo!</p>
        </TypeIt>
      </S.Phrases>
    )
  }
  return (
    <S.Phrases>
      <p>
        <TypeIt>
          Olá! Parece um ótimo dia para colocar a mão no código não acha?
        </TypeIt>{' '}
      </p>
    </S.Phrases>
  )
}
