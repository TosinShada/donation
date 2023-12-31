/** @jsx jsx */
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import axios from "axios";
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import Result from 'components/result';

const Status = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const updateDonation = () => {
    const orderId = window.location.pathname.split("/").pop();
    console.log('order id', orderId);
    axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/update`,
      {
        orderId: orderId
      },
      {}).then((apiResponse) => {
        setIsSuccess(apiResponse.data.success);
      }).catch((error) => {
        alert(error.message);
      });
  }

  useEffect(() => {
    updateDonation();
  }, []);

  return (
    <Box
      as="section"
      id="pricing"
      sx={styles.section}
      variant="section.pricing"
    >
      <Container>
        <Result
          sx={styles.heading}
          isSuccess={isSuccess}
        />
      </Container>
    </Box>
  );
};

export default Status;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  heading: {
    mb: [60, null, null, 50],
  },
  priceSwitcher: {
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    border: `1px solid ${rgba('#fff', 0.2)}`,
    margin: ['0 auto 40px', null, null, '0 auto 50px'],
    maxWidth: 300,
    position: 'relative',
    p: 2,
    '.discount': {
      position: 'absolute',
      backgroundColor: 'primary',
      color: '#fff',
      minHeight: 25,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'unset',
      borderRadius: 25,
      right: 38,
      top: '-17px',
    },
    button: {
      minHeight: '48px',
      px: '25px',
      fontWeight: 500,
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  priceWrapper: {
    gap: 30,
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(2,1fr)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
