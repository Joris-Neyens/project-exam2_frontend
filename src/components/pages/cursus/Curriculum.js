import PropTypes from "prop-types";

export default function Curriculum({ curriculum }) {
  return (
    <section className="curriculum py-lg-5 my-5">
      <div className="container pt-5">
        <h2 className="text-center">Wat je gaat leren</h2>

        <div className="d-flex justify-content-center">
          <p className="py-3 px-2 px-lg-5 mt-3">{curriculum}</p>
        </div>
      </div>
    </section>
  );
}

Curriculum.propTypes = {
  curriculum: PropTypes.string.isRequired,
}