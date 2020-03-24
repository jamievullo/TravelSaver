import React from 'react'
import plane from '../assets/images/PaperAirplane.png'
import { gsap } from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
gsap.registerPlugin(MotionPathPlugin);

export default function PaperAirplane() {

    const renderAirplane = () => { 
        const path = "M1.06562 54.658C14.3178 54.658 36.3241 52.4012 46.8133 62.7355C52.935 68.7668 60.8564 71.716 66.8832 78.5673C72.0703 84.4641 74.6485 92.4676 81.9356 95.3685C92.9525 99.754 91.3598 115.306 105.695 118.793C114.532 120.943 125.012 129.781 134.472 130.263C160.435 131.585 187.55 138.98 213.571 142.541C246.291 147.018 276.685 137.774 306.689 122.993C325.95 113.505 338.418 106.483 338.418 83.7369C338.418 71.6099 341.526 53.7165 337.827 42.3803C330.502 19.9261 306.019 8.21143 286.472 4.57777C269.476 1.41841 236.43 -5.62518 229.804 19.7634C225.913 34.6715 225.97 56.6489 227 72.4285C228.291 92.2151 244.381 109.307 259.318 119.278C263.966 122.38 268.71 129.332 272.6 130.909C283.859 135.474 299.919 139.488 309.198 147.71C321.16 158.311 341.092 160.866 356.126 163.704C377.705 167.777 404.205 171.346 425.928 166.45C435.828 164.219 443.754 158.727 452.934 154.819C461.04 151.368 472.72 151.899 479.202 144.803C488.081 135.083 491.139 124.041 498.387 113.462C504.677 104.281 504.582 84.2133 507.831 72.7516C510.068 64.8632 507.553 53.0787 504.29 45.9344C484.797 3.25654 449.465 3.6001 410.138 8.13185C392.997 10.107 381.47 34.804 380.919 51.104C380.3 69.3796 378.067 90.559 381.066 108.615C384.004 126.305 398.291 137.649 408.81 149.164C420.12 161.545 433.32 178.089 447.326 186.159C458.816 192.779 469.608 200.48 481.859 206.514C490.899 210.968 501.229 209.434 510.488 212.33C519.842 215.256 529.384 220.408 539.264 220.408C579.251 220.408 624.212 226.965 663.373 217.5C690.587 210.923 710.391 202.863 730.224 181.151C751.332 158.044 789.916 152.288 818.03 145.449C843.63 139.221 874.333 158.353 894.768 172.589C938.336 202.94 985.534 219.744 1038.5 213.946C1062.09 211.363 1067.4 200.185 1078.05 179.051C1087.07 161.167 1107.81 140.725 1110.81 120.247C1115.28 89.8219 1102.75 54.8342 1086.02 31.3949C1071.35 10.8308 1053.04 8.13185 1030.09 8.13185C1006.66 8.13185 979.066 5.88029 957.929 19.7634C929.473 38.4543 920.15 69.5376 920.15 105.708C920.15 143.103 929.796 172.224 941.401 207.161C942.728 211.156 950.624 216.763 953.945 219.115C971.37 231.458 992.555 237.064 1009.87 249.486C1022.56 258.583 1042.75 258.21 1058.28 258.21C1077.56 258.21 1096.84 258.21 1116.13 258.21C1128.85 258.21 1139.94 259.914 1150.22 250.617C1162.63 239.396 1179.37 228.36 1189.47 214.753C1197.05 204.542 1199.64 191.552 1204.38 179.697C1213.59 156.643 1224.33 127.464 1214.41 101.83C1202.94 72.1964 1185.46 50.8631 1156.56 40.1186C1143.33 35.1985 1128.39 37.2107 1114.65 37.2107C1097.98 37.2107 1078.6 34.091 1062.12 37.3723C1044.42 40.8934 1034.22 68.1084 1027.73 83.8985C1021.12 99.9834 1018.43 121.488 1018.43 138.987C1018.43 146.484 1016.22 158.342 1019.02 165.158C1022.72 174.158 1028.53 181.448 1031.72 191.329C1035.25 202.305 1040.19 204.507 1049.72 208.776C1055.99 211.586 1065.09 222.188 1070.82 223.154C1095.26 227.269 1123.49 226.223 1148.45 226.223C1177.62 226.223 1219.59 234.064 1244.81 217.5C1266.75 203.091 1290.53 193.335 1310.33 176.143C1346.35 144.875 1390.87 125.104 1435.18 114.431C1453.25 110.078 1468.02 104.719 1484.17 96.9839C1498.34 90.201 1519.6 89.5952 1535.23 86.4832C1557.87 81.9789 1581.09 75.6999 1604.3 75.0132C1630.02 74.2522 1652.56 78.5329 1676.31 87.9372C1711.34 101.806 1742.3 125.482 1777.84 137.371C1788.53 140.944 1796.43 141.547 1807.36 142.056C1864.32 144.71 1921.16 149.691 1977.51 159.18C1996.24 162.335 2012.29 162.104 2031.82 159.019C2051.93 155.842 2071.77 150.958 2091.88 147.71C2101.04 146.231 2108.89 147.618 2112.84 138.987"
        
        gsap.to('.paper-airplane', 
        {  duration: 11.5,
            motionPath: {
            path: path,
            ease: "power1.inOut",
            autoRotate: true
            }
        });
    }

    return (
        <div>
            <section className='flying-animation' >
                <div className="flying">
                    {renderAirplane()}
                    <img className="paper-airplane" src={plane} alt="paper-airplane"></img>
                </div>
            </section>
        </div>
    )                
}
