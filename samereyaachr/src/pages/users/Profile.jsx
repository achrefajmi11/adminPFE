import React from "react";

const Profile = (props) => {
  return (
    <div className="tab-content">
      <div className="">
        <div className="card border-info mb-3">
          <div className="card-header">Informations</div>
          <div className="card-body">
            <h4 className="card-title">
               <span>VOS CORDONNEES </span>
            </h4>
            <p className="card-text">date de création : 10/05/2021</p>
              

            <table className="tabsprofile">
    <caption>Vos coordonnées sont sécurisées</caption>
    <tr>
        <th scope="col">cordonées</th>
        <th scope="col">employer</th>
        
    </tr>
    <tr>
        <th scope="row">matricule</th>
        <td>1222 </td>
        
    </tr>
    <tr>
        <th scope="row">nom </th>
        <td>samer</td>
        
    </tr>
    <tr>
        <th scope="row">prenom</th>
        <td>bouchen</td>
        
    </tr>
    <tr>
        <th scope="row">login</th>
        <td>samer12</td>
        
    </tr>
    <tr>
        <th scope="row">adresse</th>
        <td>bouchen</td>
        
    </tr>
  
    </table>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;