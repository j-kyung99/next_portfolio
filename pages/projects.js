import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>빡코딩 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}

//빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return {
    props: {}, // will be passed to the page component as props
  };
}
