import React, { useState, useEffect, useRef } from 'react'
import { Alert, Badge, Button, Card, Container, FormCheck, FormLabel, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../../contexts/AuthContext';

function ApplyTest(props) {
    const [question_set, setquestionset] = useState([])
    const navigate = useNavigate();
    const { state } = useLocation()
    // const { useruid } = useAuth()
    const [arry, setarry] = useState([])
    const url = "http://localhost:5000"
    const [ans, setans] = useState([])

    // const object = {};
    // const array = ["one", "two", "three"];

    // array.forEach(v => object[v] = v);
    // console.log(object);
    const handleChangeAnswer = (index, opt) => {
        let array = [...ans];
        array[index] = opt;
        setans(array);
        console.log(ans)
    }

    const handleSubmitTest = () => {
        let json = { "testid": state.testid, "answers": ans, "userid": JSON.parse(localStorage.getItem("user-vjti"))._id }

        console.log(json)
        
        fetch(url + "/user/test/addscore", {
            method: "POST",
            body: JSON.stringify({
                score:json
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    localStorage.removeItem('testdate');
                    navigate('/dashboard')
                }
            })
    }



    // //timer
    const intervalRef = useRef(null);
    const [timer, setTimer] = useState('0:00');
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const [isExpired, setisExpired] = useState(false);
    function startTimer(deadline) {
        let { total, minutes, seconds } = getTimeRemaining(deadline);
        if (total >= 0) {
            setTimer(

                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            clearInterval(intervalRef.current);
        }
        if (minutes === 0 && seconds === 0) {
            setisExpired(true);
        }
    }
    // let json = { 'min': props.timedata.minutes, 'hr': props.timedata.hours, 'sec': secs }

    function clearTimer(endtime) {
        setTimer(0 + ":00");
        if (intervalRef.current) clearInterval(intervalRef.current);
        const id = setInterval(() => {
            startTimer(endtime);
        }, 1000)
        intervalRef.current = id;
    }



    function getDeadlineTimer() {
        let deadline = new Date();

        deadline.setHours(deadline.getHours() + parseInt(0));
        console.log(parseInt(0));

        var currentDate = new Date();
        var storedDate = new Date(localStorage.getItem('testdate'));
        var diff = (currentDate - storedDate);
        var totalSeconds = (state.duration * 60) - (diff / 1000);
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);
        console.log(minutes + ' minutes and ' + seconds + ' seconds');

        deadline.setMinutes(deadline.getMinutes() + parseInt(localStorage.testdate ? minutes <= state.min && minutes >= 0 ? minutes : 0 : state.min));
        deadline.setSeconds(deadline.getSeconds() + parseInt(localStorage.testdate ? minutes <= state.min && minutes >= 0 ? seconds : 0 : 0));
        console.log(deadline)

        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadlineTimer());
        return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    }, [])
    // useEffect(() => {
    // fetch(url + "/submit_question_set", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ "question_set_key": props.Cques_id, })
    // }).then(res => res.json()).then(data => {
    //     if (data.Error) return alert(data.Error)
    // })

    //     fetch(url+"/user/test/gettestquestion/62f87b6e9065d40ead2fe917", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"

    //         },

    //     }).then(res => res.json()).then(data => {
    //         if (data.Error) return alert(data.Error)
    //         console.log(data)
    //         setquestionset(data)

    //         Object.entries(data).forEach(question_set => {
    //             setarry((currentQuantity) => ({
    //                 ...currentQuantity,
    //                 // don't forget the brackets here
    //                 [question_set[0]]: "null",
    //             }))


    //         })
    //         setarry((currentQuantity) => ({
    //             ...currentQuantity
    //             // don't forget the brackets here
    //             // "uid": useruid,
    //         }))
    //         setarry((currentQuantity) => ({
    //             ...currentQuantity,
    //             // don't forget the brackets here
    //             "question_set_key": props.Cques_id,
    //         }))

    //     })

    //     console.log("efefect")

    // }, [props.Cques_id])


    useEffect(() => {
        fetch(url + "/user/test/getquestionscandidate/" + state.testid, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"

            },

        }).then(res => res.json().then(data => {
            console.log(data)
            setquestionset(data.data)


        }))
    }, [arry, state.testid])

    return (
        <Container >
            <h3 className='mt-2 mb-2' style={{ textAlign: "center" }}><u>TEST</u></h3>

            <h3 ><Badge bg="danger">Time Left  ::  {timer}</Badge></h3>
            <Alert variant="success">Please read the following instructions carefully before starting the test.<br />
                <ul>
                    <li>Please don't reload page while test is going on</li>
                    <li>Please don't close the tab while test is going on</li>
                    <li>Please don't press back button while test is going on</li>
                    <li>It's Time based examination </li>
                </ul>
            </Alert>
            {/* create list of question set with timestamp using react-bootstrap */}
            {question_set?.map((data,index) => {
                return (
                    <Card key={data._id} style={{ marginTop: "1%", marginBottom: "1%" }} className='p-2'>
                        <FormLabel ><h6 className='mt-2'>Q. {data["question"]}</h6></FormLabel>


                        <FormCheck name={data._id} type='radio' onChange={(e) => { handleChangeAnswer(index, e.target.value); console.log(e.target.value) }} label={data.opt1} value={"opt1"} />

                        <FormCheck name={data._id} type='radio' onChange={(e) => { handleChangeAnswer(index, e.target.value); console.log(e.target.value) }} label={data.opt2} value={"opt2"} />

                        <FormCheck name={data._id} type='radio' onChange={(e) => { handleChangeAnswer(index, e.target.value); console.log(e.target.value) }} label={data.opt3} value={"opt3"} />

                        <FormCheck name={data._id} type='radio' onChange={(e) => { handleChangeAnswer(index, e.target.value); console.log(e.target.value) }} label={data.opt4} value={"opt4"} />

                    </Card>
                )
            }

            )}
            <Button className='mb-2' onClick={() => { if (window.confirm("Do You want to submit your answers?")) { handleSubmitTest() } }}> Submit</Button>
        </Container>
    )
    // }
    // else {
    //     return <Spinner style={{ position: "absolute", top: "50%", left: "50%" }} animation="border" />
    // }
}

export default ApplyTest