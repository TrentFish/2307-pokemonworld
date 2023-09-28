import React, { useState } from "react";
import { Link } from "react-router-dom";

const Trainers = ({trainers}) => {
  const [trainerName, setTrainerName] = useState('')
    return (
      <div>
        <h1>All the Trainers</h1>
        {
          trainers.map((trainer) => {
            return(
                <div key={trainer.id}>
                    <Link to={`/trainers/${trainer.id}`}> <h3 >{trainer.name}</h3></Link>
                </div>
             
            )
          })
        }
        <form>
        <input placheholder='trainer' value={ trainerName } onChange={ ev => setTrainerName(ev.target.value)}/>
          <button disabled={!trainerName}>Add Trainer</button>
        </form>
      </div>
    )
  }

  export default Trainers