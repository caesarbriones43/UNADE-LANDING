import { Image, Title } from '@mantine/core';
import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
  Container,
  Badge,
} from '@mantine/core';
import wave from './wave.svg';
import line from './line.svg';

import {
  IconChevronDown,
  IconCar,
  IconCashBanknote,
  IconTool,
  IconKeyboard,
  IconShoppingCart,
  IconDatabase,
  IconCloudComputing,
  IconCreditCard,
  IconRobot,
  IconApps,
  IconUsers,
  IconCode,
  IconGitBranch,
  IconAmbulance,
  IconBrandDocker,
  IconPencil,
} from '@tabler/icons';

import Link from 'next/link';
import { Goals } from './Goals';

const mockdata = [
  {
    title: 'Gestión de Producto',
    icon: IconCreditCard,
    color: 'violet',
    page: '/services#ProductManagement',
    // page: "/services#anchor-name",
  },
  {
    title: 'Análisis de Datos',
    icon: IconDatabase,
    color: 'indigo',
    page: '/services#AnalysisOfData',
  },
  {
    title: 'Modernización de Aplicaciones',
    icon: IconGitBranch,
    color: 'blue',
    page: '/services#ApplicationModernization',
  },
  {
    title: 'Arquitectura Cloud y Migraciones',
    icon: IconCloudComputing,
    color: 'green',
    page: '/services#CloudArchitectureAndMigrations',
  },
  {
    title: 'Automatización',
    icon: IconRobot,
    color: 'teal',
    page: '/services#Automation',
  },
  {
    title: 'Diseño UI & UX',
    icon: IconPencil,
    color: 'cyan',
    page: '/services#UiAndUxDesign',
  },
  {
    title: 'Ingeniería de Software & DevOps',
    icon: IconBrandDocker,
    color: 'grape',
    page: '/services#SoftwareEngineeringAndDevOps',
  },
  {
    title: 'Aplicaciones Móviles',
    icon: IconApps,
    color: 'yellow',
    page: '/services#MobileApps',
  },
  {
    title: 'Integraciones',
    icon: IconCode,
    color: 'lime',
    page: '/services#Integrations',
  },
  {
    title: 'Consultorias',
    icon: IconUsers,
    color: 'orange',
    page: '/services#Consulting',
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  titleMain: {
    fontSize: 24,
    fontWeight: 500,
    align: 'justify',
    color: '#011e41',
    [theme.fn.smallerThan('sm')]: {
      fontSize: 18,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  backgroung: {
    backgroundColor: '#eba900',
  },

  bgW: {
    backgroundColor: '#ffffff',
  },

  bg: {
    backgroundColor: '#eba900',
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: 'red',
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export function OurGoals() {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.backgroung}>
      <div className={classes.bg}>
        <Image src={wave.src}></Image>
      </div>
      <Container>
        <Group position="center">
          <Badge size="xl" c="#ffffff" bg={'#011e41'}>
            Nuestro Objetivo
          </Badge>
        </Group>
        <Title order={2} className={classes.titleMain} align="justify" mt="sm" >
          U Internacional ha desarrollado una oferta educativa basada en los retos de la
          transformación digital, Nuestro objetivo es que descubras cómo utilizar los conocimientos
          de una disciplina y la tecnología para que desarrolles todo tu potencial profesional.
        </Title>
        <Goals
          supTitle="asdasd"
          description="asdads"
          data={[
            {
              image: 'auditors',
              title: 'Proporcionar oportunidades de desarrollo personal y profesional',
              description:
                'Desarrollar habilidades interpersonales, de liderazgo y de comunicación que les ayuden en sus futuras carreras y en su vida personal.',
            },
            {
              image: 'others',
              title: 'Contribuir al desarrollo de la comunidad',
              description:
                'Los estudiantes, profesores y personal de la universidad trabajan juntos para mejorar la calidad de vida de las personas en su comunidad.',
            },
            {
              image: 'lawyers',
              title: 'Ofrecer una educación de alta calidad',
              description:
                'Adquirir conocimientos y habilidades que les permitan enfrentar desafíos en sus futuras carreras y en sus vidas personales.',
            },
            {
              image: 'accountants',
              title: 'Fomentar la investigación',
              description:
                'Los profesores y estudiantes trabajan juntos para investigar y crear nuevos conocimientos en sus áreas de especialización.',
            },
          ]}
        />
      </Container>
      <div className={classes.bgW} id="goals">
        <Image src={line.src}></Image>
      </div>
    </div>
  );
}
