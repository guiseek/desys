import styled from 'styled-components';

import { Route, Link } from 'react-router-dom';
import { Button } from '@desys/react-components';

const StyledApp = styled.div`
  // Your style here
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #212121;
`;

export function App() {
  return (
    <StyledApp>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <header>
        <h1>Welcome course-content</h1>
      </header>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>

        <Button>Hey</Button>
        <button is="ds-btn">Ho</button>
        <button is="ds-btn">Lets Go</button>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
