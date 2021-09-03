import * as React from "react";
import '../App.css'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    Show,
    SimpleShowLayout,
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    SelectInput,
    Create,
    DateInput,
    FormDataConsumer,
    ArrayInput,
    SimpleFormIterator,
    DateTimeInput,
    ArrayField,
    SingleFieldList,
    BooleanField,
    ReferenceField,
    RichTextField,
    CheckboxGroupInput,
    Filter,
    useListContext,
    TopToolbar,
    sanitizeListRestProps,
    CreateButton,
    ExportButton,
    required,
    EmailField,
    ReferenceInput,
    ChipField,
    useRecordContext,
    SearchInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// Style for Expand View, Material UI
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'black',
    },
  }));
  
// Interested Courses Field
const ICField = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    return <span>{record[source].join(', ')}</span>;
}

/*TextField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};*/

// Expand View Function
/*function ExpandTaskRow(props) {
    const classes = useStyles();
    return (
      <div {...props} className={classes.root} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <span className='ExpandViewField'>Contact No: </span><a href={`Tel: ${props.record.clientContact}`}><Paper className={classes.paper}>{props.record.clientContact}</Paper></a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <span className='ExpandViewField'>Email ID: </span><a href={`mailto: ${props.record.email}`}><Paper className={classes.paper}>{props.record.email}</Paper></a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <span className='ExpandViewField'>Qualification: </span><Paper className={classes.paper}>{props.record.qualification}</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <span className='ExpandViewField'>Location: </span><Paper className={classes.paper}>{props.record.location}</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <span className='ExpandViewField'>Form Name: </span><Paper className={classes.paper}>{props.record.form_name}</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <span className='ExpandViewField'>Client Message: </span><Paper className={classes.paper}>{props.record.clientMessage}</Paper>
          </Grid>
          {console.log(props.record.clientName, props.record.callSchedules[props.record.callSchedules.length-1])}
          {props.record.callSchedules[0] !== undefined ? <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <span className='ExpandViewField'>Reminder Date: </span><Paper className={classes.paper}><Moment format="DD/MM/YYYY, HH:mm:ss">{props.record.callSchedules[props.record.callSchedules.length-1].reminder_of_next_call}</Moment></Paper>
          </Grid> : null}
          
        </Grid>
      </div>
    );
  }
*/
// List Actions
const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        hasCreate,
        basePath,
        selectedIds,
        showFilter,
        total,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>


            {filters && React.cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}

            <button class="btn btn-sm" style={{ color: "#3f51b5", fontFamily: "Roboto, Helvetica" }} onClick={() => props.setFilters({ datetime: '' })}>CLEAR FILTERS</button>


            <CreateButton basePath={basePath} />
            <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filterValues={filterValues}
                maxResults={maxResults}
            />

        </TopToolbar>
    );
};

// Filters
export const TaskFilter = (props) => (
        <Filter {...props}>
            <DateInput source="datetime" alwaysOn />
            <SearchInput source="q" alwaysOn />
        </Filter>

);


export const EventList = ({ ...props }) => (
    <>
        <h4 class="mt-5 pb-2 text-black-50">All Events</h4>
        <List {...props} actions={<ListActions />} filters={<TaskFilter />}title=" ">
            <Datagrid rowClick="show">
                <DateField source="datetime" label="Date"/>
                <TextField source="Event_Name" label="Event Name" />
                <TextField source="First_Name" label="First Name" />
                <TextField source="Last_Name" label="Last Name" />
                <TextField source="Course_Name" label="Course Name" />
                <TextField source="Semester" label="Semester" />
            </Datagrid>
        </List>
    </>
);

