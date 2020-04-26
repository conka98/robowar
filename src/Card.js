import React from 'react';
import 'tachyons';


const Card=({id,name,email})=>{
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-4">
			<img src={`https://robohash.org/${id}?size=200x200`} alt={name}/>		
			<p>{name}</p>
			<p>{email}</p>
		</div>
	);
}

export default Card;