import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Title } from '../containers/Home'


const Timeline = ({titleOne, titleTwo}) => {
    return (
        <>
            <Title>{titleOne}</Title>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5f72be', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5f72be' }}
                    date="May 2019 - July 2019"
                    iconStyle={{ background: '#9921e8', color: '#fff' }}
                >
                    Aceleradora Marketing Digital - Trainee of Web Developer
  </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5f72be', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5f72be' }}
                    iconStyle={{ background: '#9921e8', color: '#fff' }}
                    date="August 2019 - December 2019"
                >
                    PD3 Marketing Digital - Trainee of Web Developer
  </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5f72be', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5f72be' }}
                    iconStyle={{ background: '#9921e8', color: '#fff' }}
                    date="December 2019 - present day"
                >
                    Fullstack Developer - Self employed
  </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5f72be', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5f72be' }}
                    iconStyle={{ background: '#9921e8', color: '#fff' }}
                    date="January 2020 - present day"
                >
                    Kazap Tecnologia - Software Engineer
  </VerticalTimelineElement>
            </VerticalTimeline>

            <Title>{titleTwo}</Title>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5f72be', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5f72be' }}
                    date="2016 - 2018"
                    iconStyle={{ background: '#9921e8', color: '#fff' }}
                >
                    Computer Technician for Web - Etec Pedro Ferreira Alves
  </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5f72be', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5f72be' }}
                    date="2019 - 2022 (finish forecast)"
                    iconStyle={{ background: '#9921e8', color: '#fff' }}
                >
                    Technologist in Analysis and Development of Computer Systems - Fatec Arthur de Azevedo
 </VerticalTimelineElement>


            </VerticalTimeline>


        </>
    )
}


export default Timeline