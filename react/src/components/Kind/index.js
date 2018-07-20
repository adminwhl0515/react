import React, {Component} from 'react'
import kindapi from '@/api/kind.js' 
import store from '@/store/index.js'

class Kind extends Component {
    componentDidMount () {
        kindapi.getnavlist ((data) => {
            console.log(data)
            store.dispatch({
                type: 'KIND_MENU_LIST',
                data
            })
        })
    }
    render () {
        return (
            <div className='main'>
                <header>
                    分类
                </header>
                <aside className='content kindContent'>
                    <ul className='kindTop'>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                        <li><a>1</a></li>
                    </ul>
                   <div className='txh_1'>
                        <ul className='kindTeft'>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                        </ul>
                        <ul className='kindBottom'>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                        </ul>
                   </div>
                </aside>
            </div>
        )
    }
}

export default Kind