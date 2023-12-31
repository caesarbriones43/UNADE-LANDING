import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
  Flex,
  UnstyledButton,
} from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from '@tabler/icons-react';
import Link from 'next/link';
import brandLogoDark from '../../public/brand_logo_dark.png';
import wave from './wave.svg';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colors.dark[8],
    borderTop: `${rem(1)} solid ${theme.colors.dark[5]}`,
  },

  logo: {

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: '100%',
    marginLeft: 10,
    // margin:10,
    // backgroundColor: 'red',
  },

  link: {
    display: 'block',
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  bg: {
    backgroundColor: '#011e41',
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.white,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colors.gray[4]}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  brandContainer: {
    width: 200,
    // backgroundColor: 'red',
  },
  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface MainFooterProps {
  data: {
    title: string;
    links: { label: string; link: string,isLink:boolean }[];
  
  }[];
}

export function MainFooter({ data }: MainFooterProps) {
  const { classes, theme } = useStyles();

  const handleClick = (link: string) => {
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  const handleClickLinkForm = (e: any, link: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(
      link,
      '_blank' // <- This is what makes it open in a new window.
    );
  };

  const handleClickLink = (link: string) => {
    const element = document.getElementById('#us');
    element?.scrollIntoView();
  };

  const groups = data.map((group) => {
    const links = group.links.map((link, index) =>
      link.isLink  ? (
        <UnstyledButton
          onClick={(e: any) => {
            handleClickLinkForm(e, link.link);
          }}
          c="#808080"
        >
          <Text
            key={index}
            className={classes.link}
            style={{
              textDecoration: 'inherit',
              color: 'inherit',
              cursor: 'auto',
            }}
          >
            {link.label}
          </Text>
        </UnstyledButton>
      ) : (
        <Link
          href={`#${link.link}`}
          style={{
            textDecoration: 'inherit',
            color: 'inherit',
            cursor: 'auto',
          }}
        >
          <Text key={index} className={classes.link}>
            {link.label}
          </Text>
        </Link>
      )
    );

    return (
      <Flex gap="xs" justify="center" align="center" direction="column" wrap="wrap">
        <div className={classes.wrapper} key={group.title}>
          <Text className={classes.title}>{group.title}</Text>
          {links}
        </div>
      </Flex>
    );
  });

  return (
    <>
      {/* <div className={classes.bg}>
        <Image src={wave.src}></Image>
      </div> */}

      <footer className={classes.footer}>
        <div className={classes.inner}>
          <div className={classes.logo}>
            {/* <MantineLogo size={30} /> */}

            <div className={classes.brandContainer}>
              <Image src={brandLogoDark.src} fit="fill"></Image>
            </div>

            {/* <Text size="xs" color="dimmed" className={classes.description}>
              La Univesidad de los profesionales digitaless
            </Text> */}
          </div>
          <div className={classes.groups}>{groups}</div>
        </div>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            Copyright © 2023 - UNADE | Privacidad, cookies y condiciones
            legales | Navegación
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandWhatsapp
                size="1.05rem"
                stroke={1.5}
                onClick={() => {
                  handleClick(
                    'https://api.whatsapp.com/send/?phone=4491127528&text&type=phone_number&app_absent=0'
                  );
                }}
              />
            </ActionIcon>
            <ActionIcon
              size="lg"
              onClick={() => {
                handleClick('https://instagram.com/unadeags?igshid=NGExMmI2YTkyZg==');
              }}
            >
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              size="lg"
              onClick={() => {
                handleClick('https://www.facebook.com/unadeags?mibextid=ZbWKwL');
              }}
            >
              <IconBrandFacebook size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </footer>
    </>
  );
}
