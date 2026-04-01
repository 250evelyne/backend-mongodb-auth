const resolveAssignedUserId = (assignedUserId) => {
    if (!assignedUserId) {
        return null;
    }
    
    if (typeof assignedUserId !== 'string' || assignedUserId.length !== 
24) {
        return new Error("Invalid assignedUserId format");
    }
    
    return assignedUserId;
};

module.exports = { resolveAssignedUserId };

