

export enum LoginReq{
  YES,NO,COMMON
}
export interface RoutesToUrl{
  name: string;
  url: string
  loginReq: LoginReq;
  active: boolean
}

export const routesToUrl: RoutesToUrl[] = [
  { name: 'Home', url: '/', loginReq: LoginReq.COMMON, active: true },
  { name: 'Register', url: '/', loginReq: LoginReq.NO, active: false },
  { name: 'Login', url: '/login', loginReq: LoginReq.NO, active: false },
  { name: 'Logout', url: '/logout', loginReq: LoginReq.YES, active: false },
  {
    name: 'Cart',
    url: '/products/cart',
    loginReq: LoginReq.YES,
    active: false,
  },
  {
    name: 'Search',
    url: '/products/search',
    loginReq: LoginReq.YES,
    active: false,
  },
  { name: 'Product', url: '/products', loginReq: LoginReq.YES, active: false },
];
