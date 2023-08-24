import { initAuthModule } from './auth';
import { initDemoModule } from './demo';
import { initPortfolioModule } from './portfolio';

export default (opts: IModuleOptions) => {
  initAuthModule(opts);
  initPortfolioModule(opts);
  initDemoModule(opts);
};
