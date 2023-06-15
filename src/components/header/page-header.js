/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
} from "theme-ui";
import SectionHeading from 'components/section-heading';

const PageHeader = ({title, subtitle, description}) => {
  return (
    <Box id="home" as="section" sx={styles.header}>
      <Container sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title={title}
            subtitle={subtitle}
            description={description}
          />
      </Container>
    </Box>
  );
};

export default PageHeader;

const styles = {
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    alignItems: "center",
    justifyContent: "center",
    pt: [100, null, null, 120, 130, 120, 120],
    pb: 56,
  },
  header: {
      backgroundColor: 'link',
  },
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
};
