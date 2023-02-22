import { useCharacter } from '../../Contexts/Context'
import * as S from './style'
import book from '../../assets/book.svg'

export function Stats() {
  const { items, setItems } = useCharacter()

  return (
    <S.Stats>
      <ul>
        <li>
          {' '}
          <h2 className="name">Gabriel Suptitz</h2>
        </li>
        <li>
          <img src="src\assets\coração.svg" alt="icone de coração" />
          <div>
            <S.TagAndNumber>
              {' '}
              <h3>HP</h3> <h3>100/100</h3>
            </S.TagAndNumber>
            <S.HPBar></S.HPBar>
          </div>
        </li>
        <li>
          <img src="src\assets\stamina.svg" alt="icone de stamina" />
          <div>
            <S.TagAndNumber>
              {' '}
              <h3>STA</h3> <h3>150/150</h3>
            </S.TagAndNumber>
            <S.STABar></S.STABar>
          </div>
        </li>
        <li>
          <img src="src\assets\brain.svg" alt="icone de cerebro" />
          <div>
            <S.TagAndNumber>
              {' '}
              <h3>INT</h3> <h3> 67</h3>
            </S.TagAndNumber>
            <S.INTBar>
              <h3>xp</h3>
            </S.INTBar>
          </div>
        </li>

        <li>
          <img src="src\assets\class.svg" alt="icone de livro fechado" />
          <div>
            <h3 className="class">Classe:</h3> <p>Developer </p>{' '}
          </div>
        </li>
        <li>
          <img src={book} alt="icone de livro aberto" />
          <div>
            <p>Junior Developer</p>
            <S.DEVBar>
              <h3>xp</h3>
            </S.DEVBar>
          </div>
        </li>
      </ul>
    </S.Stats>
  )
}
