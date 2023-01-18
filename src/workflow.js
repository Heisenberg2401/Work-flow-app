import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";


function CreateWorkflow() {
    const history = useHistory();
    const [workflowName, setWorkflowName] = useState('');
    const [tasks, setTasks] = useState([]);
    const [dependencies, setDependencies] = useState([{from: '', to: ''}]);
    let localworkflow = localStorage.getItem('workflows')? JSON.parse(localStorage.getItem('workflows')): []
    // console.log(localworkflow)
    const [workflows,setworkflows] = useState(localworkflow)
    const addToWorkflows = e => {
      e.preventDefault();
      const workflow = {
        'workflow_name': workflowName,
        'tasks': tasks,
        'task_dependecy': dependencies

      }
      setworkflows([...workflows,workflow])
      localStorage.setItem('workflows',JSON.stringify(workflows))
      console.log(localStorage.getItem('workflows'))

    }
    

    


    const addNewTask = () => {
      setTasks([...tasks, '']);
    }
    
    const addNewDependency = () => {
      setDependencies([...dependencies, {from: '', to: ''}]);
    }
    
    
    return (
        <div className='login'>

            <div className='login__container'>
                
                
            <form>
      <label>
        Workflow Name:
        <input type="text" value={workflowName} onChange={e => setWorkflowName(e.target.value)} />
      </label>

      <label>
        Tasks:
        {tasks.map((task, index) => (
          <div key={index}>
            <input type="text" placeholder="Enter task name" value={task} onChange={e => {
              const newTasks = [...tasks];
              newTasks[index] = e.target.value;
              setTasks(newTasks);
            }} />
          </div>
        ))}
        <button type="button" onClick={addNewTask}>+</button>
      </label>
      
      <label>
        Task Dependencies:
        {dependencies.map((dependency, index) => (
          <div key={index}>
            <input type="text" placeholder="Enter 'from' task name" value={dependency.from} onChange={e => {
              const newDependencies = [...dependencies];
              newDependencies[index].from = e.target.value;
              setDependencies(newDependencies);
            }} />
            <input type="text" placeholder="Enter 'to' task name" value={dependency.to} onChange={e => {
              const newDependencies = [...dependencies];
              newDependencies[index].to = e.target.value;
              setDependencies(newDependencies);
            }} />
          </div>
        ))}
        <button type="button" onClick={addNewDependency}>+</button>
      </label>
    </form>

    

                <button onClick={addToWorkflows} className='login__registerButton'>add to workflows</button>

            </div>
            <Link to={{ pathname: '/Flowview', state: { 
              'workflow_name': workflowName,
              'tasks': tasks,
              'task_dependecy': dependencies

             } }}> 
                    <div className="header__favourites">
                        <span className='header__optionLine2'>Flow View</span>
                    </div>
                </Link>
            
        </div>

    )
}
export default CreateWorkflow

// export default CreateWorkflow
// import React, { useState } from 'react';
// import './workflow.css';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     workflow_name: '',
//     tasks: [],
//     dependencies: []
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleTaskChange = (index, event) => {
//     const { value } = event.target;
//     const tasks = [...formData.tasks];
//     tasks[index] = value;
//     setFormData({
//       ...formData,
//       tasks
//     });
//   };

//   const handleDependencyChange = (index, event) => {
//     const { name, value } = event.target;
//     const dependencies = [...formData.dependencies];
//     dependencies[index] = {
//       ...dependencies[index],
//       [name]: value
//     };
//     setFormData({
//       ...formData,
//       dependencies
//     });
//   };

//   const addTask = () => {
//     setFormData({
//       ...formData,
//       tasks: [...formData.tasks, '']
//     });
//   };

//   const addDependency = () => {
//     setFormData({
//       ...formData,
//       dependencies: [...formData.dependencies, { from: '', to: '' }]
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //submit the form data to server
//   }

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <label>
//         Workflow Name:
//         <input
//           type="text"
//           name="workflow_name"
//           value={formData.workflow_name}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>Tasks:</label>
//       {formData.tasks.map((task, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             value={task}
//             onChange={(e) => handleTaskChange(index, e)}
//           />
//         </div>
//       ))}
//       <button type="button" onClick={addTask}>
//         Add Task
//       </button>
//       <br />
//       <label>Dependencies:</label>
//       {formData.dependencies.map((dependency, index) => (
//         <div key={index}>
//           <label>
//             From:
//             <input
//               type="text"
//               name="from"
//               value={dependency.from}
//               onChange={(e) => handleDependencyChange(index, e)}
//             />
//           </label>
//           <label>
//             To:
//             <input
//               type="text"
//               name="to"
//               value={dependency.to}
//               onChange={(e) => handleDependencyChange(index, e)}
//              />
//         </label>
//     </div>
// ))}
// <button type="button" onClick={addDependency}>
// Add Dependency
// </button>
// <br />
// <button type="submit" className="submit-button">

// Submit
// </button>
// </form>

// );
// };

// export default Form