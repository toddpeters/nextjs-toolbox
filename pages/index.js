import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bershars Furniture Restoration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bershars Furniture Restoration" />
        <hr />
        <p className="description">
          Website Under Construction
        </p>
        {/* <FeedbackForm /> */}
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
