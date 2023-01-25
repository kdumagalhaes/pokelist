import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.red};

  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .container {
    display: flex;
    align-items: center;
    height: 100%;

    h1 {
      font-size: 1px;
      text-decoration: none;
      visibility: hidden;
    }
  }

  .logo {
    width: 297px;
    height: 35px;
  }

  .menu {
    background-color: ${({ theme }) => theme.black};
    padding: 0.8rem 0.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .favorites-page-link {
    background-color: ${({ theme }) => theme.darkestBlue};
    padding: 0.5rem 1rem;
    outline: 1px solid ${({ theme }) => theme.darkYellow};
    border-radius: 3px;
    color: ${({ theme }) => theme.yellow};
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      color: ${({ theme }) => theme.darkYellow};
    }
  }

  .star-icon {
    width: 20px;
    height: 20px;
  }
`
