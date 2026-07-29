import React from 'react'
import Card from './Components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKueq1tsHBNK-60iE4zuAMN8scsdu8Uy4ak9C7_S0nQ&s=10",
      company: "Google",
      datePosted: "3 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "85",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "70",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
      company: "Microsoft",
      datePosted: "5 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "95",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd37QFyv4GzzqxSw5Otx1AI_OUJPOVoiaW3zZv2RMMBg&s=10",
      company: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "80",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
      company: "Meta",
      datePosted: "10 weeks ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "88",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91gke83AgsjipPMZmrsDP0-K7oWgm4ZCkxZNh9Exo3Q&s=10",
      company: "Netflix",
      datePosted: "4 days ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "92",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
      company: "Adobe",
      datePosted: "6 days ago",
      post: "UI/UX Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      salary: "25",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO3NvxWiCNfNaZtN0GcTPruKG4tjHPfCh3X0wQJAePg&s=10",
      company: "Salesforce",
      datePosted: "3 weeks ago",
      post: "QA Automation Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "60",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUKjFWDizIcm5drqniSODQ5YgztVV0sfUKv6H9tgjyA&s=10",
      company: "Uber",
      datePosted: "12 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "90",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtUXZmeHW8YcebfPk5eq1XPbfFQDfU6cfa9tzltRxxg&s",
      company: "LinkedIn",
      datePosted: "8 days ago",
      post: "Junior Software Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      salary: "40",
      location: "Mumbai, India"
    }
  ];

  console.log(jobOpenings);

  return (

    <div className='parent'>

      {jobOpenings.map(function (elem) {
        return <Card company={elem.company} date={elem.datePosted} post={elem.post} pay={elem.salary} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} logo={elem.brandLogo} />
      })}

    </div>
  )
}

export default App
