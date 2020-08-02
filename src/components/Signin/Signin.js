import React from 'react';


const Signin = ({onclick})=>{

return (
<div className ="ba bw1 br2 dib" style = {{'width' : 'fit-content'}} >
	<main class="pa4 black-80">
	  <form class="measure center">
	    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
	      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
	      <div class="mt3">
	        <label class="db fw6 lh-copy f6" for="email-address">Name</label>
	        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="nameInput" />
	      </div>
	      <div class="mv3">
	        <label class="db fw6 lh-copy f6" for="password">Password</label>
	        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
	      </div>
	    </fieldset>
	    <div class="">
	      <input class="b ph3 pv2 input-reset ba bw1 br2 bg-transparent grow pointer f6 dib" type="button" value="Sign in" onClick = {onclick} />
	    </div>
	  </form>
	</main>
</div>
		);
}


export default Signin;