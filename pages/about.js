import AboutPage from '../data/about.json'
import { Flex, Box, Text, Button } from '@chakra-ui/react';


export default function About() {
    console.log(AboutPage);

    return (
        <>
            <meta name="author" content="Advanced Dynamic Content Project" />
            <meta property="title" content="FindAPlace" />
            <meta property="description" content="FindAPlace showcases live real estate listings that can be sorted in all sorts of ways!" />
            <link rel="icon" href="/favicon.ico" />

            <Box>
                <Flex>
                    {
                        AboutPage.map((AboutPage, id) => {
                            return (
                                <Flex flexDirection="column" justifyContent="center" alignItems="center" m="10" key={id}>
                                    <Text fontSize="3xl" fontWeight="bold">{AboutPage.title}</Text>
                                    <img width="50%" src={AboutPage.image_path} />
                                    <Text fontSize="lg">{AboutPage.body_text}</Text>
                                </Flex>
                            )
                        })
                    }
                </Flex>
            </Box>
        </>
    )
}