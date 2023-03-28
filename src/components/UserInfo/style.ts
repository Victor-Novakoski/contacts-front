import styled from 'styled-components'

export const UserInfoStyle = styled.section`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 20px;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    figure {
      text-align: center;
      width: 100px;
      height: 100px;

      img {
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }

    ul {
      display: flex;
      gap: 5px;
      flex-direction: column;
      align-items: flex-start;

      li {
        text-overflow: ellipsis;
        width: 100px;
      }
    }
  }

  .btnExit {
    display: flex;
    padding: 1rem;
    gap: 10px;
    border-radius: 20px;
    background-color: var(--Color-segundary);
    color: var(--Grey-0);
    border: none;
  }

  .btnConfig {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 20px;
    background-color: var(--Color-segundary);
    color: var(--Grey-0);
    border: transparent;
    font-size: 1rem;
  }
  .btnContact {
    padding: 0.6rem;
    border-radius: 20px;
    background-color: var(--Color-segundary);
    color: var(--Grey-0);
    border: transparent;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    div {
      ul {
        li {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 1460px) {
    
  }
`
