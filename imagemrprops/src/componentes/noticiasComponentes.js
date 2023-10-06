import React from "react";

const NoticiaComponente = ({titulo, imagem, alt, descricao, categoria}) => {
    return(
        <div className="Noticia">

            <img src={imagem} alt={alt} className="Noticia-imagem"/>
            <h2 className='Noticia-titulo'>{titulo}</h2>
            <p className="Noticia-descricao">{descricao}</p>
            <p className="Noticia-categoria">{categoria}</p>
        </div>
    );
};

export default NoticiaComponente;