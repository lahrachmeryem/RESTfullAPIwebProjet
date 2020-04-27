const mongoose = require('mongoose');

const ShowSchema = {
    id : {
        type : String,
        type : auto
    },
    title : String,
    producer: String,
    genre : String,
    nb_episodes : Number,
    nb_seasons : Number,
    launch_date : String,
    end_date: String
}

const Show = mongoose.model('Show', ShowSchema);

module.exports = Show;