import React, {useContext} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import DeviceContext from "../../../DeviceContext";
import "../tabs/renderCard/renderCard.scss";
import {
    apiUniqloManAll,
    apiUniqloWomanAll,
    apiUniqloManLimitedtime,
    apiUniqloWomanLimitedtime,
    apiUniqloManPricedown,
    apiUniqloWomanPricedown,
    apiUniqloManOnlineonly,
    apiUniqloWomanOnlineonly,
    apiUniqloManNewgood,
    apiUniqloWomanNewgood
} from "../../../api/uniqloApi";
import TabAll from "../tabs/tabAll/tabAll";
import TabPricedown from "../tabs/tabPricedown/tabPricedown";
import TabLimitedtime from "../tabs/tabLimitedtime/tabLimitedtime";
import TabOnlineonly from "../tabs/tabOnlineonly/tabOnlineonly";
import TabNewgood from "../tabs/tabNewgood/tabNewgood";
import "./uniqlo.scss";

const TabApiCondition = (props) => {
    if (props.sex == 'man') {
        if (props.conditon == 'all') {
            return (<TabAll axios={apiUniqloManAll}/>);
        } else if (props.conditon == 'pricedown') {
            return (<TabPricedown axios={apiUniqloManPricedown}/>);
        } else if (props.conditon == 'limitedtime') {
            return (<TabLimitedtime axios={apiUniqloManLimitedtime}/>);
        } else if (props.conditon == 'onlineonly') {
            return (<TabOnlineonly axios={apiUniqloManOnlineonly}/>);
        } else if (props.conditon == 'newgood') {
            return (<TabNewgood axios={apiUniqloManNewgood}/>);
        }
    } else {
        if (props.sex == 'woman') {
            if (props.conditon == 'all') {
                return (<TabAll axios={apiUniqloWomanAll}/>);
            } else if (props.conditon == 'pricedown') {
                return (<TabPricedown axios={apiUniqloWomanPricedown}/>);
            } else if (props.conditon == 'limitedtime') {
                return (<TabLimitedtime axios={apiUniqloWomanLimitedtime}/>);
            } else if (props.conditon == 'onlineonly') {
                return (<TabOnlineonly axios={apiUniqloWomanOnlineonly}/>);
            } else if (props.conditon == 'newgood') {
                return (<TabNewgood axios={apiUniqloWomanNewgood}/>);
            }
        }
    }
}

const Uniqlo = (props) => {
    const device = useContext(DeviceContext);

    if (device == "laptop") {
        return (
            <div className="text-center">
                <h1>UNIQLO {props.sex} {device}</h1>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" unmountOnExit="true">
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
                <h1>UNIQLO {props.sex} {device}</h1>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" unmountOnExit="true">
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
export default Uniqlo;