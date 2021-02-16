import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import styled from 'styled-components'
import { Title } from './Home'

const ProgressLabel = styled.p`
    margin-bottom: 16px;
    text-align: left;
    color: #fff;
`

const Knowledges = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>


            <Title>Front End</Title>


            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>HTML/CSS</ProgressLabel>
                <ProgressBar width={800} completed={85} />
            </div>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>React.js</ProgressLabel>
                <ProgressBar width={800} completed={93} />
            </div>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>React Native</ProgressLabel>
                <ProgressBar width={800} completed={22} />
            </div>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>Next.js</ProgressLabel>
                <ProgressBar width={800} completed={34} />
            </div>

            <Title>Back End</Title>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>Node</ProgressLabel>
                <ProgressBar width={800} completed={87} />
            </div>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>REST API</ProgressLabel>
                <ProgressBar width={800} completed={75} />
            </div>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>GraphQL</ProgressLabel>
                <ProgressBar width={800} completed={82} />
            </div>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>Cloud Computing</ProgressLabel>
                <ProgressBar width={800} completed={18} />
            </div>

            <Title>Database</Title>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>MongoDB</ProgressLabel>
                <ProgressBar width={800} completed={89} />
            </div>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>MySQL</ProgressLabel>
                <ProgressBar width={800} completed={70} />
            </div>

            <Title>Languages and Others</Title>

            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>Javascript</ProgressLabel>
                <ProgressBar width={800} completed={92} />
            </div>
            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>PHP</ProgressLabel>
                <ProgressBar width={800} completed={73} />
            </div>
            <div style={{ alignSelf: 'center', padding: '10px' }}>
                <ProgressLabel>Laravel</ProgressLabel>
                <ProgressBar width={800} completed={76} />
            </div>
            <div style={{ alignSelf: 'center', padding: '10px', marginBottom: '48px' }}>
                <ProgressLabel>Wordpress</ProgressLabel>
                <ProgressBar width={800} completed={90} />
            </div>


        </div>
    )
}

export default Knowledges