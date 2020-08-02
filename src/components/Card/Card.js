import React from 'react';


const Card = ({name,onchange})=> {
	return(
		<div  className = 'tc dib pa3 ma1' id = 'card'>
		<img className = 'grow pointer' alt = 'bdayboi' src = {require(`./${name}.jpg`)} />
		<h2> {name} </h2>
		<p> chelav done ? </p>
		<input  type="radio" id="yes" name={name} value="yes" onChange = {onchange} />
		<label for="male">Yes</label><br/><br/>
		<input type="radio" id="no" name={name} value= "no" onChange = {onchange} />
		<label for="female">No</label><br/> 
		</div>
		);

}

export default Card;