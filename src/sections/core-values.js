/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui"
import Image from "components/image"

import serviceImg from "assets/images/image5.jpeg"
import { Fragment } from "react"
import BodyHeading from "components/body-heading"
import Accordion from "components/accordion/accordion"

const coreValuesData = [
    {
        title: "Interconnectedness",
        contents: "Interconnectedness is an attitude which sees a oneness in all of God’s creation – everything in creation exists in communion with everything else. It is the state of being connected and having a close relationship with other people and things. We are interconnected with one another and we depend on one another for survival and to flourish. Every action, thought or word has effects on others far beyond our imagination; and we are affected and influenced too. The more we are able to sense our interconnectedness, the more we understand that others are part of ourselves and so we become less likely to inflict harm. Interconnectedness is a reality. The value is the growing awareness of it."
    },
    {
        title: "Commitment",
        contents: "Commitment is a sincere, long-term promise made and kept to dedicate the self totally to a cause or person or group or task. Commitment means not only promising to do something, but much more importantly, actually investing the necessary effort and actions to make it happen. It means sticking with something even when times are tough. This value involves sacrifice, investing of the whole self and perseverance. We can see our commitment to one another and to the communities we serve where services are most needed even in very remote parts of the world."
    },
    // {
    //     title: "Creative Fidelity",
    //     contents: "Creative Fidelity This value is about remaining faithful to core principles/charism/spirit while seeking new ways to be and to express these principles."
    // },
    {
        title: "Compassion",
        contents: "Compassion is the ability and the willingness to enter into the chaos, the pain, the suffering and the story of another allowing it to affect us though it were our own. When a reflex reaction causes us to help a stranger, with no motivation other than that person is in need, our compassion is in action. Compassion is not sympathy or pity: “The arch-enemy of compassion is pity. Pity puts distance between you and the person you are pitying. Compassion puts the two of you on the same level, enabling you to work together to change the situation, or at least to make it more bearable”. (Sr Ann Ward)"
    },
    {
        title: "Hospitality",
        contents: "Hospitality is traditionally defined as the friendly and generous reception and entertainment of guests, visitors, or strangers. Over the years the concept of hospitality has expanded to mean the attitude of making people feel like they belong, like they matter – feel at home. It is being with people in such a way that they feel special, important and welcomed into our life and our heart. It is an attitude that involves generosity in words and actions. St Benedict’s rule says, “guests are to be welcomed as Christ.” Distinctions based on wealth, creed, race and gender, for instance, are not made in expressing this value. Hospitality is a mutual value and is only complete when we give as well as receive it."
    },
    {
        title: "Integrity",
        contents: "Integrity being true to ourselves and being honest, upright, and decent in our dealings with others. Our thoughts and words are in line with each other; our actions align with our principles. Integrity demands courage. Developing integrity requires internal honesty, because we can’t be honest with others unless we are honest with ourselves. People of integrity can be counted on to stand up for what is right, even if it is unpopular and to do the right thing even when there is no one around to see. Integrity allows other people to trust us because they know that we value our commitments and seek to live by them."
    },
    {
        title: "Creative Fidelity",
        contents: "This value is about remaining faithful to core principles/charism/spirit while seeking new ways to ‘be’ and to express these principles. God’s faithfulness to all creation is expressed this way: The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning… Lamentations 3:22-23. This is a value about keeping the message of the gospel, the charism of our congregation and our commitment fresh, alive and relevant by constantly seeking new ways of being in the reality we find ourselves. A faithfulness that is not stagnant or a blind repetition but involves constant reflection, evaluation and discernment to allow the faithful love, the charism in us to be ‘born anew’ in each reality and in each"
    }
];

const CoreValues = () => {
    return (
        <Box as='section' variant='section.mainServices'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <BodyHeading
                        sx={styles.heading}
                        title={
                            <Fragment>
                                Our Core Values that Guide Us
                            </Fragment>
                        }
                        subtitle={<Fragment>Core Values</Fragment>}
                        description=""
                    />
                    <Accordion 
                        items={coreValuesData}
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default CoreValues

const styles = {
    heading: {
        textAlign: "left",
        mb: ["20px"],
        mt: [0, 0, "-40px"],
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
