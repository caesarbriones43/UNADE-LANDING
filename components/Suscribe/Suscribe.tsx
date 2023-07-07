import {
  BackgroundImage,
  Center,
  Text,
  Box,
  Flex,
  createStyles,
  UnstyledButton,
  rem,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import image from './inscribete.jpg';

const useStyles = createStyles((theme) => ({
  feature: {
    // position: 'relative',
    // paddingTop: theme.spacing.xl,
    // paddingLeft: theme.spacing.xl,
    // backgroundColor: 'blue',
    backgroundColor: '#ccc4a7',
  },
  btn: {
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: theme.shadows.md,
    },
  },


  icon: {
    color: '#eba900',
  },

  title: {
    color: '#f88d2a',
    fontSize:68,
    letterSpacing: 7,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
    [theme.fn.smallerThan('sm')]: {
      fontSize:52,
  },
},
  subtitle: {
    color: 'black',
  },
}));

export default function Suscribe() {
  const { height, width } = useViewportSize();
  const { classes } = useStyles();

  const handleClick = (link: string) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  return (
    <BackgroundImage src={image.src} w={'100%'}  h={height}>
      <Flex
        h={'100%'}
        bg="rgba(0, 0, 0, .3)"
        justify="center"
        align="center"
        direction="column"
      >
        <Text className={classes.title}>¡Inscríbete!</Text>
        <UnstyledButton
          className={classes.btn}
          style={{ backgroundColor: '#f88d2a', height: 50, width: 200, borderRadius: 20 }}
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            handleClick('https://api.whatsapp.com/send/?phone=4491127528&text&type=phone_number&app_absent=0');
          }}
        >
          <Center>
            <Text size="xs" color="white" style={{ fontSize: 16, fontWeight: 'bold' }}>
              Iniciar Ahora
            </Text>
          </Center>
        </UnstyledButton>
      </Flex>
    </BackgroundImage>
  );
}
