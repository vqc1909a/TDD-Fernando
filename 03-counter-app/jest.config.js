module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    
    //this line works me to make a global configurtaion before run the tests
    setupFiles: ['./jest.setup.js']
}