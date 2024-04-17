import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  color: #fc8118;
  background: transparent;
  border: 1px solid #fc8118;
  padding: 10px 24px;
  cursor: pointer;
  transition: 300ms;
  font-size: 10px;
  font-weight: bold;

  &:hover {
    border: 1px solid #e17315;
    color: #e17315;
  }

  ${(props) =>
    props.$primary &&
    css`
      background-color: #fc8118;
      color: white;

      &:hover {
        background-color: #e17315;
        border: 1x solid #e17315;
        color: white;
      }
    `}
`;

export default Button;
