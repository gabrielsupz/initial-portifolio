import * as S from './style'

export function CharacterBox() {
  return (
    <S.CharacterRoom>
      {' '}
      <div className="profileContent">
        {' '}
        <img src="src\assets\profile.svg" alt="" />
      </div>
      <div className="info">
        {' '}
        <S.Phrases>
          <p>Olá! Seja bem vindo a meu perfil e portifólio!</p>
        </S.Phrases>
        <S.stats></S.stats>
        <S.Items></S.Items>
      </div>
    </S.CharacterRoom>
  )
}
