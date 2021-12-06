import Head from "next/head";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Loops</title>
        <meta name="description" content="Simple Email Sending" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <PageHeader title="foo" description="lorem ipsum" />
        {/* TODO add list of form ids */}
        {/* TODO add button to make new form */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, //TODO load list of forms
  };
}
