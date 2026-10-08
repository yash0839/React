import React, { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    console.log(title, details)

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)



    setTitle("")
    setDetails("")
  }
  const deleteNote =(idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }



  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">

      <div className='flex items-center justify-center '>
        <form onSubmit={submitHandler}
          className="flex items-center justify-center flex-col gap-4 p-4">

          <h1 className='text-3xl font-bold'>Add Note</h1>

          <input className='p-3 border-2 rounded outline-none'
            type="text"
            placeholder="Enter your note"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />



          {/* details vala input  */}
          <textarea className='p-3 h-32 w-full border-2 rounded outline-none'
            type="text"
            placeholder="Enter your note heading"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
          />


          <button className="bg-blue-400 p-3 border-2 rounded w-full active:scale-95 cursor-pointer active:bg-blue-500 border-none"
            type="submit">
            Add Note

          </button>
        </form>
        <img className='h-52 rotate-y-180 ' src="https://imgs.search.brave.com/zADkkqRGW_PFLGl8D2QW_yrfN3n-NqflAT_RKycsgxQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/ODYwLzQ1MC9zbWFs/bC9leHRyYW9yZGlu/YXJ5LXZpbnRhZ2Ut/c3R1ZGVudC13cml0/aW5nLWluLW5vdGVi/b29rLXdhcm0tbGln/aHRpbmctaXNvbGF0/ZWQtZ2VudWluZS1m/cmVlLXBuZy5wbmc" alt="" />

      </div>

      <div className='lg:w1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-96">

          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start h-52 w-40 rounded-xl text-black p-4 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85")`
                }}
              >
                <div>
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>

                <p className="mt-3 leading-tight text-xl font-medium text-gray-800">
                  {elem.details}
                </p>
                </div>
                <button className="bg-red-600 text-white p-1 border-2xl font-bold rounded w-full active:scale-95 cursor-pointer active:bg-red-300 border-none"
                  onClick={deleteNote}
                >
                  delete me
                  
                </button>
              </div>
            )
          })}

        </div>

      </div>
    </div>

  );
}

export default App;
