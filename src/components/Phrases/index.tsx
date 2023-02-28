import { useCharacter } from '../../Contexts/Context'
import * as S from './style'

export function Phrases() {
  const { items, setItems } = useCharacter()

  if (items === 'Standard') {
    return (
      <S.Phrases>
        <p>Olá! Parece um ótimo dia para colocar a mão no código não acha?</p>
      </S.Phrases>
    )
  }
  if (items === 'Coffe') {
    return (
      <S.Phrases>
        <p>Ahaha! Agora sim! Modo turbo!</p>
      </S.Phrases>
    )
  }
  if (items === 'Contract') {
    return (
      <S.Phrases>
        <p>
          Um contrato? Desde que não queira minha alma , o resto podemos
          negociar!{' '}
        </p>
      </S.Phrases>
    )
  }
  if (items === 'Game') {
    return (
      <S.Phrases>
        <p>
          Não posso! Minhas noites de sono... Tanto faz hora de dominar o mundo
          uhaha!
        </p>
      </S.Phrases>
    )
  }
  if (items === 'Unknown') {
    return (
      <S.Phrases>
        <p>Olá! Parece um ótimo </p>
        <p>dia para colocar a mão no código não acha?</p>
      </S.Phrases>
    )
  }

  return (
    <S.Phrases>
      <p>Olá! Parece um ótimo </p>
      <p>dia para colocar a mão no código não acha?</p>
    </S.Phrases>
  )
}
