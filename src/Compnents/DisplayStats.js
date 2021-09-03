import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "../App.css";


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
  

function DisplayStats() {
    const classes = useStyles();
    const [gender, setgender] = useState({male: 0, female: 0});
    const [Rank, setRank] = useState({1: 0, 2: 0, 3: 0, 0: 0});
    const [schoollist, setschoollist] = useState(["SITAICS", "SISPA",
    "SICMSS",
    "SISDSS",
    "SFSRM",
    "SICSSL",
    "SCBC",
    "SLHSS",
    "SASET",
    "SPES"]);
    const [schoolvalue, setschoolvalue] = useState([0,0,0,0,0,0,0,0,0,0]);
    
    useEffect(async () => {
        const result = await axios(
            'http://localhost:5001/stats'
        );
        console.log(result.data);
        let res = result.data;

        setgender({
            male: res.gender.Male ? res.gender.Male : 0,
            female: res.gender.Female ? res.gender.Female : 0,
        })
        
        setRank({
            0: res.rank['0'] ? res.rank['0'] : 0,
            1: res.rank['1'] ? res.rank['1'] : 0,
            2: res.rank['2'] ? res.rank['2'] : 0,
            3: res.rank['3'] ? res.rank['3'] : 0,
        })
        let tempx = [0,0,0,0,0,0,0,0,0,0];
        console.log(res.school);
        for (let i=0;i<schoollist.length;i++){
            if (schoollist[i] in res.school){
                console.log("Yeyy", schoollist[i], res.school[schoollist[i]]);
                tempx[i] = res.school[schoollist[i]];
            }
        }
        setschoolvalue(tempx);
    }, []);

    const data = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: '# of Votes',
            data: [gender.male, gender.female],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const data1 = {
        labels: ['First', 'Second', 'Third', 'Participated'],
        datasets: [
          {
            label: '# of Votes',
            data: [Rank[1], Rank[2], Rank[3], Rank[0]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const data2 = {
        labels: schoollist,
        datasets: [
          {
            label: '# of Votes',
            data: schoolvalue,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      
    return (
        <div className="graph_collection">
            <div className="Graph">
                <Bar data={data} options={options} />
            </div>
            <div className="Graph">
                <Bar data={data1} options={options} />
            </div>
            <div className="Graph">
                <Bar data={data2} options={options} />
            </div>
        </div>    
    )
}

export default DisplayStats

    