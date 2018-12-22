
const menu = [
  {
    name: '首页',
    icon: 'home',
    path: '/',
    subs: [
      {
        name: 'sub-home',
        icon: 'sub-home',
        path: '/sub-home',
      },
    ],
  },
  {
    name: '关于',
    icon: 'about',
    path: '/about',
    subs: [
      {
        name: 'sub-about',
        icon: 'sub-about',
        path: '/about/sub-about',
      },
    ],
  },
];

export default menu;
