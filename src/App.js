import './App.css';
import data from './TemplateData.json'
import React, { useState } from 'react'

function App() {
  let [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div className="input-group flex-nowrap">
              <input type="text" className="form-control"
                placeholder="Search " aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
          <div className='d-flex justify-content-around '>
            {
              data.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.title.toLowerCase().includes
                (searchTerm.toLowerCase())) {
                  return val
                }
              }).map((val) => {
                return (
                  <div key={val.id} className='item mt-3'>
                    <img src={val.image} />
                    <p>{val.title}</p>
                    <p>{val.price}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
