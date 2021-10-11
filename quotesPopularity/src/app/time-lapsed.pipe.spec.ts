import { TimeLapsedPipe } from './time-lapsed.pipe';

describe('TimeLapsedPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeLapsedPipe();
    expect(pipe).toBeTruthy();
  });
});
