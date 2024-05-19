

function createUserProfiles(originalNames, ModifiedNames) {
    if (originalNames.length !== ModifiedNames.length) {
        throw new Error("The two arrays must be of the same length.");
    }

    const userProfiles = originalNames.map((originalName, index) => {
        return {
            id: index + 1,
            originalName: originalName,
            modifiedName: ModifiedNames[index]
        };
    });

    return userProfiles;
}

module.exports = createUserProfiles;
