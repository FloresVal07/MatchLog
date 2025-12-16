const convertToFileSyntax = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "_");
};

const convertToCompactLowercase = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "");
};

const generateDates = (center, past, future) => {
    const firstHalf = [];
    const secondHalf = [];

    // Past Dates
    for (let i = past; i >= 1; i--) {
        const d = new Date(center);
        d.setDate(d.getDate() - i);
        firstHalf.push(d);
    }

    // Future Dates
    for (let i = 1; i <= future; i++) {
        const d = new Date(center);
        d.setDate(d.getDate() + i);
        secondHalf.push(d);
    }

    return {
        firstHalf,
        secondHalf
    };
};

export {generateDates, convertToFileSyntax, convertToCompactLowercase};