import Login from "../components/Login"

const { default: Splashscreen } = require("../components/Splashscreen")

const screenNames={
    splashscreen:'splashscreen',
    Login:'Login'
}

const appRoutes=[
    {
        name:screenNames.splashscreen,
        components:Splashscreen
    },
    {
        name:screenNames.Login,
        components:Login
    }
]

export {appRoutes,screenNames}