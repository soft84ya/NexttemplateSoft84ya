import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

// Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                Welcome to <br />
                Soft84ya
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                Think Differ, Build Smarter
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Empowering businesses with cutting-edge web, software, and application solutions. From startups to enterprises, we turn ideas into reality with innovation and technology.
            </Typography>
            <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
            >
                <ButtonBase sx={styles.Button}>
                    Explore Our Work
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Link>
        </Box>
    );
};
export default HeroContent;