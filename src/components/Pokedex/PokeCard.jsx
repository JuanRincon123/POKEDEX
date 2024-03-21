import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


const PokeCard = ({url}) => {

    const [infoApi,getApi] = useFetch(url)

    useEffect(() =>{
        getApi()
    },[])
    console.log(infoApi)
  return (
    <div>
      <article>
        <header>
            <img src={infoApi?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
      </article>
    </div>
  )
}

export default PokeCard
