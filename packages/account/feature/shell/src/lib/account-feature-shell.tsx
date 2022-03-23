import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

import { AccountFeatureUser } from '@desys/account/feature/user';

/* eslint-disable-next-line */
export interface AccountFeatureShellProps {}

const StyledAccountFeatureShell = styled.div`
  color: pink;
`;

export function AccountFeatureShell(props: AccountFeatureShellProps) {
  return (
    <StyledAccountFeatureShell>
      <h2>Welcome to AccountFeatureShell!</h2>

      <Route
        path="/"
        render={() => (
          <nav>
            <Link to="/account/user">User</Link>
          </nav>
        )}
      />
      <Route path="/account/user" component={AccountFeatureUser} />
    </StyledAccountFeatureShell>
  );
}

export default AccountFeatureShell;
