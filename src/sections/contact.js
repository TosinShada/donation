/** @jsx jsx */
import { jsx, Box, Container, Text, Link } from "theme-ui"
import { rgba } from 'polished';

const data = [
    {
        id: 1,
        heading: "Customer Support",
        text: `Contact our support team about using Jetseed or a problem with your account.`,
        linkText: "support@vedranrealty.com"
    },
    {
        id: 2,
        heading: "Business & Partnership",
        text: `Contact business development about services you can offer us, our users or we can offer you.`,
        linkText: "support@vedranrealty.com"
    },
    {
        id: 3,
        heading: "Press & Media",
        text: `Contact our marketing team for sharing and collaboration on press or stories of yours.`,
        linkText: "support@vedranrealty.com"
    }
]

const Contact = () => {
    return (
        <Box as='section' id='contact-us' variant='section.contactUs'>
            <Container>
                <Box sx={styles.features}>
                    {data?.map((item) => (
                        <Box sx={styles.featureItem}>
                            <Text as='h3' sx={styles.heading}>
                                {item.heading}
                            </Text>
                            <Text as='p' sx={styles.text}>
                                {item.text}
                            </Text>
                            <Link href="mailto:support@vedranrealty.com" variant='primary' sx={styles.button}>
                                {item.linkText}
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Contact

const styles = {
    heading: {
        marginBottom: 80
    },
    features: {
        gap: 20,
        display: ["grid"],
        gridTemplateColumns: [
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)"
        ]
    },
    featureItem: {
        backgroundColor: "#fff",
        boxShadow: "0px 25px 100px rgba(69, 88, 157, 0.08)",
        borderRadius: 10,
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        flexDirection: "column",
        padding: [
            "20px 20px",
            "25px 25px",
            "42px 42px"
        ],
        textAlign: "left",
        minHeight: [150, 250],
        width: ["auto", "auto", "auto"]
    },
    heading: {
        fontWeight: 700,
        fontSize: [30, 30, 30, 30, 36],
        lineHeight: [1.83, 1],
        letterSpacing: "-1.2px",
        color: "heading",
        textAlign: "left",
    },
    text: {
        fontSize: ["14px", "16px", "16px", "15px", "17px"],
        lineHeight: [1.62, 1.48],
        letterSpacing: "-0.2px",
        color: "heading",
        mt: ["1px", "20px"],
        color: rgba("#0F2137", 0.7)
    },
    button: {
        padding: "8px",
        backgroundColor: "#2b4f7c",
        textAlign: "center",
        textDecoration: "none",
        color: "white",
        py: "10px",
        borderRadius: "8px",
        mt: ["10px", "20px"],
        display: ["none", "block"],
        "&:hover": {
            backgroundColor: "primary"
        },
        "&:focus": {
            backgroundColor: "primary"
        }
    },
}
