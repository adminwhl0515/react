// import fetchJsonp from 'fetch-jsonp' 
import {HOME_NAV_LIST} from '@/server/index.js'

export default {
    getnavList (cb) {
        fetch(HOME_NAV_LIST)
            .then(res => res.json())
            .then(data => {cb(data[0].entries)
            })
            .catch(err => console.log(err))
    }
}