/** @jsx jsx */
import {
    jsx,
    Box,
    Container,
    Heading,
    Text,
    Button,
    Image,
    Input
} from "theme-ui"
import banner from "assets/images/image6.jpeg"

const Banner = () => {
    return (
        <Box id='home' as='section' variant='section.banner'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.content}>
                        <Heading sx={styles.title}>
                            About Us
                        </Heading>
                        <Text as='p' sx={styles.text}>
                            We are religious sisters sent forth to heal the world and relieve suffering in areas of the greatest need. Desiring to share Christ's healing love, our Sisters come from 19 countries to bring health services to people all around the world.
                        </Text>
                        <Text as='p' sx={styles.text}>
                            The Medical Missionaries of Mary are an international missionary congregation of women religious, founded by Mother Mary Martin, in Nigeria, in 1937. The Congregation and the members are also known by their official initials MMM.
                        </Text>
                    </Box>
                    <Box sx={styles.illustration}>
                        <Image src={banner} alt='banner' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner

const styles = {
    contentWrapper: {
        display: [null, null, null, "flex", "grid"],
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        justifyContent: "center",
        minHeight: [null, null, null, null, null, "100vh"],
        pt: [100, null, null, 120, 130, 120, 0]
    },
    content: {
        maxWidth: [507, null, null, 324, 450]
    },
    title: {
        fontWeight: "bold",
        fontSize: ["24px", null, null, null, "34px", "40px", "40px"],
        lineHeight: 1.33,
        letterSpacing: "-1px",
        color: "primary"
    },
    form: {
        display: ["none", "flex"],
        flexDirection: "row",
        border: "1.5px solid #E4E6F2",
        padding: "8px",
        borderRadius: "5px"
    },
    input: {
        flexGrow: 2,
        border: "none",
        height: "50px",
        "&:hover": {
            outline: "none",
            border: "none",
            boxShadow: "none"
        },
        "&:focus": {
            outline: "none",
            border: "none",
            boxShadow: "none"
        }
    },
    button: {
        display: ["none", "flex"]
    },
    text: {
        fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
        lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
        color: "primary",
        my: ["14px", "19px"],
    },
    clients: {
        display: "flex",
        alignItems: "center",
        mt: ["20px", "45px", "45px", "30px", "45px"],
        img: {
            maxWidth: ["80px", "100%", "100%", "100%"],
            "+ img": {
                ml: ["14px", "28px", "28px", "20px"]
            }
        }
    },
    illustration: {
        display: ["block", "block"],
        mt: ["30px", "30px", 0],
        mb: ["60px", "60px", 0],
        img: {
            maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"]
        }
    }
}