export const EventShow = ({ ...props }) => (
    <Show {...props} title="Event Details">
        <SimpleShowLayout>
            <TextField source="Enrollment_Number" label="Enrollment Number" />
            <TextField source="First_Name" label="First Name" />
            <TextField source="Last_Name" label="Last Name" />
            <EmailField source="Email_id" label="Email ID"/>
            <TextField source="Gender" label="Gender" />
            <TextField source="School_Name" label="School Name" />
            <TextField source="Course_Name" label="Course Name" />
            <TextField source="Semester" label="Semester" />
            <TextField source="Event_Name" label="Event Name" />
            <TextField source="Event_Level" label="Event Level" />
            <TextField source="Rank" label="Rank" />
            <DateField source="Event_Date" label="Event Date" />
            <DateField source="datetime" label="Date of Entry" />
        </SimpleShowLayout>
    </Show>
);

export const EventEdit = ({ ...props }) => (
    <Edit {...props} title="Event Edit">
        <SimpleForm>
            <TextInput source="Enrollment_Number" label="Enrollment Number" />
            <TextInput source="First_Name" label="First Name" />
            <TextInput source="Last_Name" label="Last Name" />
            <TextInput source="Email_id" label="Email ID"/>
            <TextInput source="Gender" label="Gender" />
            <TextInput source="School_Name" label="School Name" />
            <TextInput source="Course_Name" label="Course Name" />
            <TextInput source="Semester" label="Semester" />
            <TextInput source="Event_Name" label="Event Name" />
            <TextInput source="Event_Level" label="Event Level" />
            <TextInput source="Rank" label="Rank" />
            <DateInput source="Event_Date" label="Event Date" />
            <DateInput source="datetime" label="Date of Entry" disabled/>
        </SimpleForm>
    </Edit>
);
/*
const taskDefaultValue = () => ({ user_id: getCurrentUser()._id });
export const TaskCreate = ({ permissions, ...props }) => (
    <Create {...props} title="Task Create">
        <SimpleForm initialValues={taskDefaultValue}>
            {permissions === 'admin' ? (
                <ReferenceInput label="Assign To User" source="user_id" reference="users">
                    <SelectInput optionText="username" optionValue="id" />
                </ReferenceInput>
            ) : (
                <TextInput source="user_id" disabled />
            )}
            <DateTimeInput source="datetime" label="Date" validate={[required()]} />
            <TextInput source="interestedCourse" validate={[required()]} />
            <TextInput source="clientName" label="Name" validate={[required()]} />
            <TextInput source="clientMessage" label="Message" validate={[required()]} />
            <TextInput source="clientContact" label="Contact No" validate={[required()]} />
            <RichTextInput source="comment" label="Comments" validate={[required()]} />
            <TextInput source="email" label="Email" validate={[required()]} />
            <TextInput source="age" label="Age" validate={[required()]} />
            <TextInput source="institute" label="Institute" validate={[required()]} />
            <TextInput source="qualification" label="Qualification" />
            <TextInput source="time_to_connect" label="Time To Connect" validate={[required()]} />
            <TextInput source="location" label="Location" validate={[required()]} />
            <TextInput source="form_name" label="Form Name" validate={[required()]} />
            <SelectInput source="status" choices={[
                { id: 'not_interested', name: 'Not Interested' },   
                { id: 'interested', name: 'Interested' },
                { id: 'couldnt_connect', name: 'Could\'nt Connect' },
                { id: 'closed', name: 'Successfully Closed' },
            ]} validate={[required()]} />
            <FormDataConsumer>
                {({ formData, ...rest }) => formData.status === 'interested' &&
                    <ArrayInput source="callSchedules" label="Calls Schedule">
                        <SimpleFormIterator>
                        <DateTimeInput source="callSchedulesDateofCall" label="Date of Call" showTime/>
                            <TextInput source="remark" label="Remark" />
                            <SelectInput source="status_of_call" label="Status of Call" choices={[
                                { id: 'solved', name: 'Solved' },
                                { id: 'unsolved', name: 'Unsolved' },
                            ]} initialValue="unsolved" />
                        </SimpleFormIterator>
                    </ArrayInput>
                }
            </FormDataConsumer>
        </SimpleForm>
    </Create>
);*/