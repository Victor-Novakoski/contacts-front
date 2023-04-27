import styled from 'styled-components'

export const LoginPage = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 5;

  a {
    background-color: var(--Color-segundary);
    color: var(--Grey-0);
    border-radius: 20px;
    width: 100%;
    height: 48px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    color: var(--Grey-0);
  }

  button {
    background-color: var(--Color-segundary);
    color: var(--Grey-0);
    border-radius: 20px;
    border: none;
    width: 100%;
    height: 48px;
    font-weight: 900;
  }

  button :hover {
  }

  div {
    width: 90%;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--Grey-3);
    padding: 42px 22px;
    gap: 3rem;
    border-radius: 10px;
    position: absolute;
    z-index: 10;
  }

  h3 {
    color: var(--Grey-0);
  }

  label {
    color: var(--Grey-0);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;

    p {
      color: var(--Negative);
      font-size: 13px;
      width: 100%;
    }

    label {
      display: flex;
      flex-direction: column;
      position: relative;

      svg {
        position: absolute;
        top: 35px;
        right: 15px;
        cursor: pointer;
      }

      input {
        border: 1px solid var(--Grey-0);
        background-color: var(--Grey-2);
        color: var(--Grey-0);
        width: 100%;
        height: 48px;
        border-radius: 4px;
        padding: 0 16px;
      }
    }
  }
`
