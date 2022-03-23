import { Route, Link } from 'react-router-dom';

import styled from 'styled-components';

import UserListContainer from './containers/user-list-container';
import UserFormContainer from './containers/user-form-container';

/* eslint-disable-next-line */
export interface AccountFeatureUserProps {}

const StyledAccountFeatureUser = styled.div`
`;

export function AccountFeatureUser(props: AccountFeatureUserProps) {
  return (
    <StyledAccountFeatureUser>
      <Route
        path="/account/user"
        render={() => (
          <nav>
            <ul>
              <li>
                <Link to="/account/user/form">User Form</Link>
              </li>
              <li>
                <Link to="/account/user/list">User List</Link>
              </li>
            </ul>
          </nav>
        )}
      />

      <header>
        <h3>Welcome to AccountFeatureUser!</h3>
      </header>

      <section>
        <Route path="/account/user/list" component={UserListContainer} />
        <Route path="/account/user/form" render={() => <UserFormContainer />} />
      </section>
    </StyledAccountFeatureUser>
  );
}

export default AccountFeatureUser;
