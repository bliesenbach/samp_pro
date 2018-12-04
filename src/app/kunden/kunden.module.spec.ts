import { KundenModule } from './kunden.module';

describe('KundenModule', () => {
  let kundenModule: KundenModule;

  beforeEach(() => {
    kundenModule = new KundenModule();
  });

  it('should create an instance', () => {
    expect(kundenModule).toBeTruthy();
  });
});
