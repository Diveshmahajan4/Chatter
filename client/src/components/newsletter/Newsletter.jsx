import React from 'react'
import {Box, Typography, TextField, Button} from "@mui/material"
import styled from '@emotion/styled'

const NewBox1 = styled(Box)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    background-image: url("b14.png");
    background-position: 20% 30%;
    background-color: #292a2d;
    height: 200px;
    margin-top: 20px;
`

const FormButton = styled(Button)`
    width: 25%;
`

const Text1 = styled(Typography)`
    font-size: 32px;
    line-height:50px;
    font-weight: 700;
    color: #fff;
`

const Text2 = styled(Typography)`
    font-size: 24px;
    font-weight: 600;
    color: #818ea0;
`

const Text3 = styled(TextField)`
    border-radius:2px solid #000;
    background-color:#fff;
    border-radius:5px;
    width: 300px
`


const Newsletter = () => {
  return (
    <NewBox1>
        <Box>
            <Text1>Sign Up For Newsletters</Text1>
            <Text2>Get E-mail updates about our latest shop and special offers</Text2>
        </Box>
        <Box>
        <Text3 id="outlined-basic" label="Email" type='email' variant="outlined" style={{marginBottom: 10}}/>
        <FormButton variant="contained">Sign Up</FormButton>
        </Box>
    </NewBox1>
  )
}
export default Newsletter