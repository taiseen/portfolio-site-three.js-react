import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";
import mapCode from "../../constants/mapCode.json";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-110, -10, 0],
                center: [-20, 10],
                scale: 360
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies
                geography={mapCode}
                fill="#2C065D"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
       
            <Annotation
                subject={[90, 23.5]}
                dx={-30}
                dy={120}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="50" y='18' textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"Bangladesh"}
                </text>
            </Annotation>
       
        </ComposableMap>
    );
};

export default Map;