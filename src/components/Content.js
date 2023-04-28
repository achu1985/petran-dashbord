import React from 'react'
import './Content.css'

function Content() {
  return (
    <div className='container-fluid mt-5'>
        <div>
        <p>Dashbord &gt; Asset Management &gt; Create Asset &gt; Basic Details </p>
            <h3 className='asset'>Create Asset</h3>
        <button className='b1 btn btn-success me-3'>Create Asset</button>
        <button className='b2 btn btn-danger'>Cancel</button>
        <hr/>
        </div>
        
        <div className='bdetails'>
            <h3>Basic Details</h3>
            <div className='bg-light'><h6>Things to do before adding an asset</h6>
            <p>Before adding asset, You must create an entry for Business unit,Cost Center and Department</p>
            <button className='basicb1'>Business unit</button>&nbsp;<button className='basicb1'>Cost center</button>&nbsp;<button className='basicb1'>Department</button><br/></div>
        </div>

        <form className='mt-3'>
            <div class="row">
            <div class="col">
            <label className='p-2'>Asset Name</label>
            <input type="text" class="form-control" placeholder="Enter name of asset" required/>
            </div>
            <div class="col">
            <label className='p-2'>Asset Serial No.</label>
            <input type="text" class="form-control" placeholder="Enter asset serial no."/>
            </div>

            <div class="row">
            <div class="col">
            <label className='p-2'>Asset Manager</label>
            <select className='form-select' id='input1'>
                            <option selected>Danish Sharma</option>
                            <option value='1'>One</option>
             </select>
            </div>
            <div class="col">
            <label className='p-2'>Asset Catagory</label>
            <select className='form-select' id='input1'>
                            <option value='2'>Two</option>
                            <option value='1'>One</option>
             </select>
            </div>
            </div>

            <div class="row">
            <div class="col">
            <label className='p-2'>Asset Criticality</label>
            <select className='form-select' id='input1'>
                            <option selected>Low</option>
                            <option value='1'>One</option>
             </select>
            </div>
            <div class="col">
            <label className='p-2'>Asset Movability</label>
            <select className='form-select' id='input1'>
                            <option selected value='2'>fixed</option>
                            <option value='1'>One</option>
             </select>
            </div>
            </div>

            <div className='row'>
            <label className='p-2'>Labels and Tags</label>
            <select className='form-select' id='input1'>
                            <option selected value='2'>Assign tags and labels to the asset</option>
                            <option value='1'>One</option>
             </select>
            </div>

            <div className='row'>
            <label className='p-2'>Asset Description</label>
                <textarea rows='3' cols='8'/>
            </div>

            </div>
        </form> 
       
    </div>
  )
}

export default Content