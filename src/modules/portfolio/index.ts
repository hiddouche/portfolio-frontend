import routes from './routes';

export const initPortfolioModule: IModuleFn = ({ router }) => {
  routes.map((route) => router.addRoute(route));
};
