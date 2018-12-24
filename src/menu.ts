
import Home from './views/Home.vue';
import User from './views/User.vue';
import UserSurvey from './views/UserSurvey.vue';
import AddUser from './views/AddUser.vue';
import UserDelete from './views/UserDelete.vue';

const menu = [
  {
    name: '首页统计',
    icon: 'icon-home',
    path: '/',
    component: Home,
  },
  {
    name: '用户管理',
    icon: 'user',
    path: '/user',
    component: User,
    children: [
      {
        name: '用户统计',
        icon: 'sub-about',
        path: '/user/user-survey',
        component: UserSurvey,
      },
      {
        name: '用户新建',
        icon: 'sub-about',
        path: '/user/add-user',
        component: AddUser,
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
