import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { propTypes } from 'react-bootstrap/esm/Image';
import { TiTickOutline } from 'react-icons/ti'
const Todofrom = (props) => {
  const [title, setTitle] = useState("")
  const [notes, setNotes] = useState("")
  const [remainder, setRemainder] = useState(false)
  const onFormsubmit = (e) => {
    e.preventDefault()
    if (!title) {Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Enter a Title !'
      
    })
    return;
  }
    if (!notes) {Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Enter Notes !'
      
    })
    return;
  }
  
    console.log(e)
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].checked)
    props.onAdd({title,notes,remainder})
    
    Swal.fire({
      icon: 'success',
      title: 'Done !',
      text: `Sucessfully Added '${title}' Card`,
      timer:3000,
     
    })
    setTitle('')
    setNotes('')
  }
  return (
    <div id="formclass">
      <Form onSubmit={onFormsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter task" value={title} onChange={(e) => (setTitle(e.target.value))} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" value={notes} onChange={(e) => (setNotes(e.target.value))} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Want a Reminder?" checked={remainder} onChange={(e) => (setRemainder(e.target.checked))} />
        </Form.Group>
        <Button variant="primary" type="submit">
          <TiTickOutline style={{fontSize:"1.4em"}}/> Submit</Button>
      </Form>
    </div>
  );

}
export default Todofrom;
