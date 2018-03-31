import styled, { css } from 'styled-components'

import { flexContainer, flexItem } from './tools/mixins'
import { yellow, darkGray, gray, gold } from './tools/colors'

export const TabSpacer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 -2px 8px -2px ${darkGray};
`

export const CaseStudyTab = styled.div`
  position: fixed;
  width: 100%;
  height: 0;
  background-color: #fff;
  box-shadow: 0px -2px 16px -2px ${darkGray};
  z-index: 200;

  > div {
    width: 100%;
    height: 0;
    position: relative;
  }

  span {
    ${flexContainer('center', 'flex-end', 'flex-end')}
    position: absolute;
    top: -32px;
    left: 0;
    width: 124px;
    height: 34px;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    z-index: 2;
    color: ${yellow};
    font-size: 12px;
    font-family: "museo-sans", sans-serif;
    box-shadow: 4px -4px 8px -4px ${darkGray};

    ${props => props.vmsa && css`
      left: 30%;
      @media(max-width: 880px) {
          left: 20%;
          top: -22px;
        }
    `}

    ${props => props.movie && css`
      left: 35%;
      @media(max-width: 880px) {
        left: 20%;
        top: -22px;
      }
    `}

    ${props => props.homework && css`
      left: 40%;
      @media(max-width: 880px) {
        left: 20%;
        top: -22px;
      }
    `}
  }
`

export const CaseStudySection = styled.section`
  ${flexContainer('center', 'center', 'center')}
  position: relative;
  width: 100%;
  height: 355px;
  padding: 40px 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    > .case-study-tab {
      text-decoration: underline;
    }
  }

  > h1 {
    font-size: 38px;
    line-height: 42px;
  }

  > h2 {
    font-size: 30px;
  }

  > h2, p, h4, h1 {
    width: 100%;
    text-align: center;
  }

  > p {
    font-weight: 100;
  }

  > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    box-shadow: 0 -8px 16px -8px #000;
    ${props => props.firstSection ? `box-shadow: 0px -8px 16px -8px ${darkGray};` : 'box-shadow: 0px -8px 16px -8px #000;'}
    z-index: 1;
  }

  > .case-study-tab {
    ${flexContainer('center', 'flex-end', 'flex-end')}
    position: absolute;
    top: -34px;
    left: 0;
    width: 124px;
    height: 34px;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    z-index: 2;
    color: ${yellow};
    font-size: 12px;
    font-family: "museo-sans", sans-serif;
    ${props => props.firstSection ? `box-shadow: 4px -4px 8px -4px ${darkGray};` : 'box-shadow: 4px -4px 8px -4px #000;'}
  }

  ${props => props.vmsa && css`
    background: url('/static/case-studies/vmsa.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 30%;

      @media(max-width: 800px) {
        left: 20%;
      }
    }
  `}

  ${props => props.movie && css`
    background: url('/static/case-studies/moviepass.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 40%;

      @media(max-width: 800px) {
        left: 20%;
      }
    }
  `}

  ${props => props.homework && css`
    background: url('/static/case-studies/homework.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    > .case-study-tab {
      left: 50%;

      @media(max-width: 800px) {
        left: 20%;
      }
    }
  `}
`

export const Button = styled.button`
  padding: 14px 25px;
  background-color: ${yellow};
  color: #fff;
  border: none;
  outline: 0;
  border-radius: 25px;
  box-shadow: 2px 2px 8px ${darkGray};
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 1px;

  &:hover {
    box-shadow: 4px 4px 12px ${darkGray};
    transform: scale(1.02);
  }

  ${props => props.gray ? `background-color: ${darkGray}` : ''}
