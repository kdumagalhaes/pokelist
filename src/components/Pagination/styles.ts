import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 15px;

  .pagination-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 1rem 1.2rem;
    background-color: ${({ theme }) => theme.blue};
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.yellow};
    font-weight: 700;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.darkestBlue};
    }
  }

  .pagination-icon {
    width: 18px;
    height: 18px;
  }
`
