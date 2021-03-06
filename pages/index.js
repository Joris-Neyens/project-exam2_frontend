
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL, HOME_PATH, COURSES_PATH, REVIEWS_PATH } from "../src/api/baseUrl";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";
import Layout from "../src/components/layout/Layout";
import Newsletter from "../src/components/pages/home/Newsletter";
import Reviews from "../src/components/pages/home/Reviews";
import ShortAboutCourse from "../src/components/pages/home/ShortAboutCourse";
import Uitleg from "../src/components/pages/home/Uitleg";

export default function Home({ home, courses, reviews }) {



  return (
    <div className="wrapper">
      <Layout>
        <Head
          title="Home"
          description="willehad cursus platform startpagina"
        ></Head>
        <Header
          courses={courses}
          headerButtonName="ons aanbod"
          buttonPrimary="/cursus-aanbod"
          buttonSecondary="/hoe-het-werkt"
          title={home.title}
          url={home.header_image.url}
          modal={false}
          home={home}
          viewHeight={100}
          textCol="4"
          subtitle={home.header_subtitle}
          date={home.course_date}
        />
        <Uitleg />
        <ShortAboutCourse
          courses={courses}
          home={home}
        />
        <Newsletter />
        <Reviews reviews={reviews} />
      </Layout>
    </div>
  );
}
export async function getServerSideProps() {
  const url = BASE_URL + HOME_PATH;
  const courseUrl = BASE_URL + COURSES_PATH;
  const reviewsUrl = BASE_URL + REVIEWS_PATH;

  let home = [];
  let courses = [];
  let reviews = [];

  try {
    const response = await axios.get(url);
    console.log(response.data);
    home = response.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    courses = response.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(reviewsUrl);
    console.log(response.data);
    reviews = response.data;
  } catch (error) {
    console.log(error);
  }


  return {
    props: {
      home: home,
      courses: courses,
      reviews: reviews,
    },
  };
}

Home.propTypes = {
  home: PropTypes.object,
  courses: PropTypes.array,
  reviews: PropTypes.array,
}