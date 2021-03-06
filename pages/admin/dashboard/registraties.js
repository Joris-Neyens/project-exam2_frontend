import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../../../src/api/baseUrl";
import Head from "../../../src/components/head/Head";
import AdminLayout from "../../../src/components/layout/AdminLayout";
import DashboardNav from "../../../src/components/layout/DashboardNav";
import SideMenu from "../../../src/components/layout/SideNav";
import Registrations from "../../../src/components/pages/registraties/Registrations";
import Newsletters from "../../../src/components/pages/registraties/Newsletters";

export default function register({ registrations, newsletters }) {

  return (
    <>
      <Head
        title="contact inbox"
        description="overzicht over alle inkomende berichten"
      />
      <DashboardNav />
      <AdminLayout>
        <div className="container-fluid">
          <div className="row">
            <SideMenu />
            <div className="col-lg-8 pb-4 mt-5">
              <div className="row">
                <div className="col-lg-10 pl-lg-5">
                  <h1>Registraties</h1>
                  <h4 className="mt-5">cursus registraties</h4>
                  <Registrations registrations={registrations} />
                  <h3 className="mt-3">Nieuwsbrief</h3>
                  <Newsletters
                    registrations={registrations}
                    newsletters={newsletters}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export async function getServerSideProps() {
  const url = `${BASE_URL}registers`;
  const newsletterUrl = `${BASE_URL}newsletters`;

  let registrations = null;

  try {
    const response = await axios.get(url);
    registrations = response.data;
  } catch (error) {
    console.log(error);
  }

  let newsletters = null;

  try {
    const response = await axios.get(newsletterUrl);
    newsletters = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { registrations: registrations, newsletters: newsletters },
  };
}

register.propTypes = {
  registrations: PropTypes.array.isRequired,
  newsletters: PropTypes.array.isRequired,
};