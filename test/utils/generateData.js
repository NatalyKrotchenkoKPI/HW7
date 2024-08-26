const { faker } = require('@faker-js/faker');

function generateRandomUsername() {
    return faker.internet.userName();
}

function generateRandomEmail() {
    return faker.internet.email();
}

function generateRandomPassword() {
    return faker.internet.password(8, true);
}

function generateRandomComment() {
    return faker.lorem.sentence();
}

module.exports = {
    generateRandomUsername,
    generateRandomEmail,
    generateRandomPassword,
    generateRandomComment
};
