import { Search } from '../../../assets/img/icon/search'
import { PlusGreen } from '../../../assets/img/icon/plus-green'
import { Less } from '../../../assets/img/icon/less'
import Modal from '../addUser'

import './index.css'

export default function HeaderOptions() {
    return (
        <div className="header-options">
            <div className='input-container space-btn'>
                {/* <Search/> */}
                {/* <input type="text" className='input-search' placeholder='Search'/> */}
                <Modal/>
            </div>
            
            <button className='btn-option space-btn'>
                <span className='btn-space'>Intake</span>
                <PlusGreen/>
            </button>
            <button className='btn-option'>
                <span className='btn-space'>Outtake</span>
                <Less/>
            </button>
        </div>
    )
}