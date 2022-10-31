import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      height: 3rem;
      width: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme.colors.white};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom-color: ${({ theme }) => theme.colors['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme.colors['green-500']};
      }
    }
  }
`;