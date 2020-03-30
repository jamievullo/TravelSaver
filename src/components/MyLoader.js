import React from 'react'
import ContentLoader from 'react-content-loader'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

function MyLoader() {
    return (
        <div style={{marginBottom: "2.5em"}}>
            <div className="justify-content-center" >
                <Card>
                    <Row className="no-gutters" style={{position: "center", width: "80%", paddingBottom: "1em"}}></Row>                    
                        <ContentLoader
                            speed={1.5}
                            width={1200}
                            height={250}
                            viewBox="0 0 1200 300"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#364182"
                            marginbottom={20}
                        >
                            <rect x="50" y="50" rx="5" ry="5" width="250" height="250" />
                            <rect x="310" y="50" rx="4" ry="4" width="800" height="17" />
                            <rect x="310" y="75" rx="4" ry="4" width="800" height="17" />
                            <rect x="310" y="110" rx="3" ry="3" width="100" height="12" />
                            <rect x="310" y="140" rx="3" ry="3" width="50" height="12" />
                            <rect x="310" y="170" rx="3" ry="3" width="800" height="12" />                            
                            <rect x="310" y="190" rx="3" ry="3" width="200" height="12" />
                            <rect x="310" y="225" rx="3" ry="3" width="400" height="15" />
                        </ContentLoader>
                </Card>
            </div>
        </div>
    )
}

export default MyLoader;