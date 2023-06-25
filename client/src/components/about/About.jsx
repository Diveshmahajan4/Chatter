
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import Footer from '../footer/footer';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 100px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
    text-align:center;
`;

const Text1 = styled(Typography)`
    text
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Hello 👋! I'm Divesh Mahajan</Typography>
                <Text variant="h5">I am an experienced full-stack developer who is deeply passionate about creating aesthetic and clean-looking websites. With a strong background in both front-end and back-end development, I possess the skills and knowledge to bring visually appealing designs to life while ensuring seamless functionality.</Text>

                <Text variant="h5">Throughout my career, I have honed my expertise in various programming languages, including HTML, CSS, JavaScript, and frameworks such as React and Next. This comprehensive skill set enables me to handle all aspects of website development, from designing user interfaces to implementing robust backend systems.</Text>
                
                <Text variant="h5">One of my primary strengths lies in my obsession with aesthetics. I believe that a visually appealing website not only captures attention but also enhances the overall user experience. By meticulously crafting layouts, choosing complementary color schemes, and paying attention to the smallest details, I strive to create websites that leave a lasting impression.Clean code is another aspect I prioritize in my work. I understand the importance of writing well-structured and maintainable code that facilitates collaboration and future scalability. By following best practices and utilizing efficient coding techniques, I ensure that the websites I develop are not only visually pleasing but also performant and easy to maintain.</Text>
                
                <Text variant="h5">I am a dedicated professional who thrives in collaborative environments. I enjoy working closely with designers, UX/UI experts, and stakeholders to understand their vision and translate it into tangible products. I believe effective communication and teamwork are essential for delivering exceptional results.</Text>
                
                <Text variant="h5">In addition to my technical skills, I am always eager to stay updated with the latest web development trends and technologies. This allows me to incorporate innovative solutions into my work, keeping websites at the forefront of design and functionality.If you are looking for a skilled full-stack developer who is passionate about creating visually stunning and user-friendly websites, I would be thrilled to contribute my expertise to your projects. Together, we can bring your ideas to life and create a memorable online presence.
                </Text>
            </Wrapper>
            <Footer/>
        </Box>
    )
}

export default About;