import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  /* background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'}; */
  /* background-color: ${(props) => props.theme.primary}; */
  background-color: ${({ theme }) => theme.note};
  /* width: ${({ width }) => width || '220px'}; */
  width: 220px;
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
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
