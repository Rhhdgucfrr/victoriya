import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
import CastForEducationRoundedIcon from '@mui/icons-material/CastForEducationRounded';
import classes from './listItem.module.css'
import ChipFilter from '../../UI/ChipFilter';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';

function Subject(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ width: '100%' }}> 
      {props.subjects.map((subject) =>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header" expanded={expanded === ExpandMoreIcon} onClick={handleChange({ ExpandMoreIcon })}
          >
            <AirplayOutlinedIcon style={{ color: 'silver', paddingRight: "1rem" }} />
            <Typography sx={{ width: '13%', flexShrink: 0 }}>
              {subject.name}
            </Typography>
            <div className={classes.state}>
              <div style={{ color: '#82b497' }}><b>success</b></div>
            </div>
            <div className={classes.rightbutton}>
              <CachedTwoToneIcon style={{ color: 'silver', paddingRight: '6px' }} />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.accordionDetails}>

              <h3>Subject</h3>

              <div className={classes.accordionDetailsContent}>
                <div className={classes.accordionDetailsContentItem}>
                  <div className={classes.accordionDetailsItemContent}>
                    <div className={classes.accordionDetailsItemContentleft}>
                      <CastForEducationRoundedIcon style={{ color: 'silver', paddingRight: '10px' }} fontSize="large" />
                    </div>
                    <div className={classes.accordionDetailsItemContentRight}>
                    <Typography style={{ marginLeft: '10px' }} variant="body2" component="h2"> teachers:</Typography>
                      {subject.teacher.map((teacher) =>
                        <div style={{ marginTop: '10px' }}>
                          <ChipFilter filter={teacher} />

                        </div>
                      )}
                    </div>
                  </div>

                </div>
                <div className={classes.accordionDetailsContentItem}>
                  <div className={classes.accordionDetailsItemContent}>
                    <div className={classes.accordionDetailsItemContentleft}>
                      <EditLocationAltIcon style={{ paddingRight: '10px' }} fontSize="large" />
                    </div>
                    <div className={classes.accordionDetailsItemContentRight}>
                      <Typography variant="body2" component="h2"> Location</Typography>
                      <div>
                        this subject is held in the classroom { subject.location}
                      </div>
                    </div>
                  </div>

                </div>
                <div className={classes.accordionDetailsContentItem}>
                  <div className={classes.accordionDetailsItemContent}>
                    <div className={classes.accordionDetailsItemContentleft}>
                      <GridViewIcon style={{ paddingRight: '10px' }} fontSize="large" />
                    </div>
                    <div className={classes.accordionDetailsItemContentRight}>
                      <Typography variant="body2" component="h2"> Direction</Typography>
                      <div>
                        {subject.Direction}
                      </div>
                    </div>
                  </div>

                </div>
                <div className={classes.accordionDetailsContentItem}>
                  <div className={classes.accordionDetailsItemContent}>
                    <div className={classes.accordionDetailsItemContentleft}>
                      <CalendarTodayIcon style={{ paddingRight: '10px' }} fontSize="large" />
                    </div>
                    <div className={classes.accordionDetailsItemContentRight}>
                      <Typography variant="body2" component="h2"> Date creation</Typography>
                      <div>
                        start date when open this subject {subject.DateStart}
                      </div>
                    </div>
                  </div>

                </div>
                <div className={classes.accordionDetailsContentItem}>
                  <div className={classes.accordionDetailsItemContent}>
                    <div className={classes.accordionDetailsItemContentleft}>
                      <SchoolIcon style={{ paddingRight: '10px' }} fontSize="large" />
                    </div>

                    <div className={classes.accordionDetailsItemContentleft}>

                    </div>
                    <div className={classes.accordionDetailsItemContentRight}>
                      <Typography style={{ marginLeft: '10px' }} variant="body2" component="h2"> Class:</Typography>
                      {subject.class.map((classes)=>
                      <div >
                        <ChipFilter filter={classes} />

                      </div>
                      )}
                     
                      
                    </div>
                  </div>
                </div>
                              </div>
              <h3>
                Theoretical material</h3>
              <h3>
                Tests</h3>
              <h3>

                Final control work</h3>
            </div>

          </AccordionDetails>
        </Accordion>

      )}

    </div>
  );
}
export default Subject;