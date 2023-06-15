/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui"
import Image from "components/image"

import serviceImg from "assets/images/image5.jpeg"
import { Fragment } from "react"
import BodyHeading from "components/body-heading"

const Introduction = () => {
    return (
        <Box as='section' variant='section.mainServices'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.leftContent}>
                        <Image src={serviceImg} alt='service' />
                    </Box>
                    <Box sx={styles.rightContent}>
                        <BodyHeading
                            sx={styles.heading}
                            title={
                                <Fragment>
                                    MMM Primary Health Care Clinic
                                </Fragment>
                            }
                            subtitle={<Fragment>Introduction</Fragment>}
                            description="Medical Missionaries of Mary (MMM) Primary Health Care Clinic and Maternity with outreach programme is situated in Sabon Lugbe (generally known as Amac/Aco housing estate) and it is about 30 minutes' drive from the town and about 20 - 25 minutes to the Local and International Airport. The inhabitants are Gbagi tribe who were moved from their own farmlands and familiar environment in the dawn of the development of the Federal Capital Territory. They live in clusters of families with 2-3 wives and many children. Abuja was a small village in the centre of Nigeria. In 1999 the PHC outreach started by a needs assessment visit to 15 villages around the Area. The outreach team was made up of one sister, a CHEW and a driver. Their activities then were, setting up village health committees, immunizations, Health Education, ANC etc. The programme was first funded by CAFOD from the start but CAFOD no longer fund the programme."
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Introduction

const styles = {
    contentWrapper: {
        display: ["flex", "flex", "grid"],
        flexDirection: ["column-reverse", "column-reverse", "unset"],
        gridTemplateColumns: [
            "0.8fr 1.2fr",
            "0.8fr 1.2fr",
            "0.8fr 1.2fr",
            "0.9fr 1.1fr",
            "0.9fr 1.1fr",
            "0.9fr 1.1fr",
            "1fr 1fr"
        ],
        alignItems: "center"
    },
    leftContent: {
        mr: ['40px']
    },
    rightContent: {
        // ml: ['120px'],
    },
    heading: {
        textAlign: "left",
        mb: ["20px"],
        mt: [0, 0, "-70px"],
        h2: {
            fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
            lineHeight: [1.25, 1.5],
            letterSpacing: "-1.5px",
            fontWeight: "600",
            br: {
                display: ["none", "none", "none", "block"]
            }
        },
        p: {
            mt: ["15px", "10px"]
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
