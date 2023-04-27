import styled from 'styled-components'
import 'animate.css'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: 380px;
  padding: 3rem 0.8rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
  z-index: 5;

  label,
  h3,
  span {
    color: var(--Grey-0);
  }

  p {
    color: var(--Negative);
    font-size: 13px;
    width: 100%;
  }

  & > div {
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      padding: 0 1rem;
      background-color: var(--Color-segundary);
      color: var(--Grey-0);
      border-radius: 20px;
      width: 67px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        box-shadow: 0px 5px 10px 2.5px var(--Grey-0);
        border: solid 1px var(--Grey-0);
        animation: shakeX 2s;
      }
    }
  }

  .div_tittle {
    background-color: var(--Grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    button {
      width: 100%;
      height: 40px;
      margin-top: 1rem;
      padding: 0 1rem;
      background-color: var(--Color-segundary);
      color: var(--Grey-0);
      border-radius: 20px;
    }
  }
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  input {
    background-color: var(--Grey-2);
    color: var(--Grey-0);
    min-height: 2.5rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    &::placeholder {
      color: var(--Grey-1);
    }
  }
  select {
    background-color: var(--Grey-2);
    color: var(--Grey-1);
    height: 2.5rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    &::placeholder {
      color: var(--Grey-1);
    }
  }
`
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  text-align: left;

  label {
    display: block;
    width: 100%;
  }
`
