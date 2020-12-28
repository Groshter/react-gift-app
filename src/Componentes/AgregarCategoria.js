import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AgregarCategoria = ( { setCategorias } ) => {

    const [ValorInput, setValorInput] = useState('');

    const CambiaValorChange = (e) => {

        setValorInput( e.target.value );

    }

    const OnSubmit = (e) => {
        e.preventDefault();
       
        if (ValorInput.trim().length > 2) 
        {
            setCategorias(categorias => [ValorInput,...categorias ]);
            setValorInput('');
        }

    }

    return (
   
        <form onSubmit= { OnSubmit }>
            <input 
             type="text"
             value={ ValorInput }
             onChange={ CambiaValorChange }
             
            />
        </form>
    
    )
}

AgregarCategoria.propTypes = {
    setCategorias : PropTypes.func.isRequired
};