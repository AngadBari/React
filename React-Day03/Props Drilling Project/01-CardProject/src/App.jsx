import React from 'react'
import Card from './Componotes/Card.jsx'




const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "London, UK"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Apple_Logo_black.svg",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "8 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "1 week ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Intern Level",
    pay: "$40/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Adobe_Corporate_Logo.png",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "10 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "New York, USA"
  }
];

function App() {
  return (
    < div className='parent'>
      {jobOpenings.map(function(elem,idx)
      {
       return <div key={idx}>
            <Card company={elem.companyName} brandLogo={elem.brandLogo}/>
       </div>
      })}
    </div>
  )
}

export default App