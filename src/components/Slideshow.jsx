import React from 'react';
import { Carousel } from 'antd';
import Grid from '@mui/material/Unstable_Grid2'

const contentStyle = {
  height: '320px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slideshow = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Carousel autoplay style={{ background: "white"}}>
          <div >
            <h3 style={contentStyle}>1</h3>
          </div>
          {/* <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div> */}
        </Carousel>
      </Grid>
    </Grid>

  );

};
export default Slideshow;