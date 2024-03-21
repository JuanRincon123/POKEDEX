import PokeCard from "./PokeCard"


const PokeContainer = ({infoApi}) => {
    console.log(infoApi)
  return (
    <div>
     {
        infoApi?.map(infoApi => (
            <PokeCard 
            key={infoApi.url} 
            url={infoApi.url}
            />
           
        ))
     }
    </div>
  )
}

export default PokeContainer
