/** @jsx jsx */
import {
    jsx,
    Box,
    Container,
    Heading,
    Label,
    Button,
    Image,
    Input,
    Select,
    Text
} from "theme-ui"
import mmmImage from "assets/images/mmmImage2.jpeg"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const schema = yup.object({
    currency: yup.string().required(),
    amount: yup.number().positive().integer().required(),
}).required();

const Donate = () => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            currency: '',
            amount: 0,
        },
        resolver: yupResolver(schema)
    });

    const configureCheckout = (sessionId) => {
        const { Checkout } = window;

        Checkout.configure({
            session: {
                id: sessionId
            }
        });
        Checkout.showPaymentPage();
    }

    const submitDonation = async (request) => {
        axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/initiate`,
            {
                "amount": request.amount.toString(),
                "currency": request.currency,
                "orderId": uuidv4(),
                "name": request.name ?? 'John Doe',
                "email": request.email ?? 'johndoe@medicalmissionariesofmaryphcclinicandmaternity.org'
            }).then((apiResponse) => {
                configureCheckout(apiResponse.data.data.session.id);
            }).catch((error) => {
                alert(error.message);
            });
    }

    // Submit form
    const onSubmit = async (data) => {
        console.log(data);
        await submitDonation(data);
        // reset();
    }

    return (
        <Box id='home' as='section' variant='section.donate'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.illustration}>
                        <Image src={mmmImage} alt='banner' sx={styles.mmmImage} />
                    </Box>
                    <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.content}>
                        <Heading sx={styles.title}>
                            Donate
                        </Heading>
                        <Text as="p" sx={styles.description}>
                            Fill the form below to make your donations
                        </Text>
                        <Box mb={4}>
                            <Label htmlFor="name" mb={2}>Full Name (Optional)</Label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => <Input
                                    id="name"
                                    {...field}
                                />}
                            />
                            <Text
                                sx={{
                                    fontSize: 14,
                                    color: 'red'
                                }}
                            >
                                {errors.name?.message}
                            </Text>
                        </Box>
                        <Box mb={4}>
                            <Label htmlFor="email" mb={2}>Email Address (Optional)</Label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <Input
                                    id="email"
                                    {...field}
                                />}
                            />
                            <Text
                                sx={{
                                    fontSize: 14,
                                    color: 'red'
                                }}
                            >
                                {errors.email?.message}
                            </Text>
                        </Box>
                        <Box mb={4}>
                            <Label htmlFor="currency">Currency</Label>
                            <Controller
                                name="currency"
                                control={control}
                                render={({ field }) => <Select
                                    {...field}
                                    id="currency"
                                >
                                    <option hidden defaultValue>select an option</option>
                                    <option>USD</option>
                                    <option>NGN</option>
                                </Select>}
                            />
                            <Text
                                sx={{
                                    fontSize: 14,
                                    color: 'red'
                                }}
                            >
                                {errors.currency?.message}
                            </Text>
                        </Box>
                        <Box mb={4}>
                            <Label htmlFor="amount" mb={2}>Donation Amount</Label>
                            <Controller
                                name="amount"
                                control={control}
                                render={({ field }) => <Input
                                    type="number"
                                    id="amount"
                                    {...field}
                                />}
                            />
                            <Text
                                sx={{
                                    fontSize: 14,
                                    color: 'red'
                                }}
                            >
                                {errors.amount?.message}
                            </Text>
                        </Box>
                        <Button
                            variant='primary'
                            sx={styles.button}
                            type="submit"
                        >
                            Donate
                        </Button>
                        <Text as="p" sx={styles.description} mt={4}>
                            <strong>Account Details: Access Bank</strong> <br/>
                            <strong>USD</strong> - 1775619275 <strong>GBP</strong> - 1775566465 <strong>NGN</strong> - 1775663876
                        </Text>
                    </Box>
                </Box>
                <div id="hco-embedded"></div>
            </Container>
        </Box>
    )
}

export default Donate

const styles = {
    contentWrapper: {
        display: [null, null, null, "flex", "grid"],
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        justifyContent: "center",
        minHeight: [null, null, null, null, null, "100vh"],
        pt: [100, null, null, 120, 130, 120, 0]
    },
    content: {
        maxWidth: [507, null, null, 324, 450]
    },
    title: {
        fontWeight: "bold",
        fontSize: ["18px", null, null, null, "20px", "20px", "24px"],
        lineHeight: 1,
        letterSpacing: "-1px",
        color: "primary",
        mb: 2
    },
    mmmImage: {
        width: "450px"
    },
    form: {
        display: ["none", "flex"],
        flexDirection: "row",
        border: "1.5px solid #E4E6F2",
        padding: "8px",
        borderRadius: "5px"
    },
    input: {
        flexGrow: 2,
        border: "none",
        height: "50px",
        "&:hover": {
            outline: "none",
            border: "none",
            boxShadow: "none"
        },
        "&:focus": {
            outline: "none",
            border: "none",
            boxShadow: "none"
        }
    },
    button: {
        display: ["flex"]
    },
    text: {
        fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
        lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
        color: "textSecondary",
        my: ["14px", "19px"],
    },
    description: {
        color: "primary",
        fontSize: ["14px", "16px"],
        lineHeight: [1.85, 2.2],
        mb: "5px",
    },
    clients: {
        display: "flex",
        alignItems: "center",
        mt: ["20px", "45px", "45px", "30px", "45px"],
        img: {
            maxWidth: ["80px", "100%", "100%", "100%"],
            "+ img": {
                ml: ["14px", "28px", "28px", "20px"]
            }
        }
    },
    illustration: {
        display: ["block", "block"],
        mt: ["30px", "30px", 0],
        mb: ["60px", "60px", 0],
        img: {
            maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"]
        }
    }
}
