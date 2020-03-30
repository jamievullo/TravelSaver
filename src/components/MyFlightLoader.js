import React from 'react'
import ContentLoader from 'react-content-loader'

function MyFlightLoader() {
    return (
        <ContentLoader
            speed={2}
            width={1200}
            height={225}
            viewBox="0 0 1000 225"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            marginbottom={20}
        >
            <rect x="280" y="50" rx="5" ry="5" width="200" height="200" />
            <rect x="490" y="50" rx="4" ry="4" width="800" height="25" />
            <rect x="490" y="80" rx="4" ry="4" width="100" height="25" />
            <rect x="490" y="120" rx="3" ry="3" width="350" height="12" />
            <rect x="490" y="150" rx="3" ry="3" width="300" height="12" />
            <rect x="490" y="190" rx="3" ry="3" width="250" height="12" />
        </ContentLoader>
    )
}

export default MyFlightLoader;