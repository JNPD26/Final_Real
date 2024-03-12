import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Carousel } from 'antd';
import Typography from '@mui/material/Typography';

// const cards = [
//   {
//     id: '1',
//     title: 'Intro to Python',
//     date: '',
//     image: '',
//     description: 'Learn the basics of Python, a popular programming language for both beginners and experts'
//   },
//   {
//     id: '2',
//     title: 'Advanced JavaScript',
//     date: '',
//     image: '',
//     description: 'Take your JavaScript skills to the next level with this advanced course.'
//   },
//   {
//     id: '3',
//     title: 'Machine Learning with TensorFlow',
//     date: '',
//     image: '',
//     description: 'Learn how to build machine learning models using the popular TensorFlow library.'
//   },
//   {
//     id: '4',
//     title: 'Data Science with R',
//     date: '',
//     image: '',
//     description: 'Explore the world of data science using the R programming language.'
//   },
// ]

// const contentStyle = {
//   height: '320px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const MediaCard = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(' https://12669487-eec8-472e-b8fe-a6d562721520-00-2tvu80bnyz2pj.janeway.replit.dev/courses')
      .then(response => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    < div className='cardClass' >
      {products.map(product => (
        <div key={product.id}>
          <Card className='class' style={{ borderRadius: '5%' }}>

            <CardMedia
              sx={{ height: 140 }}
              // image={card.image}
              // title={card.title}
              component='img'
            />

            <CardContent >
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </CardContent>

            {/* <CardActions >
              <Button size="small">Share</Button>
              <Button size="small" onClick={() => {
                alert('clicked');
              }}>Learn More</Button>
            </CardActions> */}

          </Card>
        </div>
      ))}
    </div >
  )
};

export default MediaCard


// <img src={card.image} alt="" />
