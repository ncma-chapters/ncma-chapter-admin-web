// Node modules.
import styled from 'styled-components';
// Relative imports.
import Spinner from 'components/Spinner';

export const Wrapper = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`;

export const StyledSpinner = styled(Spinner)`
  transform: scale(1.2);
`;
