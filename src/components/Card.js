import * as React from 'react';
import './styles/card.css'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Typography from '@mui/joy/Typography';

import { Link } from 'react-router-dom';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

export default function BasicCard(props) {
  const project = props.details;
  const [layout, setLayout] = React.useState(undefined);
  const handleCardClick = () =>{
    setLayout('center');
  }
  return (
    <Card sx={{width:250}} className='card-class '>
      <div className='container d-flex'>
      <div className='container d-flex' id='card-class-div-1'>
        <Typography level="title-lg">{project.title}</Typography>
        <Typography level="body-sm">{project.date}</Typography>
        {/* <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral" 
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
        </IconButton> */}
      </div>
      {/* <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={project.picLink}
          srcSet={project.picLink}
          loading="lazy"
          alt=""
        />
      </AspectRatio> */}
      <CardContent orientation="horizontal">
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          onClick={handleCardClick}
          // sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout}>
          <ModalClose />
          <DialogTitle><h2>{project.title}</h2></DialogTitle>
          <DialogContent sx={{width:'auto', height:'auto'}}>
            <div>
              {project.description}
            </div>
            <hr/>
            <div>
              The technology involved in the projects are:
              {project.techStack.map((tech ,index)=>(
                <>{tech},</>
              ))}
            </div>
            {/* <hr/> */}
            <div className='container d-flex justify-content-left flex-wrap m-1'>
              <Button variant=''><Link to={project.link}>GitHub</Link></Button>
              <Button variant=''><Link to={"#"}>Report Link</Link></Button>
              <Button variant=''><Link to={project.website}>WebSite</Link></Button>
            </div>
          </DialogContent>
        </ModalDialog>
      </Modal>
      </div>
    </Card>
  );
}
