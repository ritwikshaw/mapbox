import React  from 'react';
import Clock from 'react-live-clock';

export default class Header extends React.Component {
    render() {
        return(
        <div>
            <h3>Current Time</h3>    
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'IO/Chagos'} />
        </div>
        )
    }
}