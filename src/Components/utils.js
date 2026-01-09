const convertToFileSyntax = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "_");
};

const convertToCompactLowercase = (inputName) => {
    return inputName.toLowerCase().replace(/\s+/g, "");
};

const timeAgo = (timeIn) => {
    const dateComp = new Date();
    const dateIn = new Date(timeIn * 1000); // Multiply by 1000 if your DOP is a Unix timestamp
    const seconds = Math.floor((dateComp - dateIn) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    
    const days = Math.floor(hours / 24);
    if(days < 365) return `${days} day${days > 1 ? 's' : ''} ago`;

    const years = Math.floor(days / 365);
    return `${years} year${days > 1 ? 's' : ''} ago`;
}

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

export {generateDates, convertToFileSyntax, convertToCompactLowercase, timeAgo};