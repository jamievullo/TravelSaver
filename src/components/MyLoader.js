import React from 'react'
import ContentLoader from 'react-content-loader'

function MyLoader() {
    return (    
        <ContentLoader
            speed={1.5}
            width={1200}
            height={300}
            viewBox="0 0 1200 300"
            backgroundColor="#f3f3f3"
            foregroundColor="#364182"
            marginbottom={20}
        >
            <rect x="50" y="50" rx="5" ry="5" width="250" height="250" />
            <rect x="310" y="50" rx="4" ry="4" width="760" height="24" />
            <rect x="310" y="89" rx="4" ry="4" width="760" height="24" />
            <rect x="310" y="132" rx="1" ry="1" width="225" height="15" />
            <rect x="310" y="164" rx="1" ry="1" width="108" height="15" />
            <rect x="310" y="208" rx="1" ry="1" width="780" height="15" />                            
            <rect x="310" y="232" rx="1" ry="1" width="225" height="15" />
            <rect x="310" y="268" rx="1" ry="1" width="476" height="17" />
        </ContentLoader>
    )
}

export default MyLoader;