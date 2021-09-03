import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import "../App.css"
import axios, {post} from 'axios'
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialValues = {
    rollno: "",
    student_fname: "",
    student_lname: "",
    email: "",
    gender_option: "",
    school_name:"",
    course_name:"",
    sem_option:"",
    event_name:"",
    event_type:"",
    event_level:"",
    rank_option:"",
    event_date:"",
  };

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [submit, setSubmit] = useState(true);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
    console.log(values);
    
    if (   values.rollno !== "" 
    && values.student_fname !== "" 
    && values.student_lname !== "" 
    && values.email !== ""
    && values.gender_option !== "" 
    && values.school_name !== "" 
    && values.course_name !== "" 
    && values.sem_option !== "" 
    && values.event_name !== "" 
    && values.event_type !== "" 
    && values.event_level !== "" 
    && values.rank_option !== "" 
    && values.event_date !== ""){
        console.log("ok");
        setSubmit(false);
    }
  };

  const handleFileChange = (e) => {
      let files = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
          console.warn("image data: ", e.target.result);
      }
      setValues({
          ...values,
          [e.target.name]: e.target.value,
      })
  }
  const handleSubmit =  (e) => {
      e.preventDefault();
      console.log(values);
      const url = "http://localhost:5001/eventform";
      axios
        .post(url, values)
        .then(response => {
            setValues(initialValues);
            alert(`your task has been successfully Added!`);
            
        })
        .catch(error => {
            console.log(error);
        })
    }
  
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Event Form
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="rollno"
                variant="standard"
                required
                fullWidth
                id="rollno"
                label="Enrollment Number"
                autoFocus
                onChange={handleInputChange}
                value={values.rollno}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="student_fname"
                label="First Name"
                name="student_fname"
                value={values.student_fname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="student_lname"
                label="Last Name"
                name="student_lname"
                value={values.student_lname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleInputChange}
                value={values.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="gender_option" name="gender_option" label="Gender" value={values.gender_option} onChange={handleInputChange} select fullWidth >
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField id="school_name" name="school_name" label="School Name" value={values.school_name} onChange={handleInputChange} select fullWidth >
                    <MenuItem value="SITAICS">SITAICS</MenuItem>
                    <MenuItem value="SISPA">SISPA</MenuItem>
                    <MenuItem value="SICMSS">SICMSS</MenuItem>
                    <MenuItem value="SISDSS">SISDSS</MenuItem>
                    <MenuItem value="SFSRM">SFSRM</MenuItem>
                    <MenuItem value="SICSSL">SICSSL</MenuItem>
                    <MenuItem value="SCBC">SCBC</MenuItem>
                    <MenuItem value="SLHSS">SLHSS</MenuItem>
                    <MenuItem value="SASET">SASET</MenuItem>
                    <MenuItem value="SPES">SPES</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField id="course_name" name="course_name" label="Course Name" value={values.course_name} onChange={handleInputChange} select fullWidth >
                    <MenuItem value="SITAICS">SITAICS</MenuItem>
                    <MenuItem value="SISPA">SISPA</MenuItem>
                    <MenuItem value="SICMSS">SICMSS</MenuItem>
                    <MenuItem value="SISDSS">SISDSS</MenuItem>
                    <MenuItem value="SFSRM">SFSRM</MenuItem>
                    <MenuItem value="SICSSL">SICSSL</MenuItem>
                    <MenuItem value="SCBC">SCBC</MenuItem>
                    <MenuItem value="SLHSS">SLHSS</MenuItem>
                    <MenuItem value="SASET">SASET</MenuItem>
                    <MenuItem value="SPES">SPES</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField id="sem_option" name="sem_option" label="Semester" value={values.sem_option} onChange={handleInputChange} select fullWidth >
                    <MenuItem value="1">I</MenuItem>
                    <MenuItem value="2">II</MenuItem>
                    <MenuItem value="3">III</MenuItem>
                    <MenuItem value="4">IV</MenuItem>
                    <MenuItem value="5">V</MenuItem>
                    <MenuItem value="6">VI</MenuItem>
                    <MenuItem value="7">VII</MenuItem>
                    <MenuItem value="8">VIII</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="event_name"
                label="Event Name"
                name="event_name"
                onChange={handleInputChange}
                value={values.event_name}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="event_type"
                label="Event Type"
                name="event_type"
                onChange={handleInputChange}
                value={values.event_type}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField id="event_level" name="event_level" label="Event Level" value={values.event_level} onChange={handleInputChange} select fullWidth >
                    <MenuItem value="University">University</MenuItem>
                    <MenuItem value="District">District</MenuItem>
                    <MenuItem value="State">State</MenuItem>
                    <MenuItem value="National">National</MenuItem>
                    <MenuItem value="International">International</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField id="rank_option" name="rank_option" label="Rank" value={values.rank_option} onChange={handleInputChange} select fullWidth >
                    <MenuItem value="1">1<sup>st</sup></MenuItem>
                    <MenuItem value="2">2<sup>nd</sup></MenuItem>
                    <MenuItem value="3">3<sup>rd</sup></MenuItem>
                    <MenuItem value="0">Participated</MenuItem>
                </TextField>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="event_date"
                type="date"
                name="event_date"
                label="Event Date"
                onChange={handleInputChange}
                value={values.event_date}
              />
            </Grid>
           {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="proof"
                type="file"
                name="proof"
                label="Event Document (Proof)"
                value={values.proof}
              />
  </Grid>*/}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={submit}
          >
            Submit Event
          </Button>
          
        </form>
      </div>
    </Container>
  );
}
