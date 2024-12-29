import React from 'react';

const BtnSalvarCurriculo = () => {
    return (
        <button className='btn'>
            <a href="../curriculo/CurriculoWillian.pdf" download="WillianBorges.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                Baixar Currículo
            </a>
        </button>
    );
};

export default BtnSalvarCurriculo;