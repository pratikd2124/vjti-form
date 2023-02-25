import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Spinner } from 'react-bootstrap';

export default function Courses() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://54.64.228.28/coures/django', {
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((data) => {
            data.json().then((res) => {
                console.log(res);
                // res.map((data) => {
                //     console.log(data);
                //     setData([...data,{title:data[0],link:data[1],img:data[2]}])
                // })
                setData(res);
            })
        })
    }, []);
    console.log(data);
    return (
        <div >
            
            <Grid container spacing={2}>
            {data.length > 0 ?
                data.map((item) => (
                    
                        <Grid item xs={12} md={4}>
                        <Card className="container shadow border" sx={{ maxWidth: 345,m:2,p:1,borderRadius:'10px', }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={item[2]}
                
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                            {item[0]}
                </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={item[1]} target="_blank" size="small" color="primary">
                View Course
                </Button>
            </CardActions>
            </Card> 
                        </Grid>
                )):<Spinner style={{marginLeft:"50%"}} animation="border" variant="primary" />
                }   
                    </Grid>
                
        {/* {data.map(item => (
            // <div key={item.id}>{item.name}</div>
            <>
                <div className="container "  >
                {/* <Card sx={{ maxWidth: 345,m:2,p:1, }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={item[2]}
                
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                            {item[0]}
                </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={item[1]} target="_blank" size="small" color="primary">
                View Course
                </Button>
            </CardActions>
            </Card> */}
            {/* <div class="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src={item[2]} class="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div className="card-body">
        <h3 className="card-title">{item[0]}</h3>
        
         <button type="button" href={item[1]} target="_blank" className="btn btn-outline-primary">View Course</button>
      </div>
    </div>
  </div> */}
  {/* <div class="col">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
        alt="Palm Springs Road" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top"
        alt="Los Angeles Skyscrapers" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
          additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top"
        alt="Skyscrapers" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div> */}
{/* </div>
              </div>
        
            </>
            
        ))} */} 
         
        </div>
      
   
  );
}

