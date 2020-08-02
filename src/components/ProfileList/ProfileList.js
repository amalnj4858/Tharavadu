import React from 'react';
import Profile from '../Card/Profile';

const ProfileList = ({info})=>{
	return(
		<div>
			{info.map(user=><Profile name = {user.name} nickname = {user.nickname} />)}
		</div>
		);
}


export default ProfileList;