#!/usr/bin/env node
const traumaScenarioIndexer = require("./TraumaScenario")
const scenario = require("./scenario")

function flattenTree(parent, children) {
    // console.log(parent, children)
    children.map(child => {
        // console.log(child)
        let parentId = (null !== parent) ? parent.id : null;
        if (['heading','assessment','intervention'].includes(child.type)) {
            const rec = `{"id": "${child.id}", "type": "${child.type}", "label": "${child.label}" },`;
            // console.log({"label:child.label, parentId, child.children.length);
            console.log(rec);
        }
        if (child.children && child.children.length > 0) {
            flattenTree(child, child.children);
        }
    })
    // console.log(parent, children.length)
}

const data = traumaScenarioIndexer(scenario)
// console.log(data.steps)

flattenTree(null, data.steps)
