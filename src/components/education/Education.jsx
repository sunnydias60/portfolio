import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FaAward } from 'react-icons/fa'
import Typography from '@mui/material/Typography';
import './education.css'
import { IoSchoolSharp } from 'react-icons/io5'
import { GrCertificate } from 'react-icons/gr'

const Education = () => {
    return (
        <div className='education'>
            <h3>Education</h3>
            <Timeline fontFamily="Poppins">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', flex: 0.2, px: 1 }}
                        color="white"
                        fontFamily="Poppins"
                    >
                        <h5>2014</h5>


                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color='info'>
                            <FaAward className='education__icon' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ px: 1, py: 2 }}>
                        <Typography fontFamily="Poppins">
                            <h4>SSC</h4>
                            <h5 className="text-light">Holy Cross Convent School, Virar</h5>
                            <h3>87%</h3>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', flex: 0.2, px: 1 }}

                        color="white"
                        fontFamily="Poppins"
                    >
                        <h5>2016</h5>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color='info'>
                            <GrCertificate className='education__icon' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ px: 1, py: 2 }}>
                        <Typography fontFamily="Poppins">

                            <h4>HSC - Science</h4>
                            <h5 className="text-light">Viva College, Virar</h5>
                            <h3>77.38%</h3>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', flex: 0.2, px: 1 }}

                        color="white"
                        fontFamily="Poppins"
                    >
                        <h5>2020</h5>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color='info'>
                            <IoSchoolSharp className='education__icon' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ px: 1, py: 2 }}>
                        <Typography fontFamily="Poppins">
                            <h4>B.Tech - Information Technology</h4>
                            <h5 className="text-light">Fr. Conceicao Rodrigues College of Engineering, Bandra</h5>
                            <h3>7.75 GPA</h3>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </div>

    );
}

export default Education