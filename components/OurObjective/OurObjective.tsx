import { Flex, Button, createStyles, Center, Title, Container, Text } from '@mantine/core';

export function OurObjective() {
  const useStyles = createStyles((theme) => ({
    title: {
      color: '#eba900',
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1,
      marginBottom: theme.spacing.md,
    },
  }));
  const { classes } = useStyles();

  return (
    <Flex
      mih={50}
      bg="white"
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <Container p={40}>
        <Center>
          <Title className={classes.title}>Nuestro Objetivo</Title>
        </Center>
        <Center>
          <Text align="center" style={{ fontStyle: 'italic', fontSize: 20 }}>
            La Universidad de Alta Dirección y Emprendimiento ha desarrollado una oferta educativa
            que promueve la innovación empresarial, haciendo frente a los retos de la sociedad y los
            avances tecnológicos.
          </Text>
        </Center>
      </Container>
    </Flex>
  );
}
