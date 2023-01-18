import React from 'react';
import Welcome from './components/header/welcome';
import Rimes from './components/works/rimes';
import Project_1 from './components/works/project_1';
import Project_2 from './components/works/project_2';
import Contact from './components/contact';
import Myskills from './components/skills';
import Footer from './components/footer';
import GALLERY from './components/gallery/my_gallery';

import MY_TIMELINE from './components/timeline/timelime';
import MYRESUME from './components/resume_cv/resume_cv';



function App() {
  return (
    <div>
      <Welcome/>
      <Myskills/>
      <MY_TIMELINE/>
       <MYRESUME/>
      {/* <GALLERY/>    */}
      <Footer/>
    </div>
  );
}

export default App;
