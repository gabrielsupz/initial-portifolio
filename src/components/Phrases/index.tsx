import { useCharacter } from '../../Contexts/Context'
import * as S from './style'
import TypeIt from 'typeit-react'

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
  if (items === 'Coffe') {
    return (
      <S.Phrases>
        <TypeIt>
          <p>Ahaha! Agora sim! Modo turbo!</p>
        </TypeIt>
      </S.Phrases>
    )
  }
  if (items === 'Contract') {
    return (
      <S.Phrases>
        <p>
          <TypeIt>
            Um contrato? Desde que não queira minha alma , o resto podemos
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
          <TypeIt>O mundo é meu hahaha!</TypeIt>
        </p>
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
