import React from 'react';


const Row = ({name,birthday,chelavs,status})=>{
	return(
		<tr>
						<td> {name} </td>
						<td> {birthday} </td>
						<td> {chelavs} </td>
						<td> {status} </td>
		</tr>	
		)
}


export default Row;