import React from 'react';


const Navbar = ({text1,text2,text3,onclick})=>{
	return(
		<div style = {{'display':'flex','justify-content' :'flex-end' }}>
			<p className=' f3 dim pointer pa3 underline link' onClick = {()=>onclick('home')} > {text3} </p>
			<p className=' f3 dim pointer pa3 underline link' onClick = {()=>onclick('profiles')} > {text2} </p>
			<p className=' f3 dim pointer pa3 underline link' onClick = {()=>onclick('signin')} > {text1} </p>
		</div>
		)
}


export default Navbar;