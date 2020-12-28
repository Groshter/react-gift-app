import React, { Fragment, useState } from 'react'
import { AgregarCategoria } from './Componentes/AgregarCategoria';
import { GrillaGif } from './Componentes/GrillaGif';

export const GifExpertApp = () => {

    const [Categorias, setCategorias] = useState(["Joji"]);

    // const AgregaCategoria = (e) =>{   
    //    setCategorias( [...Categorias, "HunterXHunter "] );
    // }

    return (
        <Fragment>
           <h2>GifExpertApp</h2> 
           <AgregarCategoria setCategorias= { setCategorias } />
           <hr/>

           <ul>
              {
                  Categorias.map( categoria => (
                        <GrillaGif 
                        key = { categoria }
                        categoria= { categoria }
                        />
                  ))
              }
           </ul>


        </Fragment>
    )
}


