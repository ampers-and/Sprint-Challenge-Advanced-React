import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const PlayersResponsiveBar = (props) => (
    console.log(props),

    <ResponsiveBar
        data={props.players}
        keys={['searches']}
        indexBy="name"
        margin={{ top: 10, right: 20, bottom: 30, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        colors='#1ea8fc'

        borderColor= '#456b7c'
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        // axisBottom={{
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'Player',
        //     legendPosition: 'middle',
        //     legendOffset: 32
        // }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Searches',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#1ea8fc"
        legends={[]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={({ indexValue, value, color }) => (
            <strong style={{ color }}>
              {indexValue}: {value}
            </strong>
          )}
        gridXValues='none'
    />
)

export default PlayersResponsiveBar;