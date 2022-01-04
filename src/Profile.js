import { useState } from 'react'


function Profile(){
    const[loggedIn , setLoggedIn]=useState(3);
    return(
        <div>
            {loggedIn==1?
            <h1>welcome user 1</h1>
            :loggedIn ==2?<h1>wlcome user 2</h1>
            :<h1>welcome 3</h1>
            }
        </div>
    );
}
export default Profile;