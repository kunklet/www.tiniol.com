import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TiniolAppComponent } from '../app/tiniol.component';

beforeEachProviders(() => [TiniolAppComponent]);

describe('App: Tiniol', () => {
  it('should create the app',
      inject([TiniolAppComponent], (app: TiniolAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tiniol works!\'',
      inject([TiniolAppComponent], (app: TiniolAppComponent) => {
    expect(app.title).toEqual('tiniol works!');
  }));
});
