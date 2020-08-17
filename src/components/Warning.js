import React from 'react'
import styled from 'styled-components'
import ecPointsIcon from '../assets/images/iconecPoints.png'
import ecDayIcon from '../assets/images/iconecDay.png'
import StatusIndicator from '../components/StatusIndicator'




function Warning(props){

    

    return(

        <Container>
            <ContainerWarnings>
                <Title>Oba! <strong>{props.email}</strong> { props.icon === 'ecPoints' ? 'se inscreveu, e você ganhou 100 eCPoints!': props.icon === 'ecDay' ? 'se inscreveu, e você ganhou 1 ecday!': 'se inscreveu, e estamos aguardando...' }</Title>
                <StatusIndicator invited={props.invited} registered={props.registered} complete={props.complete} />

            </ContainerWarnings>
            <ContainerIcons>
                {props.icon === 'ecPoints' &&
                    <Icon src={ ecPointsIcon} />
                }
                {props.icon === 'ecDay' &&
                    <Icon src={ ecDayIcon} />
                }
                
            </ContainerIcons>
            <ContainerLine>
                <Line/>
            </ContainerLine>
        </Container>

    );





}


const Container = styled.div`

        
    font-family:Poppins;


    display:grid;
    grid-template-rows: 1fr 20px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "message icon" "line line";

    @media (max-width:560px){

       
        grid-template-rows: 210px 1fr 20px;
        grid-template-columns: 1fr;
        grid-template-areas: "message" "icon" "line";
      
    }


`

const ContainerWarnings = styled.div`

    grid-area:message;
    margin-left:40px;
    width:80%;


    
    @media (max-width:560px){

        margin-left:10px;
        text-align:center;
        justify-self:center;

    }
`

const ContainerIcons = styled.div`

    grid-area:icon;
    text-align:end;
    align-self:end;
    margin-right:50px;
   

    @media (max-width:560px){

        margin-right:0px;
        text-align:center;
        align-self:center;
        justify-self:center;
        
      
    }


`

const Title = styled.p`

    color:#666666;
    font-size:13px;
    margin-left:12px;
    


`

const Icon = styled.img`


    justify-content:end;
    align-items:center;

`

const ContainerLine = styled.div`

    align-self:end;
    width: 92%;
    grid-area:line;
    justify-self: center;



`

const Line = styled.hr`

    color:#666666;


`



export default Warning;