import React from "react";
import hoc from "./hoc";
import sampleComponent from "./samplecomponent";


const makeasampleComponent = sampleComponent(hoc);

const App = ()=>{
    return(
        <div>
            <makeasampleComponent loading = "true" message="Loading is set to true"/>
            <makeasampleComponent loading = "false" message = "loading is set to false"/>
        </div>
    )
}

export default App;