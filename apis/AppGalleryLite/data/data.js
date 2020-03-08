const db = require("../models");
const queryExecutor = require("./_queryExecutor");

module.exports = {

    getApplications: function (req, res) {
        
        const query = (
            db.App.find({})
            .sort({ 
                isActivelySupported: -1, 
                isFeatured: -1, 
                isCollaboration: -1, 
                publishDate: -1 
            })
        )

        queryExecutor.queryAndRespond(query, res);

    },

    getKeywords: function (req, res) {

        const query = (
            db.Keyword.find({})
            .sort({ 
                type: 1, 
                name: 1
            })
        )

        queryExecutor.queryAndRespond(query, res);

    }

}