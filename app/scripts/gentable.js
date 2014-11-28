/*
  File: app/styles/gentable.js
  91.461 Assignment 8
  Ian McGaunn, UMass Lowell Computer Science, imcgaunn@cs.uml.edu
  Copyright (c) 2014 by Ian McGaunn. All rights reserved. May be freely
  copied or excerpted for educational purposes with credit to the author.
*/

'use strict';

$(document).ready(function() {

    // the validation plugin will pass the form
    // to this function, but it ends up being
    // easier to refer to DOM elements by ID, so it is ignored
    function genTable(form) {

        // grab the div associated with the currently active tab
        var curli = $('li.active a');
        var curdiv = $(curli.attr('href'));
        var tableID = curli.attr('href') + 'table';

        var multiplierStart = $('#multiplierStart').val();
        var multiplierEnd = $('#multiplierEnd').val();
        var multiplicandStart = $('#multiplicandStart').val();
        var multiplicandEnd = $('#multiplicandEnd').val();

        curdiv.prepend($('<h4>').text(
            'multiplier start: ' + multiplierStart
                + ', multiplier end: ' + multiplierEnd
        ));
        curdiv.prepend($('<h4>').text(
            'multiplicand start: ' + multiplicandStart
                + ', multiplicand end: ' + multiplicandEnd
        ));

        // console.log('ier start ' + multiplierStart);
        // console.log('ier end ' + multiplierEnd);
        // console.log('and start ' + multiplicandStart);
        // console.log('and end ' + multiplicandEnd);

        // select and clear any table that might already be on page.
        var table = $(tableID + ' tbody');
        table.empty();

        // create a top row
        table.append($('<tr class="first">'));
        console.log('selector: ' + tableID + ' .first');

        table.children('.first').append($('<td>')); //add blank td
        for (var i = multiplicandStart; i <= multiplicandEnd; i++) {
            table.children('.first').append($('<td>').text(i));
        }

        // compute results and insert into table
        for (i = multiplierStart; i <= multiplierEnd; i++) {
            var curRow = $('<tr>');
            for (var j = multiplicandStart; j <= multiplicandEnd; j++) {
                curRow.append($('<td>').text(i * j));
            }
            table.append(curRow);
        }

        // add the column of input values
        var droppedFirstRow = $(tableID + ' tbody tr').slice(1);
        for (i = multiplierStart; i <= multiplierEnd; i++) {
            var curRow = droppedFirstRow[i - multiplierStart];
            $(curRow).prepend($('<td>').text(i));
        }
    }

    $(document).ready(function() {
        $('#ranges').validate({

            // call this function if validation passes
            submitHandler: genTable,
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

});
