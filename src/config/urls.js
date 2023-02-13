const baseURL = 'http://owu.linkpc.net/carsAPI/v2';


const auth = '/auth'
const cars = '/cars'

const mainUrls = {
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`
    },
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    },
    users:'/users'
}


export {baseURL, mainUrls};