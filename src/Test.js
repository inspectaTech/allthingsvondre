// import React from 'react';// FAILS - conflicts with CDN global React property
import Exporter from './components/Exporter/Exporter.js'

const Test = () => {
  return (
    <Exporter {...{home: "body", src: "tag", delay: 0}} >
      <div>Test</div>
     </Exporter>
  )
}

export default Test