import React from "react";
import Particles from "react-particles-js";

export default () => (
    <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex:-2
        }}
    >
        <Particles
            params={{
                "particles":{"number":{"value":30},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":5,"color":{ "value": ["#FFC371","#B8E986","#50E3C2","#FFD300","#FF5F6D"]}},"polygon":{"nb_sides":2}}},
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
        />
    </div>
);
