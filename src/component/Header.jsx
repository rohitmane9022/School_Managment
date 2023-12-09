import { NavLink } from "react-router-dom";

export default function Header(){
  return (
  <div style={{display:"flex", justifyContent:"space-between", margin:"20px 50px"}}>
    <div style={{fontSize:"20px"}}>Mumbai School</div>
    <nav >
      <NavLink to='/'style={{margin:"0 10px", fontSize:"18px",listStyleType:"none",textDecoration:"none",color:"black"}}>Home</NavLink>
      <NavLink to='/teachers'style={{margin:"0 10px", fontSize:"18px",listStyleType:"none",textDecoration:"none",color:"black"}}>Teachers</NavLink>
      <NavLink to='/students'style={{margin:"0 10px", fontSize:"18px",listStyleType:"none",textDecoration:"none",color:"black"}}>Students</NavLink>
      <NavLink to='/class'style={{margin:"0 10px", fontSize:"18px",listStyleType:"none",textDecoration:"none",color:"black"}}>Class view</NavLink>
     
    </nav>
  </div>
  )
}