import { Menu } from '../../../assets/img/icon/menu'
import { Home } from '../../../assets/img/icon/home'
import { List } from '../../../assets/img/icon/list'
import { Chart } from '../../../assets/img/icon/chart'

import './index.css'

export default function SideBar() {
    return (
        <aside>
            <div className='header-side'>
                <Menu/>
            </div>
            <div className='container-btn-menu'>
                <ul>
                    <li className='selected'><Home/></li>
                    <li><List/></li>
                    <li><Chart/></li>
                </ul>
            </div>
        </aside>
    )
}