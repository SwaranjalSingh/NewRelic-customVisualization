import React from 'react';
import PropTypes from 'prop-types';
import {LineChart, SparklineChart, PieChart} from "nr1";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from 'recharts';
import {Card, CardBody, HeadingText, NrqlQuery, Spinner, AutoSizer} from 'nr1';

export default class SwaranjalVisualization extends React.Component {
    render() {
        return <>
        <p style={{color: "red", padding:"10px", alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is LineChart</p>
        <LineChart style={{width:"90%", height:"95%"}}
        accountId = {3931820}
        query = "SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'MzkzMTgyMHxJTkZSQXxOQXw3ODc0NTI2NTU2MDM5NzY3NjY' TIMESERIES auto"
        fullWidth
        fullHeight
        />
        
        <p style={{color: "red", padding:"10px" , alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is PieChart</p>
        <PieChart
        accountId = {3931820}
        query = "SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'MzkzMTgyMHxJTkZSQXxOQXw3ODc0NTI2NTU2MDM5NzY3NjY' TIMESERIES auto"
        fullWidth
        fullHeight
        />
        {/* <NRQL/> */}
        </>;
      }
    }