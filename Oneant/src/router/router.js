
import Dashboard from "../components/Dashboard"
import Login from "../components/Login"
import Newuser from "../components/Newuser"
import BottomNavg from "../Bottomtab/BottomNavg"
import Googlesign from "../components/Googlesign"


const { default: Splashscreen } = require("../components/Splashscreen")

const screenNames={
    splashscreen:'splashscreen',
    Login:'Login',
    Newuser:'Newuser',
    Dashboard:'Dashboard',
    BottomNavg:'BottomNavg',
    Googlesign:'Googlesign'
}

const appRoutes=[
    {
        name:screenNames.splashscreen,
        components:Splashscreen
    },
    {
        name:screenNames.Login,
        components:Login
    },
    {
        name:screenNames.Newuser,
        components:Newuser
    },
    {
        name:screenNames.Dashboard,
        components:Dashboard
    },
    {
        name:screenNames.BottomNavg,
        components:BottomNavg
    },
    {
        name:screenNames.Googlesign,
        components:Googlesign
    }
    

]

export {appRoutes,screenNames}