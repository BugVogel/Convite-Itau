import axios from 'axios'


function Invites(){

    axios.defaults.baseURL ='http://localhost:3001'

}


Invites.prototype.getInvites = async function(){

    var teste = await axios.get('/invites')
    .catch(err =>{

        console.log('error:'+err)
    })

    
    return teste.data;



}


export default Invites;