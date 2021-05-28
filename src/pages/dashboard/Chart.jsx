import React, { Component } from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  

class Chart extends Component {
    render() {
        const {data} = this.props
        const renderLegend = (props) => {
            const { payload } = props;
          
            return (
              <ul className='legend-custom'>
                {
                  payload.map((entry, index) => (
                    <li key={`item-${index}`}> 
                        <div className="dot" style={{backgroundColor : entry.color}}></div> 
                        {entry.value}
                        {/* <pre>
                            {JSON.stringify(entry, null,2)}
                        </pre> */}
                    </li>
                  ))
                }
              </ul>
            );
          }
        return (
            <div style={{height : 360, paddingBottom : 20}}>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend iconType='circle' content={renderLegend} />
                <Bar dataKey="nett" stackId="a" barSize={20} fill="#37B04C" />
                <Bar dataKey="gross" stackId="a" barSize={20} fill="#289E45" />
                <Bar dataKey="apv" name='Average Purchase Value' stackId="a" barSize={20} fill="#7AE28C" />
                <Line type="monotone" dataKey="gross" fill="#FFE854" stroke="#FFE854" strokeWidth={2} />
                </ComposedChart> 
            </ResponsiveContainer>
            </div>
        );
    }
}

export default Chart;