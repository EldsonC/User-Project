import Header from "../../shared/components/header"
import HeaderOptions from "../../shared/components/header-options"
import SideBar from "../../shared/components/side-bar"
import Table from "../../shared/components/table"

import './index.css'

export default function Dashboard() {
    return (
            
        <div className="container">
            <SideBar />
            <div className="dash">
                <Header/>
                <HeaderOptions/>
                <Table/>
            </div>
            
        </div>
        
    )
}