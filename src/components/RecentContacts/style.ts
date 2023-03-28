import styled from 'styled-components'

export const RecentStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-height: 45rem;
  align-items: flex-start;
  padding: 1rem;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 20px;

  h1 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }

  .divInput {
    width: 100%;
    text-align: center;

    input {
      height: 1.5rem;
      border-radius: 20px;
      width: 50%;
      text-align: center;
    }
  }

  ul {
    ::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 20px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: var(--Grey-3);
    }

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 1rem;
    gap: 1rem;

    li {
      background-color: var(--Grey-2);
      border-radius: 20px;
      color: var(--Grey-0);
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0.5rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 30%;
      }

      button {
        padding: 0.5rem;
        border-radius: 50%;
        background-color: transparent;
        border: none;
        color: var(--Grey-0);
      }
    }
  }

  @media (min-width: 1024px) {
    .divInput {
      input {
        width: 30%;
      }
    }
    ul {
      flex-wrap: wrap;
      width: 100%;
      align-items: center;

      li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1460px) {
    .divInput {
      input {
        width: 15%;
      }
    }
    ul {
      li {
        width: 35%;
      }
    }
  }
`
