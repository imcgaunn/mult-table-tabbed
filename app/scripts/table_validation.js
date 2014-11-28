//TODO: HEADER COMMENT

'use strict';

$(document).ready(function() {
    $('#ranges').validate({
        rules: {
            multiplierStart: {
                required: true
            },
            multiplierEnd: {
                required: true
            },
            multiplicandStart: {
                required: true
            },
            multiplicandEnd: {
                required: true
            }
        },

        messages: {
            multiplierStart: {
                required: 'please enter a starting value for the multiplier'
            },

            multiplierEnd: {
                required: 'please enter an ending value for the multiplier'
            },

            multiplicandStart: {
                required: 'please enter a starting value for the multiplicand'
            },

            multiplicandEnd: {
                required: 'please enter an ending value for the multiplicand'
            }

        }
    });

});
