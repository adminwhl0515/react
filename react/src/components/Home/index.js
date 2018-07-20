import React, {Component} from 'react'
import homeapi from '@/api/home.js'
// import {Link} from 'react-router-dom'
import store from '@/store/index.js'

class Home extends Component {

    componentDidMount () {
       homeapi.getnavList ((data) => {
           store.dispatch({
               type: 'HOME_NAV_LIST',
               data
           })
       })
    }

    render () {
        console.log(store.getState().homedata.homenavlist)
        var homenavlist = store.getState().homedata.homenavlist
        return (
            <div className='main'>
                <header>
                    首页
                </header>
                <aside>首页</aside>
            </div>
        )
    }
}

export default Home