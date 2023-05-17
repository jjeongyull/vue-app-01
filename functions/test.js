exports.handler = async function (event, comtext) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'yull',
            age: 27,
            email: 'ckddnjs3698@naver.com'
        })
    }
}