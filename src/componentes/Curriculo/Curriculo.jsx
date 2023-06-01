import React from "react";

import "./Curriculo.css";

function Curriculo(props) {
    const { resumo, experienciaAcademica, experienciaProfissional } = props.curriculo;

    if(!resumo || !experienciaAcademica || !experienciaProfissional) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <section>
                <h2>Resumo</h2>
                <p>{resumo}</p>
            </section>

            <section>
                <h2>Acadêmico</h2>
                <ul>
                    {experienciaAcademica.map((item, index,) => (
                        <li key={index}>
                            <b>({item.anoinicio} - {item.anofim})</b> {item.titulo} | {item.descricao};
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Profissional</h2>
                <ul>
                    {experienciaProfissional.map((item, index) => (
                        <li key={index}>
                            <b>({item.anoinicio} - {item.anofim})</b> {item.titulo} | {item.descricao} | {item.tipo};
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Curriculo;