import React, {useState} from 'react'
import './App.css';
import Table from './Table';

function App() {
  const [user, setUser] = useState({
    name: "", email: "", type: ""
  })

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({...user, [name]:value})
  }
  const PostData = async (e) => {
    e.preventDefault()
    const {name, email, type} = user

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, type
      })
    })
    const data = await res.json();
  }

  return (
    <div className="App">
      <form method="POST" name='SignUpForm' className="mx-auto p-4 w-25">
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name="name" className="form-control" 
            value = {user.name}
            onChange = {handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-control"
            value = {user.email}
            onChange = {handleInputs}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type">Type</label>
          <input type="type" id="type" name="type" className="form-control"
            value = {user.type}
            onChange = {handleInputs}
          />
        </div>        
        <div className='add'>
            <input type="submit" value="Add" name='signup' onClick={PostData}/>
        </div>
      </form>
      <Table />
      
    </div>
  );
}

export default App;
