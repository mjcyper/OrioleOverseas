let e;
var k = r => {
    if (!e) {
        const d = (n, o, t) => t.get(n) ? t.get(n)(o) : null,
            i = new Map;
        i.set("bold", n => r.createElement(r.Fragment, null, r.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "34",
            fill: "none",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }), r.createElement("rect", {
            x: "32",
            y: "32",
            width: "192",
            height: "192",
            rx: "48",
            strokeWidth: "24",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }), r.createElement("circle", {
            cx: "180",
            cy: "75.99998",
            r: "16"
        }))), i.set("duotone", n => r.createElement(r.Fragment, null, r.createElement("path", {
            d: "M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z",
            opacity: "0.2"
        }), r.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "40",
            fill: "none",
            stroke: n,
            strokeMiterlimit: "10",
            strokeWidth: "16"
        }), r.createElement("rect", {
            x: "36",
            y: "36",
            width: "184",
            height: "184",
            rx: "48",
            strokeWidth: "16",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }), r.createElement("circle", {
            cx: "180",
            cy: "75.99998",
            r: "12"
        }))), i.set("fill", () => r.createElement(r.Fragment, null, r.createElement("g", null, r.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "32"
        }), r.createElement("path", {
            d: "M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"
        })))), i.set("light", n => r.createElement(r.Fragment, null, r.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "40",
            fill: "none",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }), r.createElement("rect", {
            x: "36",
            y: "36",
            width: "184",
            height: "184",
            rx: "48",
            strokeWidth: "12",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }), r.createElement("circle", {
            cx: "180",
            cy: "75.99998",
            r: "10"
        }))), i.set("thin", n => r.createElement(r.Fragment, null, r.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "40",
            fill: "none",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }), r.createElement("rect", {
            x: "36",
            y: "36",
            width: "184",
            height: "184",
            rx: "48",
            strokeWidth: "8",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }), r.createElement("circle", {
            cx: "180",
            cy: "75.99998",
            r: "8"
        }))), i.set("regular", n => r.createElement(r.Fragment, null, r.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "40",
            fill: "none",
            stroke: n,
            strokeMiterlimit: "10",
            strokeWidth: "16"
        }), r.createElement("rect", {
            x: "36",
            y: "36",
            width: "184",
            height: "184",
            rx: "48",
            strokeWidth: "16",
            stroke: n,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }), r.createElement("circle", {
            cx: "180",
            cy: "75.99998",
            r: "12"
        })));
        const l = (n, o) => d(n, o, i),
            s = r.forwardRef((n, o) => r.createElement("g", {
                ref: o,
                ...n
            }, l(n.weight, n.color)));
        s.displayName = "InstagramLogo", e = s
    }
    return e
};
export {
    k as
    default
};