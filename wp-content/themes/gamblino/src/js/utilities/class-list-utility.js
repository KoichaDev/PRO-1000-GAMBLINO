export const getClassName = (tokenList) => {
	// regex: Remove the white spaces of the className just in case if there is any
	return tokenList.className.replace(/\s+/g, ' ');
};

export const getAllClassName = (tokenList) => {
	for (let i = 0; i < tokenList.classList.length; i++) {
		// regex: Remove the white spaces of the className just in case if there is any
		return tokenList.className.replace(/\s+/g, ' ');
	}
};

export const addClassName = (tokenList, setClassName) => {
	let className;

	if (typeof setClassName === 'string') {
		className = tokenList.classList.add(setClassName);
	} else {
		className = tokenList.classList.add(...setClassName);
	}

	return className;
};

export const removeClassName = (tokenList, setClassName) => {
	let className;

	if (typeof setClassName === 'string') {
		className = tokenList.classList.remove(setClassName);
	} else {
		className = tokenList.classList.remove(...setClassName);
	}

	return className;
};

export const isClassNameExist = (tokenList, className) => {
	return tokenList.classList.contains(className);
};

export const replaceClassName = (tokenList, oldClassName, newClassName) => {
	return tokenList.classList.replace(oldClassName, newClassName);
};
