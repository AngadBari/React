import React from 'react'

const App = () => {

  const onhandelsubmit=(e)=>{
    e.preventDefault()
    console.log("From Submit...")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        onhandelsubmit(e)
      }}>
        <div>
          <input type="text" name="" id="" />
          <button>submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default App