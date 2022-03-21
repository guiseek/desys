import styled from 'styled-components';

export interface ButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.div`
  color: pink;
`;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton>
      <button is="ds-btn" {...props}>
        {children}
      </button>
    </StyledButton>
  );
}

export default Button;
