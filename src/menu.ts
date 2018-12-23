
import Home from './views/Home.vue';
import SubHome from './views/SubHome.vue';
import About from './views/About.vue';
import SubAbout from './views/SubAbout.vue';
import UserDelete from './views/UserDelete.vue';

const menu = [
  {
    name: '首页统计',
    icon: 'icon-home',
    path: '/',
    component: Home,
    children: [
      {
        name: 'sub-home',
        icon: 'sub-home',
        path: '/sub-home',
        component: SubHome,
      },
    ],
  },
  {
    name: '用户管理',
    icon: 'about',
    path: '/about',
    component: About,
    children: [
      {
        name: '用户统计',
        icon: 'sub-about',
        path: '/about/sub-about',
        component: SubAbout,
      },
      {
        name: '用户新建',
        icon: 'sub-about',
        path: '/about/userTotal',
        component: SubAbout,
      },
      {
        name: '用户删除',
        icon: 'sub-about',
        path: '/about/userdelete',
        component: UserDelete,
      },
    ],
  },
];

export default menu;
