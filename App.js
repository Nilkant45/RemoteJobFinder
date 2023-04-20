import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function App() {
  const [jobs, setJobs] = useState( [
    {
      title: "Frontend Developer",
      company: {
        name: "ABC Company",
      },
      location: {
        city: "New York",
        country: "United States",
      },
      isRemote: false,
    },
    {
      title: "Backend Developer",
      company: {
        name: "XYZ Company",
      },
      location: {
        city: "San Francisco",
        country: "United States",
      },
      isRemote: true,
    },
    {
      title: "Full-stack Developer",
      company: {
        name: "MNO Company",
      },
      location: {
        city: "London",
        country: "United Kingdom",
      },
      isRemote: false,
    },
  ],);
  
  
  
  

  useEffect(() => {
    
     
      axios.get('https://graphqlzero.almansi.me/api"',
      
        
        {
          query: `
            {
              jobs(offset: 0) {
                edges {
                    id
                    title
                    company {
                      name
                    }
                    locations {
                      city
                      country
                    }
                    remote
                    url
                  }
                }
            }
          `
        },
    
    )
    .then(res => {
      setJobs(res.data.data.jobs.edges);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

  return (
    <div classname='velozity'>
      <Navbar />
      <center>
      <h1>Job Listings</h1>
      <div className='table-header'>
      <table>
        <thead>
          <tr classname='first'>
            <th>Title</th>
            <th>Company Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Remote</th>
            <th>Link to Job Post</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company.name}</td>
              <td>{job.location.city}</td>
              <td>{job.location.country}</td>
              <td>{job.remote ? 'Yes' : 'No'}</td>
              <td>
                <a href={job.url} target='_blank'>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </center>
    </div>
  );
}

export default App;
