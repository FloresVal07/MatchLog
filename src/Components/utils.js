const convertToFileSyntax = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "_");
};

export { convertToFileSyntax };