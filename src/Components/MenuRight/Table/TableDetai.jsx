import React, { Component } from "react";
import RowInTable from './RowInTable'
import axios from "axios";
import TheadTable from "./TheadTable";

export default class TableDetai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  async componentDidMount() {
    let arrayEvent = [];
    await axios({
      url: `http://ec2-3-0-89-120.ap-southeast-1.compute.amazonaws.com:3000/api/all_events`,
      method: `get`
    })
      .then(response => {
        //   console.log(response.data)
        response.data.forEach(item => {
          const event = {
            id: item._id,
            event_name: "Khánh Đẹp trai",
            event_mail_type: item.mail_type,
            event_membercreator: item.membercreator,
            event_date: item.date
          };
          arrayEvent.push(event);
        });
        this.setState({
          events: arrayEvent
        });
      })
      .catch(error => console.log(error));
  }
  getListEvent = () => {
    if (this.state.events) {
      return this.state.events.map(value => {
        return (
          <RowInTable
            key={value.id}
            event_id={value.id}
            event_name={value.event_name}
            event_mail_type={value.event_mail_type}
            event_date={value.event_date}
            event_membercreator={value.event_membercreator}
          />
        );
      });
    }
  };
  render() {
    return (
      <table className="Table">
        <TheadTable/> 
        <tbody className="Table-body">
          {this.getListEvent()} {/* hàm sinh các dòng event*/}
        </tbody>
      </table>
    );
  }
}
