const Actions = require('./actions');

const DB = require('../../app/db');

module.exports = Reflux.createStore({
    listenables: [Actions],
    data: {
        loaded: false,
        content: {},
        error: false
    },

    onFetch: function(params, cb) {
        console.log(4);
        var t = this;
        DB.SomeModuleAPI.getSomeInfo(params)
        .then(function(content) {
            t.data.loaded = true;
            t.data.content = content;
            t.updateComponent();
            cb && cb(t.data);
        })
        .catch(function(error) {
            t.data.error = error;
            t.updateComponent();
            cb && cb(t.data);
        });
    },

    updateComponent: function() {
        console.log(5);
        this.trigger(this.data);
    },

    getInitialState: function() {
        console.log(2);
        return this.data;
    }
});
