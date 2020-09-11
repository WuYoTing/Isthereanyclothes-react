import React, {useContext, useState} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import DeviceContext from "../../../DeviceContext";
import "../../../stylesheets/view/card.scss";
import TabAll from "../tabs/tabAll";
import TabPricedown from "../tabs/tabPricedown";
import TabLimitedtime from "../tabs/tabLimitedtime";
import TabOnlineonly from "../tabs/tabOnlineonly";
import TabNewgood from "../tabs/tabNewgood";
import {
    apiGuManAll, apiGuWomanAll, apiGuManPricedown, apiGuWomanPricedown, apiGuManLimitedtime, apiGuWomanLimitedtime
    , apiGuManOnlineonly, apiGuWomanOnlineonly, apiGuManNewgood, apiGuWomanNewgood
} from "../../../api/guApi";

const TabApiCondition = (props) => {
    if (props.sex == 'man') {
        if (props.conditon == 'all') {
            return (<TabAll axios={apiGuManAll}/>);
        } else if (props.conditon == 'pricedown') {
            return (<TabPricedown axios={apiGuManPricedown}/>);
        } else if (props.conditon == 'limitedtime') {
            return (<TabLimitedtime axios={apiGuManLimitedtime}/>);
        } else if (props.conditon == 'onlineonly') {
            return (<TabOnlineonly axios={apiGuManOnlineonly}/>);
        } else if (props.conditon == 'newgood') {
            return (<TabNewgood axios={apiGuManNewgood}/>);
        }
    } else {
        if (props.sex == 'woman') {
            if (props.conditon == 'all') {
                return (<TabAll axios={apiGuWomanAll}/>);
            } else if (props.conditon == 'pricedown') {
                return (<TabPricedown axios={apiGuWomanPricedown}/>);
            } else if (props.conditon == 'limitedtime') {
                return (<TabLimitedtime axios={apiGuWomanLimitedtime}/>);
            } else if (props.conditon == 'onlineonly') {
                return (<TabOnlineonly axios={apiGuWomanOnlineonly}/>);
            } else if (props.conditon == 'newgood') {
                return (<TabNewgood axios={apiGuWomanNewgood}/>);
            }
        }
    }
}


const Gu = (props) => {
    const device = useContext(DeviceContext);

    if (device == "laptop") {
        return (
            <div className="text-center">
                <h1>GU {props.sex} {device}</h1>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="全部">
                        <TabApiCondition sex={props.sex} conditon="all"/>
                    </Tab>
                    <Tab eventKey="pricedown" title="特價">
                        <TabApiCondition sex={props.sex} conditon="pricedown"/>
                    </Tab>
                    <Tab eventKey="limitedtime" title="限時特價">
                        <TabApiCondition sex={props.sex} conditon="limitedtime"/>
                    </Tab>
                    <Tab eventKey="onlineonly" title="線上APP獨家">
                        <TabApiCondition sex={props.sex} conditon="onlineonly"/>
                    </Tab>
                    <Tab eventKey="newgood" title="新品">
                        <TabApiCondition sex={props.sex} conditon="newgood"/>
                    </Tab>
                </Tabs>
            </div>
        )
    } else {
        return (
            <div className="text-center">
                <h1>GU {props.sex} {device}</h1>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="全部">
                        <TabApiCondition sex={props.sex} conditon="all"/>
                    </Tab>
                    <Tab eventKey="pricedown" title="特價">
                        <TabApiCondition sex={props.sex} conditon="pricedown"/>
                    </Tab>
                    <Tab eventKey="limitedtime" title="限時特價">
                        <TabApiCondition sex={props.sex} conditon="limitedtime"/>
                    </Tab>
                    <Tab eventKey="onlineonly" title="線上APP獨家">
                        <TabApiCondition sex={props.sex} conditon="onlineonly"/>
                    </Tab>
                    <Tab eventKey="newgood" title="新品">
                        <TabApiCondition sex={props.sex} conditon="newgood"/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}


export default Gu;