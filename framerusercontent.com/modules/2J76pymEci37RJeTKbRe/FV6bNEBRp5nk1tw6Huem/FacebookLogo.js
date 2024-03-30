let e;
var l = n => {
    if (!e) {
        const k = (o, i, t) => t.get(o) ? t.get(o)(i) : null,
            r = new Map;
        r.set("bold", o => n.createElement(n.Fragment, null, n.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "96",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }), n.createElement("path", {
            d: "M168,88.00094H152a24,24,0,0,0-24,24v112",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }), n.createElement("line", {
            x1: "96",
            y1: "144.00094",
            x2: "160",
            y2: "144.00094",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }))), r.set("duotone", o => n.createElement(n.Fragment, null, n.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "96",
            opacity: "0.2"
        }), n.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "96",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("path", {
            d: "M168,88.00094H152a24,24,0,0,0-24,24v112",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("line", {
            x1: "96",
            y1: "144.00094",
            x2: "160",
            y2: "144.00094",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }))), r.set("fill", () => n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M128,24a104.0018,104.0018,0,0,0-8,207.69531V152.00094H96a8,8,0,0,1,0-16h24v-24a32.03667,32.03667,0,0,1,32-32h16a8,8,0,0,1,0,16H152a16.01833,16.01833,0,0,0-16,16v24h24a8,8,0,0,1,0,16H136v79.69434A104.0018,104.0018,0,0,0,128,24Z"
        }))), r.set("light", o => n.createElement(n.Fragment, null, n.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "96",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }), n.createElement("path", {
            d: "M168,88.00094H152a24,24,0,0,0-24,24v112",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }), n.createElement("line", {
            x1: "96",
            y1: "144.00094",
            x2: "160",
            y2: "144.00094",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }))), r.set("thin", o => n.createElement(n.Fragment, null, n.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "96",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }), n.createElement("path", {
            d: "M168,88.00094H152a24,24,0,0,0-24,24v112",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }), n.createElement("line", {
            x1: "96",
            y1: "144.00094",
            x2: "160",
            y2: "144.00094",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }))), r.set("regular", o => n.createElement(n.Fragment, null, n.createElement("circle", {
            cx: "128",
            cy: "128",
            r: "96",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("path", {
            d: "M168,88.00094H152a24,24,0,0,0-24,24v112",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("line", {
            x1: "96",
            y1: "144.00094",
            x2: "160",
            y2: "144.00094",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })));
        const d = (o, i) => k(o, i, r),
            s = n.forwardRef((o, i) => n.createElement("g", {
                ref: i,
                ...o
            }, d(o.weight, o.color)));
        s.displayName = "FacebookLogo", e = s
    }
    return e
};
export {
    l as
    default
};