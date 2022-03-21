import { CustomElement } from './render'
import { Custom } from './custom'

@Custom({ name: 'custom-element' })
class TestElement extends CustomElement {}

describe('Custom', () => {
  let custom: TestElement;

  beforeEach(() => {
    custom = document.createElement('custom-element') as TestElement;
  });

  it('should create an instance', () => {
    expect(custom).toBeTruthy();
  });
});
