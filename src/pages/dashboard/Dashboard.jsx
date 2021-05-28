import { Container, Grid, ClickAwayListener } from '@material-ui/core';
import React, { Component } from 'react';
import { ArrowDown, ChevronDown, ChevronUp, MoreVertical } from 'react-feather';
import Navbar from '../../shared/Navbar';
import SideNav from '../../shared/SideNav';
import help from '../../assets/icons/help.png'
import sales from '../../assets/icons/sales.svg'
import product from '../../assets/images/product.png'
import calendar from '../../assets/images/calendar.png'
import Chart from './Chart';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';

class dashboard extends Component {
    state ={
        best : [1,1,1,1,1,],
        top : [1,1,1,1,1,],
        dateRange :[ {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }],
        displayCalendar : false,
        dataChart : [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
        ],
        data : []
    }

    componentDidMount(){
        const data = this.state.dataChart.map(res=> ({
            name : res, gross: Math.floor(Math.random()*97000) + 10000, 
            nett : Math.floor(Math.random()*80000) + 10000, 
            apv :Math.floor(Math.random()*90000) + 10000
        }))
        this.setState({
            data : data
        })
    }

    handleDate = (item)=>{
        console.log(item)
        const data = this.state.dataChart.map(res=> ({
            name : res, gross: Math.floor(Math.random()*97000) + 10000, 
            nett : Math.floor(Math.random()*80000) + 10000, 
            apv :Math.floor(Math.random()*90000) + 10000,
            upt :Math.floor(Math.random()*90000) + 10000,
        }))
        this.setState({
            dateRange : [item.selection],
            data : data
        })
    }

    handleClickAway = ()=>{
        this.setState({displayCalendar : false})
    }
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
                                <button className='display-cal' onClick={()=> this.setState({displayCalendar : !this.state.displayCalendar})}>
                                    <div className="wrap-img">
                                        <img src={calendar} alt="period" />
                                        Period 
                                    </div>
                                    <span>{format(this.state.dateRange[0].startDate, 'dd MMMM yyyy')}</span> -
                                    <span>{format(this.state.dateRange[0].endDate, 'dd MMMM yyyy')}</span>
                                    <ChevronDown/>
                                </button>
                                {
                                    this.state.displayCalendar? 
                                    <ClickAwayListener onClickAway={this.handleClickAway}>
                                        <div className="wrap-calendar">
                                            <DateRangePicker
                                                onChange={this.handleDate}
                                                showSelectionPreview={true}
                                                moveRangeOnFirstSelection={false}
                                                months={2}
                                                ranges={this.state.dateRange}
                                                direction="horizontal"
                                                rangeColors='white'
                                                // showPreview={false}
                                                showDateDisplay={false}
                                                color={'#37B04C'}
                                                maxDate={new Date()}
                                            />
                                        </div>
                                    </ClickAwayListener>
                                    :null
                                }
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
                            <Grid xs={12} sm={12} md={6} item>
                                <div className="wrap-card">
                                    <div className="title">AVERAGE PURCHASE VALUE <MoreVertical /></div>
                                    <Chart data={this.state.data}/>
                                </div>
                            </Grid>
                            <Grid xs={12} sm={12} md={3} item>
                                <div className="wrap-card">
                                    <div className="title">BEST SELLING SKU <MoreVertical /></div>
                                    <ul className='list-average-prod'>
                                        {
                                            this.state.best.map((res,i)=>(
                                                <li className={i === 0? 'active' : null} key={i}>
                                                    <img src={product} alt="prod" />
                                                    <div className="desc">
                                                        <p className="title">[Nama Product]</p>
                                                        <div className="price-desc">
                                                            Rp XXXX <span>[jml terjual]</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </Grid>
                            <Grid xs={12} sm={12} md={3} item>
                                <div className="wrap-card">
                                    <div className="title">TOP COMPETITOR SKU <MoreVertical /></div>
                                    <ul className='list-average-prod'>
                                        {
                                            this.state.top.map((res,i)=>(
                                                <li className={i === 0? 'active' : null} key={i}>
                                                    <img src={product} alt="prod" />
                                                    <div className="desc">
                                                        <p className="title">[Nama Product]</p>
                                                        <div className="price-desc">
                                                            Rp XXXX <span>[jml terjual]</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
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