import HomeBanner from './_components/homebanner';
import Service from './_components/service';
import About from './_components/about';
import ContactForm from './_components/contact';

const page = () => {
  return (
    <>
      <HomeBanner />
      <About />
      <Service />
      <ContactForm />
    </>
  );
};

export default page;
