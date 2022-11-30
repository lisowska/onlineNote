import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  /* background-color:${({ secondary }) => (secondary ? '#E6E6E6' : '#FFD82B')}; */
  /* background-color:${(props) => (props.secondary ? '#E6E6E6' : '#FFD82B')} */
  background-color: #e6e6e6;
  /* jezeli mamy width (jak tutaj <Button wodth="220px">) to zwracamy width a jak go nie ma to 220px */
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #ffd82b;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
