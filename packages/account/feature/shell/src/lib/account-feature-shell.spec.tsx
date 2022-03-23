import { Route, Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import AccountFeatureShell from './account-feature-shell';

describe('AccountFeatureShell', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();
    
    const { baseElement } = render(
      <Router history={history}>
        <Route path="/account" component={AccountFeatureShell} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
