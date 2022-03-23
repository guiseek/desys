import styled from 'styled-components';

import { Route, Link } from 'react-router-dom';

import { AccountFeatureShell } from '@desys/account/feature/shell';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function App() {
  return (
    <StyledApp>
      <header className="container">
        <h1>Welcome course-content</h1>
      </header>

      <main className="container">
        <Route
          path="/"
          render={() => (
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/account">Account</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          )}
        />
        <Route path="/account" component={AccountFeatureShell} />
        <Route
          path="/about"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        />
      </main>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
