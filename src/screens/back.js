import React from 'react';
import {SvgXml} from 'react-native-svg';
const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="314px" height="80px" viewBox="0 0 314 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>youtubegaming1024_1440</title>
    <defs>
        <path d="M17.9380823,0 L302.808044,0 C308.330891,-2.79088747e-15 312.808044,4.4771525 312.808044,10 C312.808044,10.3746751 312.786987,10.7490542 312.744972,11.1213662 L306.001123,70.8816285 C305.430814,75.9353978 301.158138,79.7561409 296.072293,79.7602591 L11.1971993,79.9909332 C5.67435362,79.9954053 1.19357726,75.5218795 1.18910521,69.9990339 C1.18880056,69.6228052 1.20972835,69.2468591 1.25178877,68.8729888 L8.00076912,8.88205227 C8.56983275,3.82370886 12.8478297,2.71142107e-15 17.9380823,0 Z" id="path-1"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-186.000000, -2319.000000)">
            <g id="youtubegaming1024_1440" transform="translate(186.000000, 2319.000000)">
                <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                </mask>
                <use id="Mask" fill="#444444" xlink:href="#path-1"></use>
            </g>
        </g>
    </g>
</svg>
`;
export default () => <SvgXml xml={xml} width="100%"  />
