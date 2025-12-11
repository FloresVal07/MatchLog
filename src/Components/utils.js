const convertToFileSyntax = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "_");
};

const generateDates = (center, past, future) => {
    const firstHalf = [];
    const secondHalf = [];

    // Past Dates
    for (let i = past; i > 1; i--) {
        const d = new Date(center);
        d.setDate(d.getDate() - i);
        firstHalf.push(d);
    }
    
    // Future Dates
    for (let i = 2; i <= future; i++) {
        const d = new Date(center);
        d.setDate(d.getDate() + i);
        secondHalf.push(d);
    }

    return {
        firstHalf,
        middle:[
            {text: "Yesterday"},
            {text: "Today"},
            {text: "Tomorrow"},
        ],
        secondHalf
    };
};

export {generateDates, convertToFileSyntax };