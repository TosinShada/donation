/** @jsx jsx */
import { jsx, Box, Container, Grid } from "theme-ui"
import Image from "components/image"
import SectionHeading from "components/section-heading"

import devtImage1 from "assets/images/devt1.jpg"
import devtImage2 from "assets/images/devt2.jpg"
import devtImage3 from "assets/images/devt3.jpg"
import devtImage4 from "assets/images/devt4.JPEG"
import devtImage5 from "assets/images/devt5.JPEG"
import devtImage6 from "assets/images/devt6.JPEG"

const ProjectGallery = () => {
    return (
        <Box as='section' id='widgets' variant='section.widgets'>
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title='Committed to providing bespoke real estate solutions to our customers'
                    subtitle='Our Projects'
                />
                <Box sx={styles.contentWrapper}>
                    <Grid gap={2} columns={[1, 1, 2, 3]}>
                        <Image src={devtImage6} />
                        <Image src={devtImage2} />
                        <Image src={devtImage3} />
                        <Image src={devtImage1} />
                        <Image src={devtImage4} />
                        <Image src={devtImage5} />
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ProjectGallery

const styles = {
    contentWrapper: {
        display: ["block", "block", "grid"],
        alignItems: "center"
    },
    heading: {
        maxWidth: "620px",
        mb: [7],
        h2: {
            letterSpacing: "heading"
        }
    },
    listItem: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 2.81,
        display: "flex",
        alignItems: "center",
        img: {
            mr: "10px"
        }
    },
    explore: {
        mt: ["20px", "20px", "20px", "20px", "20px"]
    }
}
