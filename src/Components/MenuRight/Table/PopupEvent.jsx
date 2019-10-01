import React, { Component } from "react";
import './RowInTable.css';
export default class PopupEvent extends Component {
  render() {
    return (
      <div class="popup" href="#">
        <div class="popup-content">
          {/* <a href="#" class="close">
            x
          </a> */}
          <h5 style={{fontWeight: 'bolder', textAlign: "center", paddingTop: '8px'}}>Jd Send</h5>
          <hr></hr>
          <div>
          <h6 style={{paddingLeft: '10px'}}>Event Creator: <span style={{fontWeight: 'bolder', color: '#2fb5ba'}}>Hoàng Khánh</span></h6>
          <h6 style={{paddingLeft: '10px'}}>Subject Mail: <span style={{fontWeight: 'bolder'}}>[FETCH TECHNOLOGY] - Interview Invitation (via Zoom) - nodejs</span></h6>
          <h6 style={{paddingLeft: '10px'}}>Date made: <span style={{fontWeight: 'bolder'}}>10:00, 29-09-2019</span></h6>
          <h6 style={{paddingLeft: '10px'}}>Infomation Event: </h6>
          <h6 style={{paddingLeft: '40px'}}>Mail Type: <span style={{fontWeight: 'bolder'}}>Jd Send</span></h6>
          <h6 style={{paddingLeft: '40px'}}>HR Name: <span style={{fontWeight: 'bolder'}}>Hoài Nam</span></h6>
          <h6 style={{paddingLeft: '40px'}}>Candidate Name: <span style={{fontWeight: 'bolder'}}>Nguyễn Hùng</span></h6>
          <h6 style={{paddingLeft: '40px'}}>Candidate Email: <span style={{fontWeight: 'bolder'}}>nguyenhung@gmail.com</span></h6>
          <h6 style={{paddingLeft: '40px'}}>Candidate Phone: <span style={{fontWeight: 'bolder'}}>0983483698</span></h6>
          <h6 style={{paddingLeft: '40px'}}>Position: <span style={{fontWeight: 'bolder'}}>Nodejs</span></h6>
          <h6 style={{paddingLeft: '40px'}}>Candidate Email: <span style={{fontWeight: 'bolder'}}>nguyenhung@gmail.com</span></h6>
          
          
          </div>
           
        </div>
      </div>
    );
  }
}
