import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { ChevronUp } from 'react-feather';
import Navbar from '../../shared/Navbar';
import SideNav from '../../shared/SideNav';
import help from '../../assets/icons/help.png'

class dashboard extends Component {
    render() {
        return (
            <>
                <Container maxWidth={false} className='dashboard' >
                <Navbar />
                <div className="content">
                    <SideNav/>
                    <div className="section">
                        <div className="header">
                            <h1>Dashboard</h1>
                            <div className="calen">
                                caldendare
                            </div>
                        </div>
                        <div className="market">
                            <h2>MARKET INSIGHT</h2>
                            <div className="help">
                                <img src={help} alt="lamp" /> 
                                <a href="#">Click here for help</a>
                                <ChevronUp />
                            </div>
                        </div>
                        <Grid xs={3} className='cart'>dfsadfasdf</Grid>
                    </div>
                </div>
                </Container>
            </>
        );
    }
}

export default dashboard;