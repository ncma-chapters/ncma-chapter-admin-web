// Node modules.
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Relative imports.
import Button from 'primitives/Button';
import Field from 'primitives/Field';

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

export const Well = styled.div`
  align-items: center;
  background: #1167cd;
  border-radius: 5px;
  box-shadow: 0 6px 20px -1px rgba(19, 38, 56, 0.2);
  box-sizing: border-box;
  display: flex;
  padding: 45px 35px;
  margin: 40px 20px;
  flex-direction: column;
  max-width: 400px;
  width: calc(100% - 40px);

  @media (max-width: 650px) {
    border-radius: unset;
    flex-grow: 1;
    margin: 0;
    max-width: unset;
    width: 100%;
  }
`;

export const Title = styled.div`
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 40px;
`;

export const EmailField = styled(Field)`
  color: #ffffff;
  font-weight: bold;

  &::placeholder {
    color: #ffffff;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #1167cd inset;
    -webkit-text-fill-color: #ffffff;
  }
`;

export const PasswordField = styled(Field)`
  color: #ffffff;
  font-weight: bold;
  margin: 20px 0 0;

  &::placeholder {
    color: #ffffff;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #1167cd inset;
    -webkit-text-fill-color: #ffffff;
  }
`;

export const StyledButton = styled(Button)`
  align-items: center;
  background: #ffffff;
  color: #404040;
  display: flex;
  justify-content: center;
  margin: 40px 0 20px;
  width: 100%;
`;

export const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 40px 0 0;
  width: 100%;
`;

export const LinkButton = styled(Link)`
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 20px 0 0;
`;
