import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --Color-primary: #D1FF01;
    --Color-primary-Focus: #BFE628;
    --Color-segundary: #A80BE1;
    --Grey-0: #f8f9fa;
    --Grey-1: #868e96;
    --Grey-2: #343b41;
    --Grey-3: #212529;
    --Grey-4: #121214;
    --Sucess: #3fe864;
    --Negative: #e83f5b;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`
