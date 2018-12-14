import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 340px;
  background: #fff;
  border-radius: 10px;
  top: 15px;
  left: 15px;
  bottom: 15px;
  box-shadow: 4px 4px 0px 0px #ccc;
  /* z-index: 99; */
  ul {
    padding: 25px;
    list-style: none;
    li {
      width: 300px;
      button {
        border: 0;
        cursor: pointer;
      }
    }
  }
  .box {
    display: flex;
    align-items: center;
    width: 300px;
    flex-direction: row;
  }
  img {
    width: 48px;
    border-radius: 50%;
    float: left;
  }
  .inner {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    align-items: flex-start;
    min-width: 180px;
    strong {
      color: #444;
    }
    span {
      font-size: 14px;
      color: #666;
    }
  }
  hr {
    height: 1px;
    background-color: rgba(221, 226, 236, 0.877);
    border: none;
    margin: 20px 20px 20px 0px;
  }
  .fa-stack {
    font-size: 0.5em;
    width: 2.09em;
  }
  .fa-remove {
    position: relative;
    top: 1px;
    left: 4px;
  }
  .right {
    flex-direction: row;
    justify-content: space-between;
    .del {
      margin-left: 10px;
      color: #f00;
    }
    .arrow {
      margin-left: 20px;
    }
  }
`;
