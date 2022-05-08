
module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.');
    context.res.json({
        text: "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
    });
};