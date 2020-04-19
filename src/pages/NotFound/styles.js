// Node modules.
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Relative imports.

export const Wrapper = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;

  * {
    flex-shrink: 0;
  }
`;

export const Title = styled.div`
  color: #4ec2f8;
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  background: #1167cd;
  box-sizing: border-box;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  margin: 30px 0 0;
  padding: 10px 15px;
  text-align: center;
`;
