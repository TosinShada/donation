/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";

const SectionHeading = ({ title, subtitle, description, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <Text sx={styles.subtitle} as="p">{subtitle}</Text>
      <Heading sx={styles.title}>{title}</Heading>
      <Text as="p" sx={styles.description}>
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: "center",
    maxWidth: 580,
    margin: "0 auto 60px",
  },
  title: {
    color: "#d8e9f2",
    fontWeight: 500,
    fontSize: ["24px", "30px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "heading",
  },
  description: {
    color: "#b8d5e4",
    fontSize: ["14px", "16px"],
    lineHeight: [1.85, 2.2],
    mt: "10px",
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 16,
    color: '#EFEFEF'
  }
};
