import { AuthPipe } from './auth.pipe';

describe('AuthPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthPipe();
    expect(pipe).toBeTruthy();
  });
});
