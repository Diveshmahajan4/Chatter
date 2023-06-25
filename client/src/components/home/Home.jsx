
import {Box,  Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';
import styled from '@emotion/styled';
import Footer from '../footer/footer';
import Newsletter from '../newsletter/Newsletter';

const NewBox = styled(Box)`
    
`



const Home = () => {

    return (
        <NewBox>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
            <Newsletter/>
            <Footer/>
        </NewBox>
    )
}

export default Home;