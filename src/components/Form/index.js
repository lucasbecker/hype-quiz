import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
`;

Form.Input = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid rgba(239, 239, 239, 0.3);;
  color: ${({ theme }) => theme.colors.contrastText};;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  padding: 16px ;
  margin-top: 12px;
  margin-bottom: 24px;
  outline-color: ${({ theme }) => theme.colors.primary};
`;

Form.Button = styled.button`
  width: 100%;
  height: 40px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainBg};
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  :disabled {
    background-color: rgba(239, 239, 239, 0.3);
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;

Form.Alternative = styled.div`
`;

Form.Radio = styled.input`
  display: none;
`;

Form.Label = styled.label`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}30`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  word-wrap: break-word;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  input[type=radio]:checked + & {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => theme.colors.mainBg};
  }
  input[type=radio]:checked + &:hover,
  input[type=radio]:checked + &:focus {
    opacity: 1;
  }
`;

export default Form;
