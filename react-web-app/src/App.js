import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GetReservationRequest, ListReservationsRequest} from './grpc/src/main/proto/reservation_service_pb'
import {ReservationServiceClient} from './grpc/src/main/proto/reservation_service_grpc_web_pb'

const srv = new ReservationServiceClient("http://localhost:8080")

class App extends Component {

    state = {
        response: null,
        listResult: []
    }

    call = () => {
        const req = new GetReservationRequest()
        req.setId("a56d0333-dec9-4383-8956-40f060a16338")
        srv.getReservation(req, {}, (err, response) => {
            if (err) {
                console.log("error get reservation", err)
            }
            this.setState({response: response})
        })

        const listReq = new ListReservationsRequest()

        const call = srv.listReservations(listReq, {})
        call.on('data', (received) => {
            console.log("received", received)
            this.setState({listResult: [...this.state.listResult, received]})
        } )
        call.on('end', (received) => console.log("end", received) )
        call.on('status', (received) => console.log("status", received) )
        call.on('error', (received) => console.log("error", received) )
        console.log("stream", call)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

            <button onClick={this.call}>List meetings</button>

            {this.state.response && this.state.response.getRoom()}

            {this.state.listResult.map(i => (<div>{i.getVenue()} with {i.getAttendeesList().map(a => a.getFirstname() + ' ' + a.getLastname())}</div>))}
        </header>
      </div>
    );
  }
}

export default App;
