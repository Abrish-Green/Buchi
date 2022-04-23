import React from 'react'
import PetDetailPaper from '../../Components/PetDetail/DetailPaper';

const testData = {
  "pet_id": 123,
  "type":"Cat",
  "gender":"male",
  "size":"small",
  "age":"baby",
  "good_with_children":false,
  "photos": {
      "url": 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4it_Jqeo2FMOA-0f2yJk5uYJ3YTa1j7MVSA&usqp=CAU" 
  }
}



const Index = () => {
  return (
    <div className="App-Pet-Detail">
        <PetDetailPaper data={testData} />
    </div>
  )
}

export default Index;