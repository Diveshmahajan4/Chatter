
import { Box, styled, Typography, TextField, Button } from '@mui/material';
// import { GitHub, Instagram, Email } from '@mui/icons-material';
import Footer from '../footer/footer';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 70vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    position: relative;
    top: 50%;
    left: 28%;
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    padding:20px;
    color: #878787;
`;

const FormButton = styled(Button)`
    width: 25%;
`

const NewBox = styled(Box)`
    align-items: center;
`


const Contact = () => {
    return (
        <NewBox>
            <Banner />
            
            <Wrapper>
                <Text variant="h3">Getting in touch is easy!</Text>
                <TextField id="outlined-basic" label="Name" variant="outlined" style={{marginBottom: 10}}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginBottom: 10}}/>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Comment"
                    multiline
                    rows={4}
                    defaultValue=""
                    style={{marginBottom: 10}}
                />
                <FormButton variant="contained">Submit</FormButton>
            </Wrapper>
            <Footer/>
        </NewBox>
    );
}

export default Contact;