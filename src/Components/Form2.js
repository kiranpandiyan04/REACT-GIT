import '../Assests/css/style.css'
import { UserCircle } from 'lucide-react';  
const Form2 =() =>{
    const func=() =>{
        alert('completed succesfully')
    }
    return(
        <>
        <div className='fl'>
            <form onSubmit={func}>
            <h1><i>Login <UserCircle /></i></h1>
                <input type='textfield' placeholder='Name' className='in'></input><br/>
                <input type='email' placeholder='email id' className='in'></input><br/>
                <input type='tel' placeholder='ph no' className='in'></input><br/>
                <input type='textfield' placeholder='userName' className='in'></input><br/>
                <input type='password' placeholder='password' className='in'></input><br/>
                <input type='submit' value='submit' className='hl'></input>
            </form>
        </div>
        </>      
    )
}
export default Form2;
