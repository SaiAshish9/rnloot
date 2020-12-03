import React from 'react';
import {SvgXml} from 'react-native-svg'



export default ({text,selected}) =>{

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="84px" height="70px" viewBox="0 0 84 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 10 Copy</title>
    <defs>
        <linearGradient x1="104.414637%" y1="64.3093309%" x2="0%" y2="29.7520661%" id="linearGradient-1">
            <stop
             stop-color="${
               selected ? '#865CF4' : '#261D2A'
             }"
            offset="0%"></stop>
            <stop 
             stop-color="${selected ? '#C01C8A' : '#2A2D39'}"
             offset="100%"></stop>
        </linearGradient>
        <path d="M12.5258085,0 L36.0456201,0 C39.3593286,2.05581688e-15 42.0456201,2.6862915 42.0456201,6 C42.0456201,6.55749916 41.9679206,7.11227797 41.8147638,7.64832677 L37.2433352,23.6483268 C36.5073897,26.2241361 34.1530737,28 31.4741915,28 L7.95437991,28 C4.64067141,28 1.95437991,25.3137085 1.95437991,22 C1.95437991,21.4425008 2.03207942,20.887722 2.18523622,20.3516732 L6.75666479,4.35167323 C7.49261032,1.77586389 9.84692632,2.26845951e-15 12.5258085,0 Z" id="path-2"></path>
        <filter x="-50.1%" y="-92.9%" width="268.4%" height="378.6%" filterUnits="objectBoundingBox" id="filter-3">
            <feOffset dx="15" dy="13" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="10.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.721568627   0 0 0 0 0.141176471   0 0 0 0 0.596078431  0 0 0 0.19025896 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-249.000000, -2199.000000)">
            <g id="Group-5" transform="translate(254.000000, 2207.000000)">
                <g id="Rectangle-Copy">
                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                    <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use>
                </g>
                <text id="2K" opacity="0.870000005" font-family="Avenir-Black, Avenir" font-size="12" font-weight="700" line-spacing="16" 
                fill="${
                  selected ? '#FFFFFF' : 'rgba(255,255,255,0.4)'
                }"                >
                    <tspan x="13.616" y="18">${text}</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>
`;

return <SvgXml xml={xml} width="100%" />;


}

            // <stop stop-color="#865CF4" offset="0%"></stop>
            // <stop stop-color="#C01C8A" offset="100%"></stop>