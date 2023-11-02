const { default: Splashscreen } = require("../components/Splashscreen")

const screenNames={
    splashscreen:'splashscreen'
}

const appRoutes=[
    {
        name:'splashscreen',
        components:Splashscreen
    }
]

export {appRoutes,screenNames}