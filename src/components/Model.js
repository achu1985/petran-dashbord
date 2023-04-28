import React from 'react'
import './Model.css'

function Model({closeModel}) {
  return (
    <div className='container-fluid'>
        <div className='title mt-2'>
        <i class="fa-brands fa-stack-overflow"></i>&nbsp;&nbsp;<h6>Add Devices & Parameters</h6>
        <hr/>
        </div>
        <form className='mt-2'> 
        <div class="row">
            <div class="col">
            <label className='p-2'>Device type</label>
            <select className='form-select' id='input1'>
                            <option selected>Antminer Toolkit</option>
                            <option value='1'>One</option>
             </select>
            </div>
            <div class="col">
            <label className='p-2'>Attach Device</label>
            <select className='form-select' id='input1'>
                            <option selected value='2'>Antminer Toolkit(#AJ2930KP)</option>
                            <option value='1'>One</option>
             </select>
            </div>
            </div>

            <div class="row">
            <div class="col">
            <label className='p-2'>Device Name</label>
            <select className='form-select' id='input1'>
                            <option selected value='2'>Antminer Toolkit(#AJ2930KP)</option>
             </select>
            </div>
            <div class="col">
            <label className='p-2'>Device Id</label>
            <select className='form-select' id='input1'>
                            <option selected value='2'>#AJ2930KP</option>
             </select>
            </div>
            </div>

            <div className='row mt-1 ms-1'>
                <p>Fan Speed</p>
                <div className='col'>
                    <input type="checkbox" value=""/>
                    <label > Channel 1(#PL32D)</label><br></br>
                </div>
                <div className='col'>
                    <input type="checkbox" value=""/>
                    <label > Channel 2(#PL21K)</label><br></br>
                </div>
            </div>
            <div className='row mt-2'>
            <h6>Selected parameters &nbsp;<i class="fa-solid fa-circle-info"></i></h6>
                <div className='box col'>
                    <p>Channel 1 (#HJ91K)</p>
                    <p>Channel 3 (#ND44K)</p>
                </div>

                <h6>Hash Rate &nbsp;<i class="fa-solid fa-circle-info"></i></h6>
                <div className='box col'>
                    <p>Channel 1 (#HJ91K)</p>
                    <p>Channel 3 (#ND44K)</p>
                </div>
            </div>

            <div className='d-flex mt-3 mb-3'>
                <button className='btn btn-warning me-2' onClick={() =>closeModel(false)}>Back</button>
                <button className='btn btn-info'>Attach to Asset</button>
            </div>
        </form>
    </div>
  )
}

export default Model