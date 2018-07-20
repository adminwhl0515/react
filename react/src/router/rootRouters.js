import App from '@/App.js'
import Register from '@/components/Register/index.js'
import Login from '@/components/Login/index.js'
import Detail from '@/components/Detail/index.js'

const rootRouters = [ 
    {
        path: '/register',
        component:Register
    },
    {
        path: '/login',
        component:Login
    },
    {
        path: '/detail',
        component:Detail
    },
    {
        path: '/',
        component: App
    }
   
    
]
export default rootRouters