import React from 'react'
import styled from 'styled-components'
import iconCoin from '../assets/images/iconecPoints.png'
import bgImage from '../assets/images/bgImage2.jpg'



function Head(){


    const HeadContainer =styled.div`

        width:100%;
        text-align:center;
        display:grid;
        grid-template-rows: 10px 60px 150px;
        grid-template-columns: 1fr;
        grid-template-areas: "icon" "title" "subtitle";
        background: url(${bgImage}) #1f4278;
        font-family: 'Poppins';
        
       
     
        background-blend-mode: overlay;

        grid-area:head;



        

    `


    const Icon= styled.img`

        margin-left: auto;
        margin-right: auto; 
        grid-area: icon;
        margin-top:20px;


        
    `

    const Tittle = styled.p`

        font-size:50px;
        font-weight: bold;
        grid-area: title;
        color:white;
       

    `

    const SubTitle = styled.p`
    
       
        font-size:40px;
        grid-area: subtitle;
        color:white;
     
    
    
    `



    return (

        <HeadContainer>
            <Icon src={iconCoin}/>
            <Tittle>100 ecPoints</Tittle>
            <SubTitle>para você</SubTitle>
        </HeadContainer>



    )

}


export default Head