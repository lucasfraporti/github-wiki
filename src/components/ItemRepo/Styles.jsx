import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 35%;
  border: 1px solid #fafafa;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;
  text-align: center;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa70;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #54aeff;
    display: block;
    margin: 5px 0 0 0;
  }

  a.remove {
    color: #ff0000;
    cursor: pointer;
  }
`;
