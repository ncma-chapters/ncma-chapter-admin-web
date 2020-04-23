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
    padding: 100px 20px 20px;
    width: 100%;

    @media (min-width: 1000px) {
      padding: 50px 75px 20px;
    }

    .header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100%;

      h1 {
        color: #605f66;
        margin: 0;
        padding: 0;
      }

      a {
        background: #de8d52;
        border-radius: 3px;
        border: none;
        color: #ffffff;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 10px 20px;
      }
    }

    .results-filters {
      align-items: center;
      display: flex;
      width: 100%;
    }

    .items {
      align-items: center;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      width: 100%;

      .no-events {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 100px 0 0;

        h2 {
          margin: 0;
          padding: 0;
        }

        a {
          color: #da8e6b;
          font-weight: bold;
          font-size: 1.2rem;
          margin: 20px 0 0;
        }

        img {
          max-height: 200px;
          margin: 100px 0 0;
        }
      }
    }
  }
`;
