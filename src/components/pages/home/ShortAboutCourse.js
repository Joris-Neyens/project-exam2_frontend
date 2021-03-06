import Image from "next/image";
import Link from 'next/link';
import PropTypes from "prop-types";

export default function shortAboutCourse({
  home,
}) {

const {course_date, course_image, course_title, course_description} = home


  const alt = `afbeelding voor de cursus:${course_title}`

  let date = "";

  if (course_date) {
    date = `start ${course_date}`;
  }

  return (
    <section className="d-flex align-items-center py-lg-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-8 mx-auto col-lg-6 offset-lg-0 position-relative">
            <Image
              alt={alt}
              src={course_image.url}
              className="short-about-course__image pt-4"
              layout="responsive"
              width="200"
              height="140"
            />
            <span className="short-about-course__overlay position-absolute"></span>
          </div>
          <div className="col-lg-5 ml-lg-5 pt-4 d-flex flex-column justify-content-centr">
            <p className="short-about-course__date text-center text-lg-left m-0">
              {date}
            </p>
            <h2 className="pt-1 text-center text-lg-left">{course_title}</h2>
            <p className="pt-2 text-center text-lg-left">
              {course_description}
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link href="/hoe-het-werkt">
                <button className="button__primary col-5">hoe het werkt</button>
              </Link>
              <Link href="/cursus-aanbod">
                <button className="button__secondary--dark col-5 ml-3">
                  ons aanbod
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

shortAboutCourse.propTypes = {
  home: PropTypes.object.isRequired,
}
