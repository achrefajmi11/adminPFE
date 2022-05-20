import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
//import axios from "axios";
//import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./cordonnee.css";

export default function User() {
  
    return (
      

    <div className="cordonnee">
      <div className="userTitleContainer">
     
        
      </div>
      <div className="userContainer">
        <div className="userShow">
        <h1 className="userTitle">ADMIN</h1>
          <div className="userShowTop">
          
            
            <div className="userShowTopTitle">
              <span className="userShowUsername"> Bassem gabsi</span>
              <span className="userShowUserTitle">Responsable RH</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Bassem gabsi</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">02.08.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">70029240</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">bassem.gabsi@tn.duravit.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle"></span>
            </div>
          </div>
        </div>
        
           </div>
      </div>
    
  );
}
