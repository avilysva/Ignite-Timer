import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 70rem;
  height: calc(100vh - 10rem);
  padding: 2.5rem;
  margin: 5rem auto;
  overflow: auto;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors['gray-800']};
`;