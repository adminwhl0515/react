// import fetchJsonp from 'fetch-jsonp'
import {KIND_NAV_LIST} from '@/server/index.js'

export default {
    getnavlist (cb) {
        
        fetch(KIND_NAV_LIST)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }
}