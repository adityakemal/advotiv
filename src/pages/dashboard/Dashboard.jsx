import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { ArrowDown, ChevronUp, MoreVertical } from 'react-feather';
import Navbar from '../../shared/Navbar';
import SideNav from '../../shared/SideNav';
import help from '../../assets/icons/help.png'
import sales from '../../assets/icons/sales.svg'

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
                        <Grid md={12} className="market">
                            <h2>MARKET INSIGHT</h2>
                            <div className="help">
                                <img src={help} alt="lamp" /> 
                                <a href="#">Click here for help</a>
                                <ChevronUp />
                            </div>
                        </Grid>
                        <Grid md={3} className='cart'>
                            <div className="title">
                                Sales Turnover
                                <MoreVertical />
                            </div>
                            <div className="nominal">
                                <div className="price">
                                    <p>Rp 3,600,000</p>
                                    <div className='desc'>
                                            <ArrowDown/> 
                                        <b> 
                                            13.8% <span>last period in product sold</span> 
                                        </b>
                                    </div>
                                </div>
                                <img src={sales} alt="sales" />
                            </div>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid md={6} item>
                                <div className="wrap-card">
                                    <div className="title">AVERAGE PURCHASE VALUE <MoreVertical /></div>
                                </div>
                            </Grid>
                            <Grid md={3} item>
                                <div className="wrap-card">
                                    <div className="title">BEST SELLING SKU <MoreVertical /></div>
                                </div>
                            </Grid>
                            <Grid md={3} item>
                                <div className="wrap-card">
                                    <div className="title">TOP COMPETITOR SKU <MoreVertical /></div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                </Container>
            </>
        );
    }
}

export default dashboard;