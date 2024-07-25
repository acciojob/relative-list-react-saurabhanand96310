import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               const relatives=["sarvesh","raj","gopal","ankit","rajeev"]
               <ol key="relativeList">
                {
                relatives.map((relative,index)=>(
                  <li key={`relativeListItem${index+1}`}>{relative}</li>
                ))
              }
               </ol>
    </div>
  )
}

export default App
