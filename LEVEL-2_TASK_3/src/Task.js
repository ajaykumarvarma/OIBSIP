import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { propTypes } from 'react-bootstrap/esm/Image';
import { BsAlarmFill } from 'react-icons/bs';
import {MdDeleteForever} from 'react-icons/md'
import { RiFontSize } from 'react-icons/ri';
export const Task = (props) => {
  
  return (
    <div id='task'>
    <Card id='bordercolor' style={{ width: '18rem'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.task.title}</Card.Title>
        <Card.Text>
          {props.task.notes}
        </Card.Text>
        {props.task.remainder ? <Button variant="primary m-1" onDoubleClick={()=>props.onToggle(props.task)}><BsAlarmFill style={{fontSize:"1.2em"}}/> Remind</Button> : <Button variant="danger m-1" onDoubleClick={()=>props.onToggle(props.task)}><BsAlarmFill style={{fontSize:"1.2em"}}/> Don't Remind</Button>}
        <Button variant="danger" onClick={()=>props.onDeleteTask(props.task)}><MdDeleteForever style={{fontSize:"1.4em"}}/> Delete</Button>
       
      </Card.Body>
    </Card>
    </div>
  )
}
