import { CurrencyUsdPipe } from './currency-usd-pipe';

describe('CurrencyBrlPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
