import { Input , Button} from 'reactstrap';
import React from 'react'

export default function Search({searchQuery, setSearchQuery}) {
  return (
    <>
    {
      searchQuery && <Button color='danger' onClick={()=>setSearchQuery("")}>
      X
    </Button>
    }
        <Input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search..." />
    </>
  )
}
