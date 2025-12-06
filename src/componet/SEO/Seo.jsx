import Head from 'next/head';

const SEO = ({
  title = "Emmanuel Oppong | Frontend Developer Portfolio",
  description = "Explore Emmanuel Oppong's portfolio showcasing innovative frontend development projects, UI/UX designs, and creative web solutions.",
  image = "/default-image.jpg", // Replace with a valid image path
  url = "https://welcome-to-my-world-hola.vercel.app/",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
