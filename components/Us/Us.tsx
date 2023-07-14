import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
  Container,
  Group,
  Badge,
  Center,
} from '@mantine/core';
import { Values } from './Values';

import { motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.white,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    minWidth: '40%',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: '#eba900',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function Us() {
  const { classes } = useStyles();
  return (
    <>
      <div style={{ backgroundColor: '#011e41' }}>
        <div style={{ padding: 50 }}>
          <Center pb={50}>
            <Title className="titleUnderLine">Nosotros</Title>
          </Center>
          <div className={classes.wrapper} style={{ backgroundColor: '#011e41' }}>
            <div className={classes.body}>
              <Group position="center" pb={15}>
                <Title className={'titleUnderLineInverse'}>Misión</Title>
              </Group>

              <Text fw={500} fz="lg" mb={5} align="justify" c="#ffffff">
                Formar profesionales, líderes y emprendedores competentes y comprometidos con el
                éxito empresarial, contribuyendo al desarrollo económico y social del País.
              </Text>
              <div style={{ marginTop: 100 }}>
                <Group position="center" pb={15}>
                  <Title className={'titleUnderLineInverse'}>Visión</Title>
                </Group>
                <Text fw={500} fz="lg" mb={5} align="justify" c="#ffffff">
                  Ser reconocida como una institución que forma líderes y emprendedores, destacando
                  por la excelencia académica y el impacto de innovación en la sociedad.
                </Text>
              </div>
            </div>
            <div>
              <motion.div
                initial={false}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <Image
                  src={
                    'https://res.cloudinary.com/dslc2vjcz/image/upload/v1689285719/Nosotros_qyv40q.jpg'
                  }
                  className={classes.image}
                  style={{
                    border: '2px solid #eba900',
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <Values />
      </div>
    </>
  );
}
