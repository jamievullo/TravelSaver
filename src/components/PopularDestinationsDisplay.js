import React from 'react'
import { JSDOM } from 'jsdom'

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class PopularDestinationsDisplay extends React.Component {
    constructor() {
        super()

        this.state = {

        }
        const url = "https://travel.usnews.com/rankings/worlds-best-vacations/"

        async function scrape(url) {
            const response = await fetch(url);
            const text = await response.text();
            const dom = new JSDOM(text);

            console.log(dom.window.document.querySelector('div'))
        }
        //going to need to call this function when someone clicks the card
        //also need link and route to /populardestinations in router?

        // scrape(url)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default PopularDestinationsDisplay
