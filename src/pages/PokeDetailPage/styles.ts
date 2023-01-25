import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .home-link {
    background-color: ${({ theme }) => theme.blue};
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    color: ${({ theme }) => theme.yellow};
    transition: background-color 0.3s;
    margin: 3rem;
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.darkestBlue};
    }
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 54rem;
  padding: 2rem;
  margin: 3rem auto 0 auto;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;

  .pokemon-pitcure {
    width: 250px;
    height: 250px;
    margin-right: 15px;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    .top-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.7rem;

      .pokemon-name {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.darkBlue};
      }

      .fav-btn {
        background: transparent;
        padding: 0.3rem 0.6rem;
        border: none;
        border-radius: 5px;
        color: ${({ theme }) => theme.yellow};
        font-size: 0.8rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        transform: scale(1);
        transition: transform 0.3s;

        &:hover {
          transform: scale(1.1);
        }

        .fav-icon {
          width: 40px;
          height: 40px;
        }
      }
    }

    .pokemon-bio {
      line-height: 24px;
      margin-bottom: 0.5rem;
    }
  }

  .list {
    display: flex;
    gap: 7px;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  .species-value,
  .pokemon-abilities,
  .list,
  .pokemon-name {
    text-transform: capitalize;
  }

  .title {
    font-weight: 700;
    color: ${({ theme }) => theme.darkBlue};
  }

  .inactive {
    filter: grayscale(100%);
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
`
