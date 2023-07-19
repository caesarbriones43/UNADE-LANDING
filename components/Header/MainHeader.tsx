import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Image,
  Affix,
  Transition,
} from '@mantine/core';
import { useDisclosure, useViewportSize, useWindowScroll } from '@mantine/hooks';

import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconSchool,
  IconChevronDown,
} from '@tabler/icons-react';
import brandLogo from '../../public/brand_logo.png';
import brandLogoDark from '../../public/brand_logo_dark.png';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  brandContainer: {
    width: 165,
    // backgroundColor: 'red',
  },

  registerButton: {
    textDecoration: 'none',
    backgroundColor: '#011e41',
    '&:not([data-disabled])': theme.fn.hover({
      backgroundColor: '#011e41',
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const mockdata = [

  {
    icon: IconSchool,

    title: 'Licenciatura en Ingeniería Industrial y Logística',
    link: 'https://drive.google.com/file/d/1xu-2jB3zbgVTZ995vAZL0faTDeRxoIIt/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Licenciatura en Ingeniería en Ciencia de Datos e Inteligencia Artificial',
    link: 'https://drive.google.com/file/d/1aVIjgfTZ_eQvjaxsXSujAgKPgiRKSMGI/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Licenciatura en Mercadotecnia Digital',
    link: 'https://drive.google.com/file/d/1JV4ZPcD9iLIJTpQN7_e7YJ6T2qlCVN4P/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Licenciatura en Administración y Dirección de Empresas',
    link: 'https://drive.google.com/file/d/1jUJe61-Id6mmogBuX0CGIece2JfkPSiN/view?usp=drive_link',
  },
  {
    icon: IconSchool,

    title: 'Licenciatura en Derecho',
    link: 'https://drive.google.com/file/d/1XhrEGY9op9G4o1JqExqehCPWIIhCdU9N/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Licenciatura en Ciencias de la Educación',
    link: 'https://drive.google.com/file/d/1Z_fEXmtBFUKjRiNvF97yN0LNhgrbcPUM/view?usp=drive_link',
  },
  {
    icon: IconSchool,

    title: 'Doctorado en Educación, Altas Capacidades y Tecnologías Disruptivas',
    link: 'https://drive.google.com/file/d/1a_Nru0QFV10YH5Yze8JGrj6THUa6F7cL/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Maestría en Innovación Educativa y Altas Capacidades',
    link: 'https://drive.google.com/file/d/1j25j_wtBjo1D8kv_c0pppGBx5ss0bg49/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Maestría en Negocios Digitales e Innovación',
    link: 'https://drive.google.com/file/d/1Tm1DWubblw765O4JNnFIqyZrjiRPquZN/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Maestría en Dirección y Administración de Empresas',
    link: 'https://drive.google.com/file/d/1BcKz6zWIrRsBRMR09yqzAL7gU1V7RN_w/view?usp=drive_link',
  },
  {
    icon: IconSchool,

    title: 'Maestría en Calidad y Logística',
    link: 'https://drive.google.com/file/d/1-UFLWmue2eT_49SNFxgMXpGDZjOHbmSQ/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Maestría en Administración de Enfermería',
    link: 'https://drive.google.com/file/d/1xlDeHCA1oHyvgzRdLzDQDRd7F2qZB8kE/view?usp=sharing',
  },
  {
    icon: IconSchool,

    title: 'Maestría en Ética y Derechos Humanos',
    link: 'https://drive.google.com/file/d/1UdDd9sKNWJ-nVW7k3MZdGJA8GnwZKu50/view',
  },
];

export function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [scroll, scrollTo] = useWindowScroll();
  const { height, width } = useViewportSize();

  const { classes, theme } = useStyles();

  const handleClick = (link: string) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  };
  const links = mockdata.map((item) => (
    <UnstyledButton
      className={classes.subLink}
      key={item.title}
      onClick={(e: any) => {
        e.preventDefault();
        e.stopPropagation();
        handleClick(item.link);
        // handleClick('https://api.whatsapp.com/send/?phone=4491127528&text&type=phone_number&app_absent=0/');

      }}
    >
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color="#eba900" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Affix position={{ top: 0 }}>
      <Transition transition="slide-up" mounted={scroll.y > -2}>
        {(transitionStyles) => (
          <Box style={transitionStyles}>
            <Header w={width} height={80} px="md">
              <Group position="apart" sx={{ height: '100%' }}>
                <div className={classes.brandContainer}>
                  <Image
                    src={theme.colorScheme === 'dark' ? brandLogoDark.src : brandLogo.src}
                    fit="fill"
                  ></Image>
                </div>
                <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                  <a href="/" className={classes.link}>
                    Nosotros
                  </a> 
                  <a
                  onClick={(e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClick('https://aula.unade.com.mx/');
                  }}
                  className={classes.link}
                >
                  Campus Virtual
                </a>
                  <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                    <HoverCard.Target>
                      <a href="#" className={classes.link}>
                        <Center inline>
                          <Box component="span" mr={5}>
                            Oferta Educativa
                          </Box>
                          <IconChevronDown size={16} color={'#eba900'} />
                        </Center>
                      </a>
                    </HoverCard.Target>

                    <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                      <Divider
                        my="sm"
                        mx="-md"
                        color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                      />

                      <SimpleGrid cols={2} spacing={0}>
                        {links}
                      </SimpleGrid>
                    </HoverCard.Dropdown>
                  </HoverCard>
                </Group>

                <Group className={classes.hiddenMobile} style={{ paddingRight: 20 }}>
                  <Button className={classes.registerButton} color="#011e41">
                    <Text
                      color='#ffffff'
                      onClick={(e: any) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleClick('https://inscripciones.unade.com.mx/');
                      }}
                    >
                      Inscríbete Ahora
                    </Text>
                  </Button>
                </Group>

                <Burger
                  opened={drawerOpened}
                  onClick={toggleDrawer}
                  className={classes.hiddenDesktop}
                />
              </Group>
            </Header>

            <Drawer
              opened={drawerOpened}
              onClose={closeDrawer}
              size="100%"
              padding="md"
              title={
                <Image
                  src={theme.colorScheme === 'dark' ? brandLogoDark.src : brandLogo.src}
                  fit="fill"
                ></Image>
              }
              className={classes.hiddenDesktop}
              zIndex={1000000}
            >
              <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                <a href="/" className={classes.link}>
                  Nosotros
                </a>
                <UnstyledButton className={classes.link} onClick={toggleLinks}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Oferta Educativa
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </UnstyledButton>
                <Collapse in={linksOpened}>{links}</Collapse>
                <a
                  onClick={(e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleClick('https://aula.unade.com.mx/');
                  }}
                  className={classes.link}
                >
                  Campus Virtual
                </a>
                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
              </ScrollArea>
            </Drawer>
          </Box>
        )}
      </Transition>
    </Affix>
  );
}
