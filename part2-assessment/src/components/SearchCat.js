



function SearchCat({listOfCats}) { 
  console.log(listOfCats)
  if (!listOfCats) { 
    return null;
  }

  

  const showList = () => {

      return listOfCats.map((cat) => { 
        return (
          <div key={cat.name}>
                <p>{cat.name}</p>
          
            </div>
            )
          })
  }





  return (
    <div>
      {showList()}
    </div> 
  )
  
}

export default SearchCat;