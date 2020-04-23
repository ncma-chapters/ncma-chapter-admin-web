// Node modules.
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #233f5d;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 15px 20px 10px;
  width: 100%;

  .inner-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 1000px) {
      padding: 0 50px;
    }

    .logo {
      flex: 1;

      img {
        height: 40px;
      }
    }

    .nav-items {
      align-items: center;
      display: flex;
      justify-content: center;
      flex: 1;

      a {
        font-size: 1rem;
        letter-spacing: 0.5px;
        margin: 0 20px;

        &.selected {
          font-weight: bold;
        }
      }
    }

    .user-info {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      flex: 1;

      .user-icon {
        background: #ffffff;
        border-radius: 50%;
        border: 1px solid #ffffff;
        height: 40px;
        padding: 5px;
        margin-right: 15px;
        width: 40px;
      }

      .logout-button {
        background: none;
        border: none;
        color: #ffffff;
        font-size: 1rem;
        outline: none;
      }
    }
  }
`;
