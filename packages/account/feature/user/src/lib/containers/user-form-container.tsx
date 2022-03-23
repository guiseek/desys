import styled from 'styled-components';

import { Button } from '@desys/react-components';

/* eslint-disable-next-line */
export interface UserFormContainerProps {}

const StyledUserFormContainer = styled.div`
  color: pink;
`;

export function UserFormContainer(props: UserFormContainerProps) {
  return (
    <StyledUserFormContainer>
      <h3>Welcome to UserFormContainer!</h3>

      <form>
        <input
          type="text"
          name="firstname"
          placeholder="First name"
          aria-label="First name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          required
        />
        <fieldset>
          <label>
            <input type="checkbox" role="switch" name="terms" />I agree to the{' '}
            <a href='/' onClick={(event) => event.preventDefault()}>
              Privacy Policy
            </a>
          </label>
        </fieldset>
        <Button>Subscribe</Button>
      </form>
    </StyledUserFormContainer>
  );
}

export default UserFormContainer;
