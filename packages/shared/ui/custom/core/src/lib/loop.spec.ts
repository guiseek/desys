import { loop } from './loop'

jest.spyOn(global, 'setInterval');

describe('Loop', () => {
  let looper: ReturnType<typeof loop>;

  beforeEach(() => {
    looper = loop(1, 1);
  });

  it('should run counter', async () => {
    let count = 0;
    
    looper.run(() => count++);

    const to = setTimeout(() => {
      expect(count).toBe(1);
      clearTimeout(to);
    }, 1000)
  });
});
