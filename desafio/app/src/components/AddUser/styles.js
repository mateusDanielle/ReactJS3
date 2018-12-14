import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  h4 {
    color: #1fec94;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 5px;

  input {
    margin-top: 5px;
    border-radius: 3px;
    border: 1px;
    text-transform: uppercase;
    font-weight: bold;
    color: #1fec94;
    height: 30px;
    width: 100%;
    transition: box-shadow var(300ms);
    padding: 0 10px;
  }
  .Input-text::placeholder {
    color: #51f2ad;
  }
  .Input-text:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem var(#5e35b1);
  }
  div {
    margin-top: 10px;

    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  button {
    flex: 1 0 auto;
    /* height: 35px; */
    border-radius: 3px;
    border: 1px;
    font-size: 1.3rem;
  }
  .btnCancelar {
    margin-right: 2.5%;
    background-color: #999;
  }
  .btnSalvar {
    margin-left: 2.5%;
    background-color: #51f2ad;
  }
`;
