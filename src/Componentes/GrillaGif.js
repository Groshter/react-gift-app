import React, { Fragment } from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GrillaGif = ({categoria}) => {

    const {data: Imagenes, loading} = useFetchGifs( categoria );

   
    return (
        <Fragment>
            <h3 className="animate__animated animate__lightSpeedInRight"> { categoria } </h3>

            { 
            
                <div className="card-grid">
                    
                    { loading && <p>Cargando.. </p>  }

                    {
                        Imagenes.map(img =>(
                                <GifGridItem                         
                                key = {img.id}
                                {...img}
                                />
                        ))
                    } 

                
                </div>
            
            }
        </Fragment>
        
    )
}
