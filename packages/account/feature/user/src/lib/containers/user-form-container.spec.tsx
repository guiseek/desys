import { render } from '@testing-library/react';

import UserFormContainer from './user-form-container';

describe('UserFormContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserFormContainer />);
    expect(baseElement).toBeTruthy();
  });
});
