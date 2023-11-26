const request = require('request');
const apiOptions = {
 server: 'http://localhost:3000'
}

/* render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Gateways - Travel';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    }
    else {
        if (!responseBody.length) {
            message = 'No trips exist in database';
        }
    }

    // render the page
    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};


/* GET travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    // send the request to the api and get a response. Use the response to render the travel page
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    )
};



module.exports = {
    travelList
};