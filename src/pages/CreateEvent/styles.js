// Node modules.
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    width: 100%;

    @media (min-width: 1000px) {
      padding: 30px 75px 20px;
    }

    .breadcrumb {
      color: #de8f55;
      font-size: 0.9rem;

      img {
        height: 12px;
        margin-right: 5px;
        transform: rotate(180deg);
      }
    }

    h1 {
      color: #605f66;
      margin: 30px 0 0;
      padding: 0;
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      max-width: 1000px;
      width: 100%;

      .form-section {
        border-bottom: 1px dashed #bcc7d2;
        display: flex;
        flex-direction: column;
        padding: 50px 0;
        width: 100%;

        .form-header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 0 0 10px;
          width: 100%;

          img {
            height: 50px;
            margin-right: 50px;
            width: 50px;
          }

          h2 {
            color: #818890;
            font-size: 1.5rem;
            flex-grow: 1;
            margin: 0;
          }

          p {
            color: #868686;
            font-size: 0.9rem;
            margin: 0;
            text-align: right;
          }
        }

        .red {
          color: #d76241;
        }

        label {
          color: #545454;
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          margin: 20px 0 0;
          padding-left: 100px;
          width: 100%;

          p {
            margin: 0 0 5px;
          }

          input,
          select {
            background: #ffffff;
            border: 1px solid #d8d8d8;
            border-radius: 4px;
            color: #545454;
            font-size: 1rem;
            padding: 10px 10px;
          }
        }

        .link {
          color: #4692e7;
          margin: 30px 0 0;
          padding-left: 100px;
          text-decoration: underline;
        }

        .select-wrapper {
          color: #545454;
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          margin: 20px 0 0;
          padding-left: 100px;
          width: 100%;

          .select-field {
            .link {
              margin: 0 0 0 5px;
              padding: 0;
            }
          }
        }

        .DateRangePicker {
          color: #545454;
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          margin: 20px 0 0;
          padding-left: 100px;
          width: 100%;

          .DateRangePickerInput__withBorder {
            border-radius: 4px;
            overflow: hidden;
          }

          .DateInput_input__focused {
            border-bottom: 2px solid #de8d52;
          }

          .DayPickerKeyboardShortcuts_show__bottomRight::before {
            border-right: 33px solid #de8d52;
          }
        }

        .dropzone {
          color: #545454;
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          margin: 20px 0 0 100px;
          width: calc(100% - 100px);
        }

        .uploaded-image {
          align-self: flex-start;
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: 20px 0 0 100px;

          img {
            border-radius: 3px;
            max-height: 80px;
            max-width: 80px;
          }

          p {
            color: #545454;
            font-size: 0.8rem;
            margin: 10px 0 0;
            text-align: center;
          }
        }
      }

      .actions {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 70px 0;

        a,
        button {
          background: #7386e6;
          border-radius: 3px;
          border: none;
          color: #ffffff;
          font-size: 1rem;
          font-weight: bold;
          padding: 10px 20px;
          white-space: nowrap;
        }

        .cancel {
          background: #eb3324;
        }

        .save-buttons {
          align-items: center;
          display: flex;

          .save-draft {
            background: #de8d52;
          }

          .save-publish {
            margin-left: 30px;
          }
        }
      }
    }
  }
`;
