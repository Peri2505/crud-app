import { Spinner, Container,Table} from 'reactstrap';
import React, { useEffect, useState } from 'react'
import fetchData from '../utils/apiCalls/getData';
import SingleStudent from './SingleStudent';
import deleteData from '../utils/apiCalls/deleteData';
import AddModal from './AddModal';

export default function Students({searchQuery}) {
    const [students,setStudents]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const [modal, setModal] = useState(false);
    const [stId,setStId]=useState(null)

    const toggle = (id) => {
      setModal(!modal);
      setStId(id)
    }

const fetchAndSetState =async()=>{
  setIsLoading(false)
setStudents(await fetchData())
setIsLoading(true)
}
    useEffect(()=>{
fetchAndSetState()

    },[])

    const handleStudentDelete=(id)=>{
deleteData(id).then(data =>{
  fetchAndSetState()
})
    
    }

    const filteredStudents= students.filter(student=>student.fname.toLowerCase().includes(searchQuery.toLowerCase())||
    student.lname.toLowerCase().includes(searchQuery.toLowerCase()) 
    )
  return (
    <>
      <Container className='border p-2'>
     {
!isLoading ? <Spinner color='primary'>
Loading...
</Spinner> :   <Table
  bordered
  hover
  responsive
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Avatar
      </th>
      <th>
        F Name
      </th>
      <th>
        L Name
      </th>
      <th>
        Age
      </th>
      <th>
        Country
      </th>
      <th>
        
      </th>
        

    </tr>
  </thead>
  <tbody>
    {
        filteredStudents.map((student, index)=>{
            return (
       <SingleStudent toggle={toggle} {...student} key={student.id} index={index} handleStudentDelete={handleStudentDelete}/>
            )
        })
    }
    
  </tbody>
</Table>
     }
   <AddModal modal={modal} toggle={toggle} handleStudentDelete={handleStudentDelete} stId={stId}/>
      </Container>
    </>
  )
}
