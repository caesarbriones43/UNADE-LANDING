import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Container,
  BackgroundImage,
  Center,
  Box,
  Flex,
  UnstyledButton,
} from '@mantine/core';
import capa1 from '../../public/images/capa_1.jpg';

import { useViewportSize } from '@mantine/hooks';
import AnimationContainer from '../AnimationContainer/AnimationContainer';

const useStyles = createStyles((theme) => ({
  card: {
    // height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },
  registerButton: {
    textDecoration: 'none',
    backgroundColor: '#eba900',
    '&:not([data-disabled])': theme.fn.hover({
      backgroundColor: '#eba900',
    }),
  },
  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  btn: {
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: theme.shadows.md,
    },
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();
  const { height, width } = useViewportSize();

  const handleClick = (link: string) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  return (
    <BackgroundImage
      src={image}
      style={{
        minHeight: 'inherit',
        minWidth: 'inherit',
        objectFit: 'cover',
        height: 'inherit',
        width: 'inherit',
      }}
    >

      <Flex
        p={40}
        h={height}
        bg="rgba( 1, 30, 65, 0.50)"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Text className={classes.title}>{title}</Text>

        <Text className={classes.category}>{category}</Text>
        <UnstyledButton
          className={classes.btn}
          style={{ backgroundColor: '#011e41', height: 50, width: 200, borderRadius: 20 }}
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            handleClick('https://inscripciones.unade.com.mx/');
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

const data = [
  {
    image: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1689286167/Carrusel1_apkufx.jpg',
    title: 'Maestría en Dirección y Administración de Empresas',
    category: 'Fortalece tu liderazgo, impulsa éxito.',
  },
  {
    image: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1689286167/Carrusel3_ozm0wt.jpg',
    category: 'Fortalece tu liderazgo, impulsa éxito.',
    title: 'Maestría en Administración de Enfermería',
  },
  {
    image: 'https://res.cloudinary.com/dslc2vjcz/image/upload/v1689286165/Carrusel2_edsmk8.jpg',
    category: 'Fortalece tu liderazgo, impulsa éxito.',
    title: 'Licenciatura en Ingeniería Industrial y Logística',
  },
];

export function Slider() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      withIndicators
      loop
      height="100%"
      pt={60}
      //   slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
