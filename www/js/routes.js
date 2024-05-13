export const routes = [
  {
    name: 'home',
    path: '/',
    options: {
      transition: 'f7-fade',
      animate: false,
    },
    url: './pages/Home/index.html',
  },
  {
    name: 'academy',
    path: '/academy/',
    url: './pages/Academy/index.html',
    options: {
      animate: false,
      transition: 'f7-fade',
    },
  },
  {
    name: 'invest',
    path: '/invest/',
    url: './pages/Invest/index.html',
    options: {
      animate: false,
      transition: 'f7-fade',
    },
  },
  // {
  //   path: '(.*)',
  //   url: './pages/404/index.html',
  // },
];
