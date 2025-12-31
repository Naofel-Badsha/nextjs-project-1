import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import JobCard from './JobCard';

const jobs = [
   {
id: 1,
image: "/images/j1.png",
title: "Software Engineer",
Location: "London, UK",
jobType: "Full Time",
urgency: "Urgent",
},
{
id: 2,
image: "/images/j2.png",
title: "Recruiting Coordinator",
Location: "Manchester, UK",
jobType: "Part Time",
urgency: "Urgent",
},
{id: 3,
image: "/images/j3.png",
title: "Product Manager, Studio",
Location: "Birmingham, UK",
jobType: "Contract",
urgency: "Urgent",
},
{
id: 4,
image: "/images/j4.png",
title: "Senior Product Designer",
Location: "Bristol, UK",
jabType: "Full Time",
urgency: "Urgent",
},
{
id: 5,
image: "/images/j8.png",
title: "Senior Product Designer",
Location: "Glasgow, UK",
jobType: "Contract",
urgency: "Private",
},
{
id: 6,
image: "/images/j6.png",
title: "Technical Architect",
Location: "Leeds, UK",
jobType: "Full Time",
urgency: "Private",
},
{
id: 7,
image: "/images/37.png",
title: "Web Developer",
Location: "Brighton, UK",
jobType: "Part Time",
urgency: "Urgent",
},
{
id: 8,
image: "/images/j8.png",
title: "Senior Product Designer",
Location: "Glasgow, UK",
jobType: "Contract",
urgency: "Private",
},
{
id: 9,
image: "/images/j9.png",
title: "Senior BI Analyst",
Location: "Sheffield, UK",
jobType: "Full Time",
urgency: "Private"
},
 
]

const Job = () => {
    return (
        <section className='pt-16 pb-16'>
            <SectionHeading 
            heading="Featured Jobs" 
            subHeading="Know your worth and find the job that qualify your life."/>
        

        <div className='w-[95%] sm:w-[80%] mx-auto mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {
          jobs.map((job) =>{
            return <div key={job.id}>
                <JobCard job={job}/>
            </div>
          })
        }
        </div>
        
        </section>
    );
};

export default Job;