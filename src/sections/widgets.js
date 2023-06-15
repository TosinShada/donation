/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui"
import SectionHeading from "components/section-heading"
import { LearnMore } from "components/link"
import Image from "components/image"

import banner from "assets/images/widgets.png"
import checkFilledCircle from "assets/images/icons/check-circle-filled.png"

const Widgets = () => {
    return (
        <Box as='section' id='widgets' variant='section.widgets'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.leftContent}>
                        <Image src={banner} alt='widgets' />
                    </Box>
                    <Box sx={styles.rightContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title='Technological Approach to Real Estate'
                            subtitle='How We Do It'
                            description='By understanding the nature and unique needs of the Real Estate market through market research, data collection and analysis, we can help you to turn our technical know-how into business value. We provide expert technical input, including guidance on construction, renovations and asset management considerations to inform your decisions.'
                        />
                        <Box sx={styles.explore}>
                            <LearnMore path='/services' label='Learn More' />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Widgets

const styles = {
    contentWrapper: {
        gap: [0, 0, 0, 0, 10, 100],
        display: ["block", "block", "grid"],
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center"
    },
    heading: {
        textAlign: "left",
        mb: ["20px"],
        mt: [0, 0, 0, 0, "-70px"],
        h2: {
          fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
          lineHeight: [1.25, 1.5],
          letterSpacing: "-1.5px",
          fontWeight: "600",
          br: {
              display: ["none", "none", "none", "block"]
          }
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
