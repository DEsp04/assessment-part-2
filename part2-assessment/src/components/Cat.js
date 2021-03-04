
import SearchCat from "./SearchCat";
import React, { useState, useEffect } from "react";
import axios from 'axios';


function Cat() {


  const [list, setList] = useState(undefined);
  



  const fetchCatList = async () => {

    const API_KEY = `2db82624-027f-4719-a3e4-c302765ea20e`;
    const url = "https://api.thecatapi.com/v1/breeds/";

    const response = await axios.get(`${url}?api_key=${API_KEY}`);
    
    setList(response.data)
  }

  useEffect(() => {
    fetchCatList()
  }, [])

  console.log(list);


  return (
    <div>
      <h1>Cat</h1>
      <SearchCat listOfCats={list} />
    </div>
  )

}

export default Cat;