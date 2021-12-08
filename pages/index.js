import Head from "next/head";
import {useRouter} from "next/router";
import PageHeader from "../components/PageHeader";
import {API_ENDPOINT_URL} from "../lib/common";
import prisma from "../lib/prisma";

export default function Home(props) {
  const router = useRouter();

  const createNewForm = async () => {
    await fetch(API_ENDPOINT_URL + "create-form", {
      method: 'post'
    })
    router.reload();
  }

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Loops</title>
        <meta name="description" content="Simple Email Sending" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <PageHeader title="Forms" description="List of forms" />
        <div className="content-wrapper">
          <div className="flex flex-col gap-y-6">
            {
              props.forms.map(form => {
                return (
                  <button key={form.id} className="btn btn-blue" onClick={() => router.push(`/forms/${form.id}`)}>
                    Form: {form.id}
                  </button>
                )
              })
            }
            <button className="btn btn-green" onClick={() => createNewForm()}>
              Create New Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  const forms = await prisma.formEmbed.findMany({});

  return {
    props: {
      forms
    },
  };
}


