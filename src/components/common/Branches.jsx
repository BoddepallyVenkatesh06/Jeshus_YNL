import Title from "./Title";

const Branches = () => {
  return (
    <section className="py-8 bg-black/90">
      <div className="container">
        <Title
        classes={"text-white"}
          title={"Our branches"}
          description={
            "We are one church with multiple locations"
          }
        />
        <div className="section-content branches-list mb-10 grid xxl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div>
                <div className="text-dark shadow-lg bg-white p-6 rounded-lg">
                    <h3 className="mb-3 text-2xl font-semibold border-b-[1px] border-dark/20 pb-2">Los Angeles</h3>
                    <ul className="text-dark/80">
                        <li>4556 Brendan Ferry</li>
                        <li>Los Angeles, CA 90210</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-dark shadow-lg bg-white p-6 rounded-lg">
                    <h3 className="mb-3 text-2xl font-semibold border-b-[1px] border-dark/20 pb-2">New York</h3>
                    <ul className="text-dark/80">
                        <li>886 Walter Street</li>
                        <li>New York, NY 12345</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-dark shadow-lg bg-white p-6 rounded-lg">
                    <h3 className="mb-3 text-2xl font-semibold border-b-[1px] border-dark/20 pb-2">Toronto</h3>
                    <ul className="text-dark/80">
                        <li>7363 Cynthia Pass</li>
                        <li>Toronto, ON N3Y 4H8</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-dark shadow-lg bg-white p-6 rounded-lg">
                    <h3 className="mb-3 text-2xl font-semibold border-b-[1px] border-dark/20 pb-2">Chicago</h3>
                    <ul className="text-dark/80">
                        <li>726 Mavis Island</li>
                        <li>Chicago, IL 60601</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
