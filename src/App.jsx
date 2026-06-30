import WorkExperience from "./components/work-experience/WorkExperience";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import AboutMe from "./components/main/AboutMe";
import Languages from "./components/sidebar/Languages";
import Hobbies from "./components/main/Hobbies";

import data from "./data/data.yaml";

const App = () => {
  const {
    header,
    contacts,
    aboutMe,
    skills,
    languages,
    workExperience,
    education,
    hobbies,
  } = data;

  return (
    <div id="page" className="max-w-4xl mx-auto">
      <Header header={header} contacts={contacts} />

      <section className="mt-3">
        <AboutMe text={aboutMe} />
      </section>

      <section className="mt-3">
        <WorkExperience workExperience={workExperience} />
      </section>

      <section className="mt-3">
        <Skills skills={skills} />
      </section>

      <div className="mt-3 grid grid-cols-3 gap-4">
        <div>
          <Education education={education} />
        </div>
        <div>
          <Languages languages={languages} />
        </div>
        <div>
          <Hobbies hobbies={hobbies} />
        </div>
      </div>
    </div>
  );
};

export default App;
