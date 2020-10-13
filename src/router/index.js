import Home from "../pages/Index";
import MapFound from "../pages/MapFound";
import Found from "../pages/Found"
import Mycenter from "../pages/My"



const routers = [{
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/home',
        exact: true,
        component: Home,
        routes: [{
            path: "/home/list",
            component: Found,
            exact: true
        }, {
            path: '/home/profile',
            component: Mycenter,
            exact: true
        }]
    },
    {
        path: '/map',
        exact: true,
        component: MapFound
    },
    {

    }
];

export default routers;