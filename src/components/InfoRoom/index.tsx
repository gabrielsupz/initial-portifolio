import * as S from './style'

export interface InfoRoomProps {
  name: string
  lvl: string | number
  history: string
  personality: string
}

export function InfoRoom({ character }: { character: InfoRoomProps }) {
  return (
    <S.InfoRoomBox id="infoRoom">
      <h3>Info</h3>
      <h4>
        <strong>Name:</strong> {character.name}{' '}
      </h4>
      <h4>
        <strong>Lvl:</strong> {character.lvl}
      </h4>
      <h4>
        <strong>Personality:</strong> {character.personality}{' '}
      </h4>
      <div>
        <h3>
          <strong>História</strong>
        </h3>
        <p>{character.history}</p>
      </div>
    </S.InfoRoomBox>
  )
}
