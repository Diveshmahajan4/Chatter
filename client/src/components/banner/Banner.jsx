
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    background-image: url("banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 720px;
    margin-top:70px;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom:40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    position: absolute;
    top: 28%;
    left: 25%; 
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    color: #FFFFFF;
    position: absolute;
    top: 73%;
    left: 32%;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Innovate  Inspire Inform</Heading>
            <SubHeading>A Journey into the World of Innovation</SubHeading>
        </Image>
    )
}

export default Banner;