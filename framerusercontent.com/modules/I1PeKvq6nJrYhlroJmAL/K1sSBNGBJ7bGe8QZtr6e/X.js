let e;
var l = n => {
    if (!e) {
        const d = (o, r, t) => t.get(o) ? t.get(o)(r) : null,
            i = new Map;
        i.set("bold", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }), n.createElement("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "24"
        }))), i.set("duotone", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }))), i.set("fill", () => n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M139.31348,128l66.34326-66.34326a7.99984,7.99984,0,0,0-11.31348-11.31348L128,116.68652,61.65674,50.34326A7.99984,7.99984,0,0,0,50.34326,61.65674L116.68652,128,50.34326,194.34326a7.99984,7.99984,0,1,0,11.31348,11.31348L128,139.31348l66.34326,66.34326a7.99984,7.99984,0,0,0,11.31348-11.31348Z"
        }))), i.set("light", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }), n.createElement("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "12"
        }))), i.set("thin", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }), n.createElement("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            fill: "none",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "8"
        }))), i.set("regular", o => n.createElement(n.Fragment, null, n.createElement("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), n.createElement("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            stroke: o,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })));
        const k = (o, r) => d(o, r, i),
            s = n.forwardRef((o, r) => n.createElement("g", {
                ref: r,
                ...o
            }, k(o.weight, o.color)));
        s.displayName = "X", e = s
    }
    return e
};
export {
    l as
    default
};