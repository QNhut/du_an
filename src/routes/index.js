import HomePage from "../pages/HomePage/HomePage"
import PredictPage from "../pages/PredictPage/PredictPage"
import Login from '../pages/Login/Login'

const publicRoutes = [
    {path: '/', component: HomePage },
    {path: '/predict-page', component: PredictPage},
    {path: '/login', component: Login}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }