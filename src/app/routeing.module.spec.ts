import { RouteingModule } from './routeing.module';

describe('RouteingModule', () => {
  let routeingModule: RouteingModule;

  beforeEach(() => {
    routeingModule = new RouteingModule();
  });

  it('should create an instance', () => {
    expect(routeingModule).toBeTruthy();
  });
});
