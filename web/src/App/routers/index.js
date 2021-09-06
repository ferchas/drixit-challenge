import Login from '../pages/login';
import UserInfo from '../pages/userInfo';
import NotFound  from '../pages/notFound';

const routes = [
	{
		path: '/login',
		restricted: false,
		component: Login,
	},
	{
		path: '/user-info',
		restricted: true,
		component: UserInfo,
	},
	{
		path: '*',
		restricted: false,
		component: NotFound,
	}
];

export default routes;
