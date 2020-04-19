// Node modules.
import styled from 'styled-components';

export default styled.button`
  background: #d88661;
  border-radius: 3px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  min-height: 51px;
  padding: 15px 30px;
  text-align: center;
  transition: background 0.5s ease, opacity 0.5s ease;

  ${({ disabled }) => (disabled ? 'cursor: not-allowed; opacity: 0.4;' : '')}
`;
