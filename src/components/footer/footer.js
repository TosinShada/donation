/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import { footerNav } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" variant="layout.footer">
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.copyright}>
            <Logo />
            <Text as="span" sx={styles.copyrightText}>
              Copyright {new Date().getFullYear()} Medical Missionaries of Mary
            </Text>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            {footerNav.map(({ path, label }, i) => (
              <li key={i}>
                <Link path={path} key={i} label={label} variant="footer" />
              </li>
            ))}
          </Box>
        </Box>
      </Container>
      <Container>
          <Box sx={styles.disclaimer}>
            <Text as="p">
            Ireland: CHY 7150 In the USA we are a tax exempt 501(c)(3) organization.
            </Text>
          </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footerTopInner: {
    borderBottom: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
    '@media only screen and (max-width: 400px)': {
      pb: 10,
    },
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#0F2137', 0.6),
      mt: ['18px', '18px', '7px'],
    },
  },
  copyrightText: {
    pl: ['20px', '20px', '20px'],
  },
  disclaimer: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    p: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#0F2137', 0.6),
      mt: ['15px', '15px', '15px'],
      mb: ['48px', '48px', '48px'],
    },
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', '18px', '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'textSecondary',
    },
  },
};
