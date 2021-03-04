



function RenderList({listOfDogs}) { 



  console.log(listOfDogs)
  if (!listOfDogs) { 
    return null;
  }

  const showList = () => {

      return listOfDogs.map((dog) => { 
        return (
          <div key={dog.name}>
                <p>{dog.name}</p>
                <img src={dog.image.url} />
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


export default RenderList;