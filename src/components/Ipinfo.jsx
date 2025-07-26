import React from "react";

export default function IpInfo(props) {
    return (
        <div className="card" style={{textAlign:"center"}}>
            <h2>Your IP Info</h2>
            <img style={{width:"250px", borderRadius:"100%", height:"200px"}} src={props.data?.flag.img} alt="Country flag" />
            <h1>{props.data?.country}</h1>
            <h3>{props.data?.city}</h3>
            <p>Ip: {props.data?.ip}</p>
            <p>Isp: {props.data?.connection.isp}</p>
            <p>latitude: {props.data?.latitude}</p>
            <p>longitude: {props.data?.longitude}</p>
        </div>
    )
}