import React, { useEffect } from 'react'
import{useRef,useState} from 'react'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

function Manager() {
  const ref= useRef();
  const passwordref = useRef();
  const [form, setform] = useState({site:"",username:"",password:""})
 const [passwordArray, setpasswordArray] = useState([])
 useEffect(()=>{
  let passwords = localStorage.getItem("passwords");
  if(passwords){
   setpasswordArray(JSON.parse(passwords));
  }

 },[])
  const showPassword =()=>{
    passwordref.current.type= "text";
    if(ref.current.src.includes("crosseye.png")){
      ref.current.src= "eye.png"
      passwordref.current.type="password"     
    }
    else{
      ref.current.src = "crosseye.png"
      passwordref.current.type="text"
    }
  }
  const savePassword = ()=>{
 console.log(form)
    setpasswordArray([...passwordArray,{...form,id:uuidv4()}]);
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...form,id:uuidv4()}]));
    console.log(passwordArray);
    setform({site:"",username:"",password:""});
    toast.success('Password saved', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
}
  
  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  const copyText = (text)=>{
    toast.success('Copied to clipboard', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      

    navigator.clipboard.writeText(text);
  }
  const editPassword = (id)=>{
    console.log('Editing password with id',id)
    setform(passwordArray.filter(i=>i.id===id)[0]);
    setpasswordArray(passwordArray.filter(item=>item.id!==id));

  }
  const deletePassword = (id)=>{
    let sure = confirm("Do you want to delete?")
    if(sure){
      console.log('Deleting password with id',id)
      setpasswordArray(passwordArray.filter(item=>item.id!==id));
      localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    }
    toast.success('Password deleted', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  }
  return (
    <>
<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition="Bounce"
/>
{/* Same as */}
<ToastContainer />




<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div></div>


<div className="p-2 md:p-0 md:mycontainer">
  <h1 className='text-4xl font-bold text-center'>
  <span className='text-green-700'>&lt;</span>
      Pass
      <span className='text-green-700'>Store/ &gt;</span>
  </h1>
  <p className='text-lg text-green-900 text-center'>Your own password manager</p>
<div className='text-white flex flex-col p-4 gap-8 items-center' >
<input onChange={handleChange} placeholder='Enter website url' value={form.site} className='rounded-full border border-green-500 text-black w-full p-4 py-1' type='text' name='site' id='site'/>
<div className="flex flex-col md:flex-row  text-black w-full gap-8">
<input onChange={handleChange} placeholder='Enter Username' vlaue={form.username} className='rounded-full border border-green-500  w-full p-4 py-1 ' type='text' name='username' id='username'/>
<div className="relative w-80">
<input ref={passwordref} onChange={handleChange}  placeholder='Enter Password' value={form.password} className='rounded-full border border-green-500  w-full p-4 py-1 px-12' type='password' name='password' id='password'/><span className='absolute right-[4px] top-2 cursor-pointer' onClick={showPassword}><img ref={ref} width={26} className='p-1' src='eye.png'  /></span>
</div>
</div>
<button onClick={savePassword} className='text-black flex justify-center items-center rounded-full gap-3 bg-green-500 px-8 py-3 w-fit hover:bg-green-400 border border border-green-800 '>
<lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover"
    >
</lord-icon>
  Save Password</button>

  </div>


  <div className="passwords">
    <h2 className='font-bold text-2xl py-3 '>Your Passwords</h2>
    {passwordArray.length === 0 &&<div> No passwords to show</div>}
    {passwordArray.length !=0 &&<table className="table-auto w-full rounded-md overflow-hidden">
  <thead className='bg-green-800 text-white'>
    <tr>
      <th className='py-2 '>Website</th>
      <th className='py-2 '>Username</th>
      <th className='py-2 '>Password</th>
      <th className='py-2 '>Actions</th>

    </tr>
  </thead>
  <tbody className='bg-green-100'>
   {passwordArray.map((item,index)=>{
    return <tr key={index}>
      <td className='text-center py-2 border border-white'><a href={item.site} target='_blank'>{item.site}</a><div className='lordiconcopy inline-block cursor-pointer ml-3' onClick={()=>copyText(item.site)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
      </div> </td>
      <td className='text-center py-2 w-64 border border-white'>{item.username}
      <div className='lordiconcopy inline-block cursor-pointer ml-3' onClick={()=>copyText(item.username)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
      </div>
      </td>
      <td className='text-center py-2 border border-white gap-2'>{item.password}
      <div className='lordiconcopy inline-block cursor-pointer ml-3' onClick={()=>copyText(item.password)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
      </div>

      </td>
      <td className='text-center border border-white'>
    <span className='cursor-pointer inline-block ml-1' onClick={()=>{editPassword(item.id)}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-12 bi bi-pencil-square" viewBox="0 0 16 16">
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
    </svg>
    </span>
    <span className='inline-block ml-2 cursor-pointer' onClick={()=>{deletePassword(item.id)}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-12 bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>

    </span>
      </td>
    </tr>

   })}
  </tbody>
</table>
}
</div> 
</div>
  </>
  )
  
}


export default Manager
