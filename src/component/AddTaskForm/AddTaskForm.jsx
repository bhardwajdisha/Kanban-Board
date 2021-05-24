import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const AddTaskForm = ({onAdd}) => {

    const [name,setname] = useState('');
    const [duration,setduration]= useState('')
    const [level,setlevel]=useState('Low')
    const [imgUrl,setImageUrl]=useState('')

    const onSubmit =(e)=>{
        e.preventDefault();
         if(!name && !duration){
             alert('Please add task name and duration')
             return;
         }

         onAdd({name,duration,level,imgUrl})
         setname('');
         setduration('')
         setImageUrl('')
    }

    return (
        <Form className='task' onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Task </Form.Label>
                <Form.Control type="text" placeholder="Task Name" value={name} onChange={(e)=> setname(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter the duration</Form.Label>
                <Form.Control type="text" placeholder="Duration" value={duration} onChange={(e)=> setduration(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="Image Url" value={imgUrl} onChange={(e)=> setImageUrl(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Difficulty Level</Form.Label>
                <Form.Control as="select" value={level} onChange={(e)=>setlevel(e.target.value)}>
                <option  value='Low'>Low</option>
                <option value='Medium'> Medium</option>
                <option value="High">High</option>
                </Form.Control>
            </Form.Group>
            
            <Button variant="success" type="submit">
                Add
            </Button>
        </Form>
    )
}

export default AddTaskForm
