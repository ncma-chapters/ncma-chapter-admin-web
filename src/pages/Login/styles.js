// Node modules.
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;

  .logo-wrapper {
    align-items: center;
    background: #24405e;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 20px 20px 30px;
    width: 100%;

    img {
      height: 55px;
    }
  }

  .title-wrapper {
    align-items: center;
    background: #f9fcff;
    border-bottom: 1px solid #dcdcdc;
    box-sizing: border-box;
    color: #888888;
    display: flex;
    justify-content: center;
    padding: 30px 20px;
    width: 100%;

    h1 {
      font-size: 2.2rem;
      margin: 0;
      padding: 0 20px;
    }
  }

  h2 {
    color: #4a4850;
    margin: 70px 0;
    padding: 20px;
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    max-width: 340px;
    width: 100%;

    input {
      border-radius: 3px;
      border: 1px solid #bec1d5;
      color: #908c8c;
      font-size: 1.2rem;
      padding: 10px 15px;
      width: 100%;

      &:first-of-type {
        margin-bottom: 20px;
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }

    a {
      align-self: flex-end;
      color: #da8e6b;
      text-decoration: underline;
      margin-bottom: 40px;
    }

    button {
      align-items: center;
      background: #d88661;
      border-radius: 3px;
      border: none;
      color: #ffffff;
      cursor: pointer;
      display: flex;
      font-size: 1.5rem;
      justify-content: center;
      padding: 10px 20px;
      width: 100%;

      &:disabled {
        opacity: 0.4;
      }
    }
  }

  p {
    color: #908c8c;
    font-size: 0.8rem;
    margin: 65px 0 0;

    a {
      color: #da8e6b;
      margin-left: 5px;
      text-decoration: underline;
    }
  }
`;
