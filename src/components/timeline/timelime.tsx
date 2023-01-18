// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import {FaSchool} from 'react-icons/fa'

// function MY_TIMELINE(){
//     return (
//         <div>

// <VerticalTimeline>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//     date="2011 - present"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<FaSchool />}
//   >
//     <h3 className="vertical-timeline-element-title">Creative Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2010 - 2011"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<FaSchool />}
//   >
//     <h3 className="vertical-timeline-element-title">Art Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2008 - 2010"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<FaSchool />}
//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//     <p>
//       User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2006 - 2008"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<FaSchool/>}
//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>
//       User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="April 2013"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<FaSchool/>}
//   >
//     <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
//     <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//     <p>
//       Strategy, Social Media
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="November 2012"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<FaSchool/>}
//   >
//     <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
//     <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="2002 - 2006"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<FaSchool/>}
//   >
//     <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
//     <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//     <p>
//       Creative Direction, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//     icon={<FaSchool/>}
//   />
// </VerticalTimeline>
            
//         </div>

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaMoneyBillWave, FaSchool} from 'react-icons/fa'

const data = [
{
title: "High school at Siam Business Administration Technological College",
subtitle: "Major in Computer and Business",
date: "2013-2016",
description:"Taught fundamental programming in C++,Learn about basic web development using HTML CSS,Learn about general knowledge about business logic such as Accountant,Finance"
},
{
title: "University at Sripatum University",
subtitle: "Major in Computer engineering",
date: "2016-2020",
description: "Learn about building , desinging , maintenance about software development and hardware designs"
},
{
title: "RIMES organization",
subtitle: "Intern, System and Research Development in Climate data department",
date: "2021-2021 (4months)",
description: "Built a web application to process climate data and learn about data science tools such as pyscissor speicialize tools such as CDO(Climate data operator)and so on"

},
{
title: "RIMES organization",
subtitle: "Data analyst/Data scientist",
date: "2021-2022",
description: "Learn more about data science knowledge and data science tools,collection data from various sources from opensource and build a simple weather prediction"
},
{
title: "Freelance",
subtitle: "Python developer",
date: "2022-Present",
description: "Creating , maintain and modify script various tasks from data scraping to api using Python Flask web framework and python scraping libraries such as beautifulSoup and automation task such as Selenium"
},

]

function MY_TIMELINE(){
return (
<div style={{
    marginTop:"500px"
}}>
    <h1 style={{textAlign:'center'}}>Timeline</h1>
<VerticalTimeline>
{data.map((item, index) => (
<VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                date={item.date}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#red' }}
                icon={<FaSchool />} >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>
            {item.description}
            </p>
</VerticalTimelineElement>
))}
</VerticalTimeline>
</div>
    )
}



export default MY_TIMELINE;

