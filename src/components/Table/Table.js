import React from 'react';
import Row from '../Row/Row';

const Table = ({info}) => {
		return(
			<div className = 'dib ba bw1 br2 pa1'>
				<table> 
					<tr>
						<th> Name </th>
						<th> Birthday </th>
						<th> Chelavs </th>
						<th> Status </th>						
					</tr>
					{info.map(user=><Row name = {user.name} birthday = {user.birthday} chelavs = {user.chelavs} status = {user.status} />)}
				</table>
			</div>
			);
	}


export default Table;