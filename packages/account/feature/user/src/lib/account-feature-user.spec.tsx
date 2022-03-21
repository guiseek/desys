import { render } from '@testing-library/react';

import AccountFeatureUser from './account-feature-user';

describe('AccountFeatureUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountFeatureUser />);
    expect(baseElement).toBeTruthy();
  });
});
