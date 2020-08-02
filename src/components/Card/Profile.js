import React from 'react';


const Profile = ({name,nickname})=>{
	return(
	<div  className = 'tc dib pa3 ma2 grow' id = 'card'>
		<img className = ' pointer' alt = 'bdayboi' src = {require(`./${name}.jpg`)} />
		<h2> {name} </h2>
		<h3> aka </h3>
		<h2> {nickname} </h2>
		</div>
		);
}


export default Profile;