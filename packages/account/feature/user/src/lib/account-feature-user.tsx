import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

import { Button } from '@desys/react-components';

/* eslint-disable-next-line */
export interface AccountFeatureUserProps {}

const StyledAccountFeatureUser = styled.div`
  color: pink;
`;

export function AccountFeatureUser(props: AccountFeatureUserProps) {
  return (
    <StyledAccountFeatureUser>
      <h1>Welcome to AccountFeatureUser!</h1>

      <ul>
        <li>
          <Link to="/">account-feature-user root</Link>
        </li>
      </ul>

      <Button>Hey</Button>
      <button is="ds-btn">Ho</button>
      <button is="ds-btn">Lets Go</button>

      <Route
        path="/"
        render={() => <div>This is the account-feature-user root route.</div>}
      />
    </StyledAccountFeatureUser>
  );
}

export default AccountFeatureUser;
