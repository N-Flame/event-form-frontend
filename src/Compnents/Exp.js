// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import { EventList, EventShow, EventEdit } from "../admin/Events"
import { StatsList } from "../admin/Stats"
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


const Exp = () => (
    <Admin dataProvider={simpleRestProvider('http://localhost:5001')}>
        <Resource name="events" list={EventList} show={EventShow} edit={EventEdit}/>
        <Resource name="stats" list={StatsList} create={null} icon={TrendingUpIcon}/>
    </Admin>
);

export default Exp;