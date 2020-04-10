import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
            box-sizing: border-box;
  }

  @font-face {
  font-family: 'GT America Extended';
  src: url('../../static/fonts/GTAmerica-ExtendedRegular.woff2') format('woff2'),
      url('../../static/fonts/GTAmerica-ExtendedRegular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'GT America Extended';
  src: url('../../static/fonts/GTAmerica-ExtendedMedium.woff2') format('woff2'),
      url('../../static/fonts/GTAmerica-ExtendedMedium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

  body {
    width: 100%;
    font-family: 'GT America Extended',Helvetica, Arial, sans-serif;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-size: 20px;
    background-color: #FFF;
    letter-spacing: -0.5px;
  }

  a {
    color: #0000EE;
  }


  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
  }

  @media (prefers-color-scheme: dark) {
  }
`

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(32,1fr);
`