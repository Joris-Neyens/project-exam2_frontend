import PropTypes from "prop-types";
import DashboardNav from "../../../src/components/layout/DashboardNav";
import axios from "axios";
import AdminLayout from "../../../src/components/layout/AdminLayout";
import Head from "../../../src/components/head/Head";
import SideNav from "../../../src/components/layout/SideNav";
import PutHomeInfo from "../../../src/components/pages/edit-home/PutHomeInfo";
import PutHomeHeader from "../../../src/components/pages/edit-home/PutHomeHeader";
import PutHomeCourseImg from "../../../src/components/pages/edit-home/PutHomeCourseImg";
import PutReview from '../../../src/components/pages/edit-home/PutReview';
import { BASE_URL, HOME_PATH} from "../../../src/api/baseUrl";

export default function editHome({ home }) {
  const { id, header_image, course_image } = home;

  return (
    <div>
      <Head title="edit homepage" description="edit homepage willehad"></Head>
      <AdminLayout>
        <DashboardNav />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <div className="col-lg-8 pb-4 mt-5">
              <div className="row">
                <div className="col-lg-10 pl-lg-5">
                  <h1>Edit Home</h1>
                  <PutHomeInfo home={home} />
                  <h4 className="pt-4 my-4">Reviews</h4>
                  <PutReview/>
                  <h4 className="pt-4 my-4">Media</h4>
                  <p>Header</p>
                  <PutHomeHeader id={id} header_image={header_image} />
                  <p>Cursus home afbeelding</p>
                  <PutHomeCourseImg id={id} course_image={course_image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}

export async function getServerSideProps() {
  const url = BASE_URL + HOME_PATH;

  let home = null;

  try {
    const response = await axios.get(url);
    home = response.data;
  } catch (error) {
    console.log(error);
  }
    
  return {
    props: {
      home: home,
    },
  };
}

editHome.propTypes = {
  home: PropTypes.object.isRequired,
}