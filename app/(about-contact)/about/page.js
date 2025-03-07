const About = () => {
  return (
    <div className="col-span-12 lg:col-span-9 bg-white shadow-lg rounded-lg p-10">
      <h1 className="text-left text-4xl">About Us</h1>
      <p className="text-base leading-7 mt-3">
        Welcome to
        <span className="font-medium"> Smart Read </span>
        your go-to destination for insightful articles, inspiration, and
        knowledge sharing. We are passionate about creating valuable content
        that educates, informs, and engages our readers.
      </p>
      <div className="my-3">
        <h3 className="text-2xl underline">Our Mission</h3>
        <p>
          At <span className="font-medium">Smart Read</span>,
          {`our goal is to
          provide high-quality, well-researched, and engaging content on a
          variety of topics. Whether you're here to learn, explore new ideas, or
          simply enjoy a good read, we have something for everyone.`}
        </p>
      </div>
      <div className="my-3">
        <h3 className="text-2xl underline">What We Write About</h3>
        <ul className="list-disc ml-10 text-base">
          <li>
            <span className="font-medium">Technology & Web Development – </span>
            Latest trends, tutorials, and insights.
          </li>
          <li>
            <span className="font-medium">UI/UX Design – </span>Design tips,
            tools, and best practices.
          </li>
          <li>
            <span className="font-medium">Freelancing & Career Growth –</span>{" "}
            Advice on freelancing, job opportunities, and skill-building.
          </li>
          <li>
            <span className="font-medium">Business & Entrepreneurship –</span>{" "}
            Strategies for success in the digital world.
          </li>
          <li>
            <span className="font-medium">Personal Development –</span>{" "}
            Motivation, productivity tips, and self-improvement.
          </li>
        </ul>
      </div>
      <div className="my-3">
        <h3 className="text-2xl underline">Why Follow Us?</h3>
        <ul className="list-disc ml-10 text-base">
          <li>
            <span className="font-medium">Authentic & Valuable Content – </span>
            We focus on delivering content that matters.
          </li>
          <li>
            <span className="font-medium">Regular Updates – </span>Fresh
            articles and insights every week.
          </li>
          <li>
            <span className="font-medium">Community Engagement – </span> Join
            the conversation and share your thoughts.
          </li>
        </ul>
      </div>
      <p className="text-base">
        We’re excited to have you here! Explore our articles, leave your
        comments, and become part of our growing community.
      </p>
      <p className="font-medium mt-10 text-[#5e17eb]">
        🚀 Stay inspired, keep learning!
      </p>
    </div>
  );
};

export default About;
