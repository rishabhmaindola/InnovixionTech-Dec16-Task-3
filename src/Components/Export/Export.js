import React from 'react'

const Export = () => {


    const handleExport = () => {
        try{
            const data = localStorage.getItem('notes-app');
        }catch(err){
            
        }
    };


  return (
    <div>
        <button onClick={handleExport}>Export</button>
    </div>
  )
}

export default Export