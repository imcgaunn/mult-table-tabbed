/*
  File: app/styles/table_validation.js
  91.461 Assignment 8
  Ian McGaunn, UMass Lowell Computer Science, imcgaunn@cs.uml.edu
  Copyright (c) 2014 by Ian McGaunn. All rights reserved. May be freely
  copied or excerpted for educational purposes with credit to the author.
*/

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
