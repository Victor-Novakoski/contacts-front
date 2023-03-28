import styled from 'styled-components'

export const ModalStyle = styled.section`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  .backGround {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    background-color: var(--Grey-4);
    opacity: 30%;
  }

  .div_modal {
    position: absolute;
    min-width: 300px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;

    .deleteBtnContacts {
      cursor: pointer;
      background-color: var(--Negative);
      color: var(--Grey-0);
      width: 100%;
      margin: 0 auto;
      border-radius: 4px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2.5px solid black;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background-color: white;

      button {
        background-color: transparent;
        font-size: 1.2rem;
        border: none;
      }
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;

      p {
        color: var(--Negative);
      }

      input {
        width: 100%;
        margin: 0 auto;
        height: 48px;
        padding: 0.5rem;
        font-size: medium;
      }
      button {
        background-color: var(--Color-segundary);
        color: var(--Grey-0);
        width: 100%;
        margin: 0 auto;
        border-radius: 4px;
        height: 48px;

        &:hover {
          background-color: var(--Color-primary-Focus);
        }
      }
    }
  }
`
