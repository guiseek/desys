import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import AccountFeatureUser from './account-feature-user';

describe('AccountFeatureUser', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();

    const { baseElement } = render(
      <Router history={history}>
        <AccountFeatureUser />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
