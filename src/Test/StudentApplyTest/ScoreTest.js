import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'

function ScoreTest() {
    const [title, settile] = useState("30")
    const [score, setscore] = useState("")
    const [correct, setcorrect] = useState("")
    const [wrong, settwrong] = useState("")
    const [titles, settitles] = useState("")
    const { state } = useLocation()
    useEffect(() => {
        fetch("https://trackfinity2022.herokuapp.com/test/getsinglescorecard/" + JSON.parse(localStorage.getItem("profile"))._id + "/" + state.testid, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json().then(data => {
                console.table(data);
                if (data.data) {
                    settile(data.data.testname)
                    setscore(data.data.score)
                    setcorrect(data.data.correct)
                    settwrong(data.data.wrong)
                    settitles(data.data.outcome)
                }
            }))

    }, [state.testid])

    const navigate = useNavigate();
    return (
        <div className="logbody">
            <Card sx={{ width: 600, margin: "auto", marginTop: "15vh" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 16, marginTop: "10%" }} color="text.secondary" gutterBottom>
                        Test Name
                    </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
                        <Chip sx={{ fontSize: 20 }} label={title} color="primary" />
                    </Typography>
                    <Typography sx={{ fontSize: 16, marginTop: "10%" }} color="text.secondary" gutterBottom>
                        Score
                    </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
                        <Chip sx={{ fontSize: 20 }} label={score} color="primary" />
                    </Typography>
                    <Typography sx={{ fontSize: 16, marginTop: "10%" }} color="text.secondary" gutterBottom>
                        Correct Answers
                    </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
                        <Chip sx={{ fontSize: 20 }} label={correct} color="primary" />
                    </Typography>
                    <Typography sx={{ fontSize: 16, marginTop: "10%" }} color="text.secondary" gutterBottom>
                        Wrong Answers
                    </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
                        <Chip sx={{ fontSize: 20 }} label={wrong} color="primary" />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => { navigate("/", { state: { id: JSON.parse(localStorage.getItem("profile")).courseid } }) }} size="small">Take another test</Button>
                </CardActions>
               
            </Card>

        </div>
    )
}

export default ScoreTest