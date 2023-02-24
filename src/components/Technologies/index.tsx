import * as S from './style'
import TitleTechs from '../../assets/TitleTechs.svg'
import react from '../../assets/react.png'
import typescript from '../../assets/typescript.png'
import javascript from '../../assets/javaScript.png'
import firebase from '../../assets/firebase.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import styled from '../../assets/styled.png'
import reactRouter from '../../assets/react-router.svg'
import popper from '../../assets/popper.png'
import React from 'react'

export function Technologies() {
  return (
    <S.Techs>
      <img
        className="title"
        src={TitleTechs}
        alt="Título Techs referente a tecnologias"
      />

      <S.TechsBox>
        <S.Tech>
          <img src={react} alt="Imagem da logo do ReactJS" />
          <div className="teachAndLvl">
            <h2>ReactJS</h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:15</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img src={typescript} alt="Imagem da logo do Typescript" />
          <h2>Typescript</h2>
        </S.Tech>
        <S.Tech>
          <img src={javascript} alt="Imagem da logo do JavaScript" />
          <h2>Javascript</h2>
        </S.Tech>
        <S.Tech>
          <img src={firebase} alt="Imagem da logo do firebase" />
          <h2>Firebase</h2>
        </S.Tech>
        <S.Tech>
          <img src={html} alt="Imagem da logo do HTML" />
          <h2>HTML</h2>
        </S.Tech>
        <S.Tech>
          <img src={css} alt="Imagem da logo do CSS" />
          <h2>CSS</h2>
        </S.Tech>
        <S.Tech>
          <img
            src={styled}
            alt="Imagem da logo da biblioteca Styled-Components"
          />
          <h2>Styled-Components</h2>
        </S.Tech>
        <S.Tech>
          <img
            src={reactRouter}
            alt="Imagem da logo da biblioteca React Router"
          />
          <h2>React Router</h2>
        </S.Tech>

        <S.Tech>
          <img src={popper} alt="Imagem da logo do React Popper" />
          <h2>React Popper</h2>
        </S.Tech>
      </S.TechsBox>
    </S.Techs>
  )
}
