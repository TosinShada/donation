/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui"
import SectionHeading from "components/section-heading"
import { LearnMore } from "components/link"
import Image from "components/image"

import serviceImg from "assets/images/service.png"
import checkFilledCircle from "assets/images/icons/check-circle-filled.png"
import { Fragment } from "react"

const data = [
    {
        id: 1,
        color: "#28D1DC",
        value: "80K+",
        title: "We have more than customers"
    },
    {
        id: 2,
        color: "#FF753A",
        value: "150+",
        title: "Free online tutorials videos available"
    },
    {
        id: 3,
        color: "#FA578E",
        value: "90+",
        title: "Daily updated blog post maintain"
    },
    {
        id: 4,
        color: "#28DCB2",
        value: "& 3M",
        title: "Job posted everyday`s with  qualification"
    }
]

const Services = () => {
    return (
        <Box as='section' variant='section.services'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box>
                        <Image src={serviceImg} alt='service' />
                    </Box>
                    <Box sx={styles.rightContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title={
                                <Fragment>
                                    Capability you can believe in
                                </Fragment>
                            }
                            subtitle={<Fragment>Our Services</Fragment>}
                            description='Our widespread technical expertise ranges from property management and development, facility management and brokerage to a vast network of investors, property owners and occupiers that take our capability far and wide.'
                        />
                        <Text sx={styles.listItem} as='p'>
                            <Image src={checkFilledCircle} alt='check icon' />
                            Facility and Property Management
                        </Text>
                        <Text sx={styles.listItem} as='p'>
                            <Image src={checkFilledCircle} alt='check icon' />
                            Agency and Brokerage
                        </Text>
                        <Text sx={styles.listItem} as='p'>
                            <Image src={checkFilledCircle} alt='check icon' />
                            Research and Advisory
                        </Text>
                        <Text sx={styles.listItem} as='p'>
                            <Image src={checkFilledCircle} alt='check icon' />
                            Property Development
                        </Text>
                        <Box sx={styles.explore}>
                            <LearnMore path='/services' label='Learn More' />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Services

const styles = {
    contentWrapper: {
        display: ["flex", "flex", "grid"],
        flexDirection: ["column-reverse", "column-reverse", "unset"],
        gridTemplateColumns: [
            "1.2fr 0.8fr",
            "1.2fr 0.8fr",
            "1.2fr 0.8fr",
            "1.1fr 0.9fr",
            "1.1fr 0.9fr",
            "1.1fr 0.9fr",
            "1.2fr 0.8fr"
        ],
        alignItems: "center"
    },
    leftContent: {
        gap: [20, 20, 20, 20, 30, 45],
        display: ["grid", "grid"],
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "flex-start",
        "> div": {
            ":first-of-type": {
                mt: ["65px"]
            },
            ":last-of-type": {
                mt: ["-65px"]
            }
        }
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
