import React, { Component } from 'react';
import styled from 'styled-components'
import Head from '../components/Head'
import Warning from '../components/Warning'
import Invites from '../model/Invites'




class invitesScreen extends Component {



  state = {

    warnings :[]

  }

 
  componentDidMount(){
    
    const invites = new Invites()

    this.getData(invites)
    
  }



  getData = async(invites) =>{

    var data = await invites.getInvites()
    
    
    var warnings = []



    for(var i=0; i< data.length; i++){

        let warning = data[i]
        let icon = null;

        if(warning.ecPoints){
          icon = 'ecPoints'

        }
        else if(warning.ecDay){
          icon = 'ecDay'
        }
        

        warnings.push(
          <Warning key={i} email={warning.email} icon={icon} 
           invited={warning.invited} registered={warning.registered} 
           complete={warning.complete}/>
           

        )
       

    }

  
    this.setState({warnings})

  
 
   }



  render(){


    return (
    
      <Container>
        <Head/>
        <ContainerEmails >
          <TitleEmails>CONFIRA O STATUS DOS SEUS CONVITES</TitleEmails>
          <SubtitleEmails> {this.state.warnings.length} convites realizados</SubtitleEmails>
          { this.state.warnings.length >0 ? 
          
            this.state.warnings
        
        :  <Alert>Ops, você não convidou ninguém ainda</Alert>}
        
        </ContainerEmails>
      </Container>
      
    );

  }
}



  
const Container = styled.div`
  
      
 
       
  
background-color: #dedede;



display:grid;
grid-template-rows: 280px 1fr 100px;
grid-template-columns: 1fr;
grid-template-areas: "head" "list" "empty";


height:100%;
width:100%;

align-items: start;



`


const ContainerEmails = styled.div`


padding-bottom:100px;
padding-top: 40px;
justify-self: center;
align-self: center;
width:80%;



background-color:white;


display:grid;
grid-template-rows: 30px 80px ;
grid-template-columns: 1fr;
grid-template-areas: "titleEmails " "subTitleEmails " ;


grid-area:list;



`


const TitleEmails = styled.h2`

  text-align:center;
  justify-self:center;
  color:black;
  grid-area: titleEmails;
  font-family: Poppins;
  width:80%;

  @media (max-width:560px){

        
      font-size:12px;

  }



`

const SubtitleEmails = styled.h4`
text-align:center;  
color:#666666;
grid-area:subTitleEmails;
font-family: Poppins;


@media (max-width:560px){

  font-size:10px;

}

`

const Alert = styled.div`

  background-color:#f8d7da;
  border: 1px solid #f5c6cb;
  color:#721c24;
  padding:5px;
  font-family:Poppins;
  text-align:center;
  width:80%;
  justify-self:center;
  border-radius:5px;

`

export default invitesScreen;
