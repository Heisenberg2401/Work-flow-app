import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import ReactFlow, { Background } from 'react-flow-renderer';


function Flowview() {
    const workflow = useLocation()
    // const { from } = location.state
    console.log(workflow)
    const tasks= workflow.state.tasks
    const taskDependencies = workflow.state.task_dependecy
    const [elements, setElements] = useState([...tasks, ...taskDependencies]);
    
    return (<div>
        <h1>{workflow.state.workflow_name}</h1>
        <ReactFlow
      elements={elements}
      onElementsRemove={(elements) => setElements(elements)}
    >
      <Background />
    </ReactFlow>
</div>
    )

}
export default Flowview