import Dashboard from "../components/Dashboard"
import Login from "../components/Login"

const { default: Splashscreen } = require("../components/Splashscreen")

const screenNames={
    splashscreen:'splashscreen',
    Login:'Login',
    DashBoard:'DashBoard'
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
        name:screenNames.DashBoard,
        components:Dashboard
    }
    

]

export {appRoutes,screenNames}