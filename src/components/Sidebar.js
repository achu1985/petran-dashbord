import React, {useState} from 'react'
import './Sidebar.css'
import Model from './Model'

function Sidebar() {

const [openModel,setOpenModel] = useState(false)

  return (
    <div className='AppSidebar'>

        {openModel && <div className='size'><Model closeModel={setOpenModel}/></div>}

        <p className='text-center text-dark'>NEW ASSET DETAILS</p>
        <ul>
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fa-solid fa-book"></i></span>
                        <span class="item" style={{fontSizeAdjust:'inherit'}}>Basic Details</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span class="item">Location & Tracking</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="active" onClick={() => {setOpenModel(true)}}>
                        <span class="icon"><i class="fa-sharp fa-regular fa-laptop"></i></span>
                        <span class="item">Device & Parameters</span>
                    </a>
                </li>
                
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fa-regular fa-user"></i></span>
                        <span class="item">Ownerships</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fa-solid fa-money-check-dollar"></i></span>
                        <span class="item">Finance Details</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fa-solid fa-file"></i></span>
                        <span class="item">Images & Files</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fa-solid fa-circle-info"></i></span>
                        <span class="item">More Details</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fa-solid fa-share-nodes"></i></span>
                        <span class="item">Related Assets</span>
                    </a>
                </li>
        </ul>
        
    </div>
  )
}

export default Sidebar