import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const NewFooter = styled(Box)`
    background: #111;
    height: auto;
    width: 100%;
    padding-top: 40px;
    color: #fff;
`

const NewBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const Type1 = styled(Typography)`
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
`

const Type2 = styled(Typography)`
    max-width: 500px;
    margin: 10px auto;
    line-height: 3px;
    font-size: 14px;
    color: #cacdd2;
`

const NewBox2 = styled(Box)`
    margin-top: 10px;
    margin-bottom: 10px;
`

const footer = () => {
  return (
    <Box>
        <NewFooter>
            <NewBox>
                <Type1>CHATTER</Type1>
                <Type2>Innovate, Inspire, Inform</Type2>
                <Type2>A Journey into the World of Innovation</Type2>
                <NewBox2 component="span">
                        <Link href="https://github.com/Diveshmahajan4" color="inherit" style={{ marginLeft: 5 }} target="_blank"><GitHub /></Link>
                        <Link style={{ marginLeft: 5 }} href="https://www.instagram.com/diveshmahajan4/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                        <Link style={{ marginLeft: 5 }} href="https://www.linkedin.com/in/divesh-mahajan-43a585216/" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                </NewBox2>
                <Type2>copyright &copy;2023  @DiveshMahajan</Type2>
                <NewBox2></NewBox2>
            </NewBox>
        </NewFooter>
    </Box>
  )
}

export default footer