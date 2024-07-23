import React from 'react';
import { Button } from '@mui/material';
import './styles/colaborate.css'
import Tooltip from '@mui/material/Tooltip';
const Colaborate = () => {
  // const [loading, setLoading] = useState(true);
  const email = "cabhinaba3@gmail.com";
  const subject = "Discussion on ...";
  const body = "Body of the email";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const colaborators = [
    {name: "Woutar Tavernier", description: "Supervisor for PhD"},
    {name: "Didier Tavernier", description: "Supervisor for PhD"},
    {name: "Ansuman Banerjee",description: "Supervisor for my master's thesis"},
    {name: "Arindam Mallik", description: "Supervisor for my master's thesis"},
    {name: "Vinay Kumar Y.", description: "Collaborated duing my imec days"},
    {name: "Alok Mathur", description: "Manager during my Airtel Internship"}
  ] 
  return (
    <div className='container'>
      <p className='home-p'>
      I primarily operate in the domain of computing systems. If you believe we have common ground to discuss, feel free to email me at <code>cabhinaba3@gmail.com</code>. I'm always open to a conversation.
      </p>
      <div className='container'>
        <div>
        <h3> Past Collaborators</h3>
        <ol>
          {colaborators.map((colab, index)=>(
            <li>
            <Tooltip title={colab.description} placement="right-end">
              <span>{colab.name}</span>
            </Tooltip>
            </li>
          ))}
          {/* <li>Ansuman Banerjee</li>
          <li>Arindam Mallik</li>
          <li>Vinay kumar Y.</li>
          <li>Wouter Tavernier</li>
          <li>Didier Colle</li> */}
        </ol>
        </div>
        <div id='colaborator-email-id'>
        <Button
          variant="outlined"
          color="secondary"
          href={mailtoLink}
        >
          Shoot me a mail
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Colaborate;
