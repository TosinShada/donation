/** @jsx jsx */
import {
  jsx,
  Box,
  Heading,
  Button,
  Text
} from "theme-ui";
import { IoIosCloseCircle, IoMdCheckmarkCircle } from 'react-icons/io';

const Result = ({ title, description, isSuccess, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      {isSuccess && (
        <>
          <IoMdCheckmarkCircle color="#3FDBB1" size="80px" />
          <Heading sx={styles.title}>Donation Successful</Heading>
          <Text as="p" sx={styles.description}>
            Thank you for your donation
          </Text>
        </>
      )}
      <a href={process.env.NEXT_PUBLIC_HOME_URL}>
        <Button
          variant='primary'
        >
          Return to Home
        </Button>
      </a>
    </Box>
  );
};

export default Result;

const styles = {
  heading: {
    textAlign: "center",
    maxWidth: 580,
    margin: "0 auto 60px",
  },
  title: {
    color: "primary",
    fontWeight: 500,
    fontSize: ["24px", "30px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "heading",
  },
  description: {
    color: "link",
    fontSize: ["14px", "16px"],
    lineHeight: [1.85, 2.2],
    mt: "10px",
    mb: "20px"
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 16,
    color: '#EFEFEF'
  }
};
