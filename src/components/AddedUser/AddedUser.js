import React from 'react';
import "./AddedUser.css";

const AddedUser = (props) => {
    
    const {addedUser} = props;
    const totalBudget=(preValue, currValue)=> preValue + currValue.salary
    const total = addedUser.reduce(totalBudget,0)
    console.log(addedUser);
    return (
        <div className="mt-5 ">
            <h1 className="text-light bg-danger ps-5 bg-border2">Added Employees</h1>
            <p className="text-light ps-5 ">Total Employee : {addedUser.length}</p>
            <p className="text-light ps-5 " >Total Budget: $ {total} </p>
            <p className="text-light ps-5 ">Added Employee Names :
            {
                    addedUser.map(addedUser => <li
                    key={addedUser.id}
                    >
                        {addedUser.name}

                    </li>)
                }
            </p>
        </div>
    );
};

export default AddedUser;