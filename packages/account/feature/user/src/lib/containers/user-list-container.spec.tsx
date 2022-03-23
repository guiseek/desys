import { render } from '@testing-library/react';

import UserListContainer from './user-list-container';

describe('UserListContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserListContainer />);
    expect(baseElement).toBeTruthy();
  });
});
