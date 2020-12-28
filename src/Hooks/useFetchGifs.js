import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/getGifs";


export const useFetchGifs = (categoria) =>{

    const [State, setState] = useState({
        data: [],
        loading : true
    });


     useEffect(() => {

        getGifs( categoria )
        .then(img => {

            setState({
                data: img,
                loading: false
            });
          
        });

     }, [categoria]);

    return State;
}