export const createElement = (node) => {
    return document.createElement(node);
};

export const setInnerTextElement = (node, setValue) => {
    let setInnerText;

    if (typeof setValue === 'string') {
        setInnerText = node.innerText = setValue;
    } else {
        setInnerText = node.innerText = setValue;
    }

    return setInnerText;
};

export const setAttributes = (node, attributes) => {
    if (typeof attributes === 'object') {
        for (const key in attributes) {
            return node.setAttribute(key, attributes[key]);
        }
    }
};

export const setAttribute = (node, setAttributeName, setValue) => {
    return node.setAttribute(setAttributeName, setValue);
};

export const removeAttribute = (token, destroyAttribute) => {
    return token.removeAttribute(destroyAttribute);
};

export const appendParentNodeToChildren = (parentNode, insertChildreNode) => {
    return parentNode.appendChild(insertChildreNode);
};

export const prependNodeChildren = (applyParentNode, insertChildreNode) => {
    return applyParentNode.prepend(insertChildreNode);
};

export const insertBefore = (parentNode, newNode, referenceNode) => {
    return parentNode.insertBefore(newNode, referenceNode);
};