`

export const Section = styled.div`
  ${flexContainer()};
  width: 100%;
  padding: 60px calc(50% - 400px);
  padding-bottom: 0;

  .border-bottom {
    border-bottom: 1px solid #000;
  }

  .small-header {
    padding-top: 40px;
    font-family: "museo-slab", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 38px;
  }

  .sub-head {
    width: 100%;
    color: ${yellow};
    padding-bottom: 40px;

    @media (max-width: 880px) {
      padding-bottom: 20px;

      &.no-padding {
        padding: 0;
      }
    }

    &.no-padding {
      padding: 0;
    }
  }

  .border-header {
    width: 100%;
    margin-bottom: 80px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    color: ${gold};
    font-weight: 500;
    font-family: "museo-sans", sans-serif;
    font-size: 36px;
    line-height: 44px;
  }

  > h1 {
    width: 100%;
  }

  > p {
    padding-top: 40px;
    padding-bottom: 80px;
    font-size: 20px;
    font-family: "museo-slab", sans-serif;
    line-height: 38px;
  }

  .no-padding-top {
    padding-top: 0;
  }

  .moviepass-personas-container {
    ${flexContainer()};
    width: 100%;

    .moviepass-persona {
      ${flexContainer('space-around')}
      ${flexItem('300px')};
      position: relative;
      margin-bottom: 60px;

      > span {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${darkGray};
        z-index: -1;
      }
    }

    .persona-image-container {
      ${flexContainer('center')};
      position: relative;
      width: 150px;

      > small {
        position: absolute;
        bottom: -30px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: ${darkGray};
      }

      > img {
        width: 100px;
        height: auto;
        z-index: 3;
      }
    }

    @media (max-width: 880px) {
      .persona-image-container {
        width: 80px;

        > img {
          width: 80px;
        }
        
        > small {
          bottom: -40px;
        }
      }
    }
  }

  ${props => props.center ? 'justify-content: center; align-content: center;' : ''}
  ${props => props.smallPaddingMobile ? `
    @media (max-width: 880px) {
      padding: 0 10px;
    }
  ` : ''}

  @media (max-width: 880px) {
    padding: 40px;
    padding-bottom: 0;

    > p {
      padding-top: 20px;
      padding-bottom: 40px;
    }
  }
`

export const ImageSection = styled.div`
  ${flexContainer('center', 'stretch', 'stretch')}
  width: 100%;
  padding: 60px calc(50% - 700px);
  overflow: hidden;

  .sub-text {
    width: 100%;
    padding: 10px 100px;
    text-align: center;
    color: ${darkGray};
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 25px;

    &.no-padding {
      padding: 0;
    }

    &.no-padding-bottom {
      padding-bottom: 0;
    }

    &.left {
      text-align: left;
    }

    &.bottom {
      align-self: bottom;
    }

    @media (max-width: 880px) {
      padding: 10px 0;
    }
  }

  .sub-text-list {
    width: 100%;
    padding: 0 100px;
    text-align: center;
    color: ${darkGray};
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 25px;

    &.left {
      text-align: left;
    }

    > li {
      list-style: disc inside;
      padding-bottom: 10px;
    }

    @media (max-width: 880px) {
      padding: 0;
      padding-bottom: 10px;
    }
  }

  .sub-head {
    width: 100%;
    color: ${yellow};
    padding-bottom: 30px;
  }

  .img-desktop {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .img-mobile {
    display: none;

    @media (max-width: 600px) {
      display: initial;
    }
  }

  .hide-on-mobile {
    @media (max-width: 880px) {
      display: none;
    }
  }

  > div {
    ${flexContainer('flex-start', 'flex-start', 'space-between')}
    ${flexItem('500px', '1', '1', '800px')};
    padding: 20px;

    &.no-padding-bottom {
      padding-bottom: 0;
    }

    @media (max-width: 880px) {
      padding: 5px;
      ${props => props.noPadding ? 'padding: 0; flex-basis: 100%; min-width: 120%;' : ''}
    }

    > img {
      width: 100%;
      height: auto;
    }

    ${props => props.xSmall ? 'flex-basis: 150px; max-width: 500px;' : ''}
    ${props => props.small ? 'flex-basis: 300px; max-width: 500px;' : ''}
    ${props => props.large ? 'flex-basis: 600px; max-width: 1200px;' : ''}
    ${props => props.center ? 'align-content: center; align-items: center;' : ''}
    ${props => props.noPadding ? 'padding: 0; flex-basis: 100%; min-width: 100%;' : ''}
  }

  > iframe {
    ${flexItem('600px', '1')};
    margin-bottom: 20px;
    min-height: 563px;

    @media (max-width: 700px) {
      min-height: 200px;
    }
  }

  ${props => props.smallPaddingMobile ? `
    @media (max-width: 880px) {
      padding: 0 10px;
    }
  ` : ''}
  ${props => props.noPaddingBottomDesktop ? `
    @media (max-width: 600px) {
      padding-bottom: 40px;
    }

    padding-bottom: 0;
  ` : `
    @media (max-width: 1440px) {
      padding: 40px 20px;
    }
  `}
  ${props => props.white ? 'background-color: #fff;' : `background-color: ${gray};`}
  ${props => props.noPaddingBottom ? 'padding-bottom: 0 !important;' : ''}
  ${props => props.noPadding ? 'padding: 0 !important;' : ''}
  ${props => props.center ? 'justify-content: center; align-content: center;' : ''}
`

export const List = styled.ul`
  padding-bottom: 40px;

  > li {
    position: relative;
    padding: 15px 20px;
    padding-bottom: 0;
    font-weight: 500;
    line-height: 38px;
    color: ${darkGray};

    &:before {
      position: absolute;
      left: 0;
      top: 27px;
      width: 10px;
      height: 10px;
      background: url('/static/list-style.svg');
      content: '';
    }
  }
`
