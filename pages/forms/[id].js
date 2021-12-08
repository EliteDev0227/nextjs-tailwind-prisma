import Head from "next/head";
import Link from "next/link";
import {useState} from "react";
import PageHeader from "../../components/PageHeader";
import prisma from "../../lib/prisma";
import {API_ENDPOINT_URL} from "../../lib/common";


export default function Home(props) {
  const formId = props.formData.id;

  const [placeholder, setPlaceholder] = useState(props.formData.placeholder);
  const [fontColor, setFontColor] = useState(props.formData.fontColor);
  const [fontSizePx, setFontSizePx] = useState(props.formData.fontSizePx);

  const updateForm = async () => {
    await fetch(API_ENDPOINT_URL + "update-form", {
      method: 'post',
      body: JSON.stringify({
        id: formId,
        placeholder,
        fontColor,
        fontSizePx: parseInt(fontSizePx)
      })
    });
  }

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Loops</title>
        <meta name="description" content="Simple Email Sending" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <PageHeader title="Form Widget" description="Create a form for your site" />
        <div className="content-wrapper">
          <div className="flex flex-col">
              <label className="text-sm">Placeholder Text</label>
              <input className="rounded border mb-4 h-8" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} onBlur={() => updateForm()}/>
              <label className="text-sm">Font Color</label>
              <input className="rounded border mb-4 h-8" value={fontColor} onChange={(e) => setFontColor(e.target.value)}  onBlur={() => updateForm()} />
              <label className="text-sm">Font Size</label>
              <select className="rounded border mb-4 h-8" value={fontSizePx} onChange={(e) => setFontSizePx(e.target.value)}  onBlur={() => updateForm()}>
                {
                  Array.apply(null, Array(5)).map((x, i) => {
                    const px = i * 2 + 14;
                    return (
                      <option key={px} value={px}>{px}px</option>
                      );
                  })
                }
              </select>
          </div>

        </div>
        <div className="text-center text-sm text-gray-600">
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {

  const forms = await prisma.formEmbed.findMany({});

  const paths = forms.map(form => {
    return {
      params: {
        id: form.id.toString()
      }
    }

  });
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const form = await prisma.formEmbed.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });
  return {
    props: {
      formData: form
    }
  }
}