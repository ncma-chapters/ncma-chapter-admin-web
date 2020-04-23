// Node modules.
import React from 'react';
// Relative imports.
import { Bounce1, Bounce2, Bounce3, Wrapper } from './styles';

const Spinner = (props) => (
  <Wrapper {...props}>
    <Bounce1 />
    <Bounce2 />
    <Bounce3 />
  </Wrapper>
);

export default Spinner;
