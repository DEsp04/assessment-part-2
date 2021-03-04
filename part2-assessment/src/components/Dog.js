import { useState, useEffect } from 'react';
import axios from 'axios';
import  RenderList from './RenderList'




function Dog() { 

  const [list, setList] = useState(undefined);
  

  const url = `https://api.thedogapi.com/v1/breeds`;


  const fetchDogList = async () => {
    const response = await axios.get(url);
    setList(response.data)
  }

  useEffect(() => { 
    fetchDogList()
  }, [])

  console.log(list);




  return (
    <div>
      <h1>Dog</h1>
      <RenderList listOfDogs={list} />
    </div>
  )
}


export default Dog;