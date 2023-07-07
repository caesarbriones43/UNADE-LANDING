import { MainHeader } from '../components/Header/MainHeader';
import { MainFooter } from '../components/Footer/MainFooter';
import { OurGoals } from '../components/OurGoals/OurGoals';
import { EducativeOfferCard } from '../components/EducativeOffer/EducativeOfferCard';
import { Us } from '../components/Us/Us';
import { FloatingScreen } from '../components/Fabs/FloatingScreen';
import { FloatingWhatsapp } from '../components/Fabs/FloatingWhatsapp';
import { OurObjective } from '../components/OurObjective/OurObjective';
import Suscribe from '../components/Suscribe/Suscribe';
import { Slider } from '../components/Slider/Slider';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <Slider />
      {/* <OurGoals /> */}
      <OurObjective></OurObjective>
      <Us></Us>

      <EducativeOfferCard />
      <FloatingWhatsapp></FloatingWhatsapp>
      <FloatingScreen />
      <Suscribe></Suscribe>
      <MainFooter
        data={[
          {
            title: 'UNADE',
            links: [
              {
                link: 'us',
                isLink: false,

                label: 'Nosotros',
              },
              {
                link: 'https://pwa-public.s3.us-west-1.amazonaws.com/oferta-educativa/Reglamento+General+IIA-1.pdf',
                isLink: true,
                label: 'Reglamento Institucional',
              },
              {
                link: 'offert',
                isLink: false,

                label: 'Oferta Educativa',
              },

              {
                link: 'https://inscripciones.iinternacional.edu.mx/',
                isLink: true,
                label: 'Inscríbete',
              },
            ],
          },
          {
            title: 'Contacto',
            links: [
              {
                link: '',
                label:
                  'Av. Lic. Adolfo López Mateos Pte., No. 421, Zona Centro, Aguascalientes, Ags.',
                isLink: false,
              },
              {
                link: '',
                isLink: false,

                label: 'Teléfono: (449)-678-8271',
              },
              {
                link: '',
                isLink: false,

                label: 'WhatsApp: (449)-112-7528',
              },
              {
                link: '',
                isLink: false,

                label:
                  'Correos: promocionprepa@unade.com.mx promocionlic@unade.com.mx promocionposgrado@unade.com.mx',
              },
            ],
          },
        ]}
      />
    </>
  );
}
