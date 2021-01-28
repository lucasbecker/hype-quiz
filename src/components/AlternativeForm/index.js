import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

AlternativesForm.Radio = styled.input`
display: none;
`;

AlternativesForm.Alternative = styled.a`
  word-wrap: break-word;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

AlternativesForm.Button = styled.button`
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

export default AlternativesForm;
