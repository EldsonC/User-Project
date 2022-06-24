import { Plus } from '../../../assets/img/icon/plus'
import { Down } from '../../../assets/img/icon/down'
import { Profile } from '../../../assets/img/icon/profile'
import Modal from '../addUser'
import './index.css'

export default function Header() {
    return (
        <header>
            
            <div className='new-order-btn'>
                <Plus/>
                <span className='new-order-text'>NEW USER</span>
            </div>
            <div className='profile-config'>
                <span className='profile-text'>Hi, Vince N.</span>
                <div className='profile-btn'>
                    <div className='margin-profile'>
                        <Down/>
                    </div>
                    <div>
                        <Profile/>
                    </div>
                </div>
                
            </div>

        </header>
    )
}