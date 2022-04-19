import React from 'react'
import ContentLoader from "react-content-loader"

const LoaderBlock = (props) => {
  return (
    <ContentLoader 
      speed={2}
      width={280}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="139" cy="121" r="115" /> 
      <rect x="3" y="266" rx="9" ry="9" width="280" height="36" /> 
      <rect x="5" y="320" rx="10" ry="10" width="278" height="83" /> 
      <rect x="10" y="426" rx="9" ry="9" width="96" height="28" /> 
      <rect x="127" y="416" rx="19" ry="19" width="149" height="47" />
  </ContentLoader>
  )
}

export default LoaderBlock