import React from 'react'
import styled from 'styled-components'




function StatusIndicator(props){



    const Convidado = styled.div`

    grid-area:invited;


    font-family:Poppins;
    text-align:center;
    align-items:center;

    padding:3px;


    border-width:5px;
    border-radius:5px;

    border: 1px solid ${props.invited === false ?'#355d9a' : 'white' };
    color: ${props.invited === false ? '#355d9a' : 'white'};
    background-color:${props.invited === false ? 'white' : '#65af3e'};


    `

    const Registrado = styled.div`

    grid-area:registered;

    font-family:Poppins;
    text-align:center;
    align-items:center;

    padding:3px;


    border-radius:5px;

    border: 1px solid ${props.registered === false ?'#355d9a' : 'white' };
    color: ${props.registered === false ? '#355d9a' : 'white'};
    background-color:${props.registered === false ? 'white' : '#65af3e'};


    `

    const Complete = styled.div`

    grid-area:completed;


    font-family:Poppins;
    text-align:center;
    align-items:center;

    padding:3px;


    border-radius:5px;
    border-radius:5px;


    border: 1px solid ${props.complete === false ?'#355d9a' : 'white' };
    color: ${props.complete === false ? '#355d9a' : 'white'};
    background-color:${props.complete === false ? 'white' : '#65af3e'};


    `


    return(
        <Container>
            <Convidado>Convidado</Convidado>
            <Registrado>Registrado</Registrado>
            <Complete>Complete</Complete>     
        </Container>




    )



}



const Container = styled.div`

    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "invited registered completed empty";
    grid-gap: 20px;

    font-size:12px;
    margin-left:10px;


    @media (max-width:560px){

        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "invited" "registered" "completed" ;
        grid-gap: 5px;
    }




`




export default StatusIndicator