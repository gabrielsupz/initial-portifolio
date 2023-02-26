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
            <h2 className="notranslate" translate="no">
              ReactJS
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:35</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img src={typescript} alt="Imagem da logo do Typescript" />

          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              Typescript
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:27</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img src={javascript} alt="Imagem da logo do JavaScript" />

          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              Javascript
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:40</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img src={firebase} alt="Imagem da logo do firebase" />

          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              Firebase
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:17</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img src={html} alt="Imagem da logo do HTML" />

          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              HTML
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:55</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img src={css} alt="Imagem da logo do CSS" />

          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              CSS
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:50</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img
            src={styled}
            alt="Imagem da logo da biblioteca Styled-Components"
          />

          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              Styled-Components
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:34</strong>
            </div>
          </div>
        </S.Tech>
        <S.Tech>
          <img
            src={reactRouter}
            alt="Imagem da logo da biblioteca React Router"
          />
          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              React Router
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:20</strong>
            </div>
          </div>
        </S.Tech>

        <S.Tech>
          <img src={popper} alt="Imagem da logo do React Popper" />

          <div className="teachAndLvl">
            <h2 className="notranslate" translate="no">
              React Popper
            </h2>
            <div className="xpAndLvl">
              <S.XPBar>xp</S.XPBar>

              <strong>Lv:15</strong>
            </div>
          </div>
        </S.Tech>
      </S.TechsBox>
    </S.Techs>
  )
}
