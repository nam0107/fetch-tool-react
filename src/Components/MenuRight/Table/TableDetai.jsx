import React, { Component } from "react";
import RowInTable from "./RowInTable";
import axios from "axios";
import TheadTable from "./TheadTable";
import PopupEvent from "./PopupEvent";

export default class TableDetai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      showPopup: false
    };
  }

  // convert date
  convertTime = time => {
    let results;
    // const dateE = new Date(time);
    // const SecondDateE = dateE.getTime();
    // const SecondDateV = (SecondDateE+7*3600*1000);

    // const date = new Date(SecondDateV);
    const date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    results = `${h}:${m}, ${dt}-${month}-${year}`;
    return results;
  };

  async componentDidMount() {
    let arrayEvent = [];
    await axios({
      url: `http://ec2-3-0-89-120.ap-southeast-1.compute.amazonaws.com:3000/api/all_events`,
      method: `get`
    })
      .then(response => {
        //   console.log(response.data)
        response.data.reverse();
        response.data.forEach(item => {
          const time = this.convertTime(item.date);
          const event = {
            id: item._id,
            event_name: item.mail_type,
            event_subject: item.subject_mail,
            event_membercreator: item.membercreator,
            event_date: time
          };
          arrayEvent.push(event);
        });
        this.setState({
          events: arrayEvent
        });
      })
      .catch(error => console.log(error));
  }

  getEvent = id => {
    this.setState({
      showPopup: !this.state.showPopup
    });
    console.log(id);
  };

  getListEvent = () => {
    if (this.state.events) {
      return this.state.events.map(value => {
        return (
          <RowInTable
            key={value.id}
            event_id={value.id}
            event_name={value.event_name}
            event_subject={value.event_subject}
            event_date={value.event_date}
            event_membercreator={value.event_membercreator}
            getIdEvent={id => this.getEvent(id)}
          />
        );
      });
    }
  };
  render() {
    return (
      <div>
        <PopupEvent></PopupEvent>
        <table className="Table">
          <TheadTable />
          <tbody className="Table-body">{this.getListEvent()}</tbody>
        </table>
      </div>
    );
  }
}
