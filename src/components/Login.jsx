import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = ({login,error}) => {
  

   

     
 

  return (
    <div className="tab-content">
      <h1 style={{color:"red"}}>{error ?  " nom d'utilisateur ou mot de passe invalide " : null }</h1>
      <form className="form-profile" onSubmit={login}>
        <fieldset>
          <legend>Se connecter</legend>
          <div className="form-group">
            <label htmlFor="matricule">matricule</label>
            <input
              type="INT"
              name="matricule"
              className="form-control"
              id="matricule"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Se connecter
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
