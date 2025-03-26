import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

// Images
import AboutImage from "Assets/about/about.png";

// Styles
import styles from "Styles/About/Myselft.styles";

const Myself = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
                <Typography variant="h4" component="h4" sx={styles.Title}>
                    Let&apos;s Discover <br />
                    More About Soft84ya
                </Typography>
                <Typography variant="body1" component="p" sx={styles.Description}>
                    Soft84ya is a team of professional developers and designers passionate about creating innovative digital solutions. We specialize in web development, software solutions, and application design.
                </Typography>
                <Box sx={{ my: "28px" }}>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            100% Client Satisfaction
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            High-Quality Services
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            Lifetime Aftersales Support
                        </Typography>
                    </Stack>
                </Box>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <ButtonBase sx={styles.Button}>
                        Get in Touch
                        <ArrowForwardTwoToneIcon />
                    </ButtonBase>
                </Link>
            </Box>
            <Box component="img" src={AboutImage} alt="About Soft84ya" sx={styles.Image} />
        </Box>
    );
};
export default Myself;
