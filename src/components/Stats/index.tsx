import { useCharacter } from '../../Contexts/Context'
import * as S from './style'
import book from '../../assets/book.svg'
import coffee from '../../assets/coffee.png'

export function Stats() {
  const { items, setItems } = useCharacter()

  if (items === 'Standard') {
    return (
      <S.Stats>
        <ul>
          <li>
            <h2 className="name">Gabriel Suptitz</h2>
          </li>
          <li>
            <img src="src\assets\coração.svg" alt="icone de coração" />
            <div>
              <S.TagAndNumber>
                <h3>HP</h3>
                <h3>100/100</h3>
              </S.TagAndNumber>
              <S.HPBar></S.HPBar>
            </div>
          </li>
          <li>
            <img src="src\assets\stamina.svg" alt="icone de stamina" />
            <div>
              <S.TagAndNumber>
                <h3>STA</h3>
                <h3>150/150</h3>
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
              <p>Jr. Devoloper</p>
              <S.DEVBar>
                <h3>xp</h3>
              </S.DEVBar>
            </div>
          </li>
        </ul>
      </S.Stats>
    )
  }
  if (items === 'Coffe') {
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
                <h3>HP</h3>{' '}
                <h3>
                  <strong>150</strong>/100
                </h3>
              </S.TagAndNumber>
              <S.HPBar className="buff"></S.HPBar>
            </div>
          </li>
          <li>
            <img src="src\assets\stamina.svg" alt="icone de stamina" />
            <div>
              <S.TagAndNumber>
                {' '}
                <h3>STA</h3>{' '}
                <h3>
                  <strong>300</strong>/150
                </h3>
              </S.TagAndNumber>
              <S.STABar className="buff"></S.STABar>
            </div>
          </li>
          <li>
            <img src="src\assets\brain.svg" alt="icone de cerebro" />
            <div>
              <S.TagAndNumber>
                {' '}
                <h3>INT</h3>{' '}
                <h3>
                  {' '}
                  <strong>80</strong>{' '}
                </h3>
              </S.TagAndNumber>
              <S.INTBar className="buff">
                <h3>xp</h3>
              </S.INTBar>
            </div>
          </li>

          <li>
            <img src="src\assets\class.svg" alt="icone de livro fechado" />
            <div>
              <h3 className="class">Classe:</h3>{' '}
              <p>
                Developer <img src={coffee} alt="" />
              </p>{' '}
            </div>
          </li>
          <li>
            <img src={book} alt="icone de livro aberto" />
            <div>
              <p>Jr. Devoloper</p>
              <S.DEVBar>
                <h3>xp</h3>
              </S.DEVBar>
            </div>
          </li>
        </ul>
      </S.Stats>
    )
  }

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
            <p>Jr. Devoloper</p>
            <S.DEVBar>
              <h3>xp</h3>
            </S.DEVBar>
          </div>
        </li>
      </ul>
    </S.Stats>
  )
}
