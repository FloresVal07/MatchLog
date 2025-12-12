const convertToFileSyntax = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "_");
};

const convertToCompactLowercase = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "");
};

const generateDates = (center, past, future) => {
    const firstHalf = [];
    const secondHalf = [];
    const middle = [];

    // Past Dates
    for (let i = past; i > 1; i--) {
        const d = new Date(center);
        d.setDate(d.getDate() - i);
        firstHalf.push(d);
    }

    const yesterday = new Date(center);
    yesterday.setDate(yesterday.getDate() - 1);
    const today = new Date(center);
    today.setDate(today.getDate());
    const tomorrow = new Date(center);
    tomorrow.setDate(tomorrow.getDate() + 1);
    middle.push(yesterday);
    middle.push(today);
    middle.push(tomorrow);

    // Future Dates
    for (let i = 2; i <= future; i++) {
        const d = new Date(center);
        d.setDate(d.getDate() + i);
        secondHalf.push(d);
    }

    return {
        firstHalf,
        middle,
        secondHalf
    };
};

export {generateDates, convertToFileSyntax, convertToCompactLowercase};