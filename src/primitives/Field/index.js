// Node modules.
import styled from 'styled-components';

export default styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ valid }) => (valid ? '#39eaa9' : '#ffffff')};
  box-shadow: unset;
  box-sizing: border-box;
  padding: 10px 0;
  color: #555555;
  font-family: 'Lato', sans-serif, Helvetica, Arial;
  font-size: 1rem;
  width: 100%;

  &::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #999999;
  }

  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999999;
    opacity: 1;
  }

  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999999;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #999999;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #999999;
  }

  &::placeholder {
    /* Most modern browsers support this now. */
    color: #999999;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #ffffff inset;
    -webkit-text-fill-color: #555555;
  }
`;
