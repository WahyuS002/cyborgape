import Head from "next/head";

export default function Header(props) {
  const { title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Cyborg Ape is a collection combined from the Ape element and Robot element! All Apes are Hand Made! Detail and Uniqueness are our priority!Derivative Ape. (Not Affiliated with BAYC)"
        />
        <link rel="icon" href="/img/logo.svg" />

        {/* AOS Animation */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
    </>
  );
}
