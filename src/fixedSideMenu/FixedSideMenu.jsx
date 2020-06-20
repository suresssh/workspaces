import React from 'react';
import './FixedSideMenu.css';
export default class FixedSideMenu extends React.Component {
    render() {
        return (
            <div className={'bg-dark sidenav'} >
                <div className="col">
                    <button className="btn"><i className="fa fa-bell-o text-white"></i></button>
                    <button className="btn"><i className="fa fa-download text-white"></i></button>
                </div>
                <div className="bottom col">
                    <button className="btn"><i className="fa fa-calendar-check-o text-white"></i></button>
                    <button className="btn"><i className="fa fa-user-plus text-white"></i></button>
                    <button className="btn"><i className="fa fa-search text-white"></i></button>
                    <button className="btn"><i className="fa fa-question text-white"></i></button>
                </div>
                <div className={'fixed-bottom'} >
                    <button className="btn"><i className="fa fa-user-circle-o fa-3x text-white"></i></button>
                </div>
            </div>
        )

    }

}