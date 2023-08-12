import SubCompany from "./SubCompany";
import React, { Component } from 'react';


export default function Company(props) {
    return <SubCompany name={props.name} revenue={props.revenue}/>
}