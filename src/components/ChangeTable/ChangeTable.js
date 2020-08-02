import React from 'react';

const ChangeBtn = ({changeinfo}) =>{
	return (
		<button className = 'grow pa1 ba bw1 br2 pointer bg-light-blue' onClick ={changeinfo} > Update Table </button>
		);
}

export default ChangeBtn;