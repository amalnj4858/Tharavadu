import React from 'react';
import Card from '../Card/Card';


const CardList = ({info,onSelect}) =>{
	return(
		<div>
			{info.map(user=><Card name = {user.name} onchange = {onSelect}  /> )}
		</div>
		);
}


export default CardList;