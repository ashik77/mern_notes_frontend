import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Auto Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Saidpur City, Auto Repairs provides a
          trained staff ready to meet your car repair needs.
        </p>
        <address className="public__addr">
          Auto Repairs
          <br />
          Old Babupara
          <br />
          Saidpur City, 5300
          <br />
          <a href="tel:+8801785049803">(880) 555-5555</a>
        </address>
        <br />
        <p>Owner: Saiduzzaman Sajib</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
