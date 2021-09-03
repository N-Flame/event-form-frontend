import * as React from "react";
import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, BooleanInput, Create, ArrayField, CardActions, DateInput, Filter } from 'react-admin';
import DisplayStats from "../Compnents/DisplayStats";

const NoneActions = props => (
    <CardActions />
);

export const StatsList = props => (
    <>
        <DisplayStats />
    </>
);