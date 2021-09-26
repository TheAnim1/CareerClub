import React, { useEffect, useState } from 'react';
import AddedUser from '../AddedUser/AddedUser';
import User from '../User/User';

const Users = () => {

    const[users, setUsers]= useState([])

    // state for added users 

    const[addedUser, setAddedUser] = useState([])

    const handleAddedUser = (user)=>{
        const newUser = [...addedUser, user];

        setAddedUser(newUser);
    }

    useEffect(()=>{
        fetch("https://animfahad32.github.io/fakeData/fakedata.json")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])



    return (
        <div className="mt-5">
            <div className="row">
                {/* Employee Users */}
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-3 ms-2">
                        {
                           users.map((user)=><User

                           key = {user.id}
                           user={user}
                           handleAddedUser={handleAddedUser}
                           >


                           </User>) 
                        }
                    
                    
                    </div>
                </div>
                {/* Added Employees */}
                <div className="col-md-3 bg-success ps-0 bg-border2">
                    <AddedUser
                    addedUser={addedUser}
                    ></AddedUser>
                </div>
            </div>
        </div>
    );
};

export default Users;