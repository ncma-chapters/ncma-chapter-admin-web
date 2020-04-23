// Node modules.
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;

    h1 {
      font-size: 3rem;
      margin: 100px 0 0;
    }

    p {
      font-size: 1.5rem;
      margin: 40px 0 0;
    }

    .items {
      display: flex;
      flex: row wrap;
      margin: 100px 0 0;

      .item {
        align-items: center;
        background: #ffffff;
        border-radius: 3px;
        box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
        display: flex;
        font-size: 1.5rem;
        margin-right: 50px;
        padding: 20px 30px 20px 20px;
        transition: box-shadow 0.3s ease;

        &:hover {
          box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.3);
        }

        &:last-of-type {
          margin-right: 0;
        }

        img {
          height: 50px;
          margin-right: 20px;
          width: 50px;
        }
      }
    }
  }
`;
