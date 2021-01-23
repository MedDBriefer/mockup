#!/usr/bin/env mode

const data = require("./src/data/trauma.json")

function flatten(parent, children) {
    children.map(child => {
        let parentId = (null !== parent) ? parent.id : null;
        const rec = {id: child.id, label: child.label, parent: parentId};
        // console.log({"label:child.label, parentId, child.children.length);
        console.log(rec);
        if (child.children) {
            flatten(child, child.children);
        }
    })
    // console.log(parent, children.length)
}

flatten(null, data)