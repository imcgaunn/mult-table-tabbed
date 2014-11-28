/*
  File: app/styles/tabs.js
  91.461 Assignment 8
  Ian McGaunn, UMass Lowell Computer Science, imcgaunn@cs.uml.edu
  Copyright (c) 2014 by Ian McGaunn. All rights reserved. May be freely
  copied or excerpted for educational purposes with credit to the author.
*/

'use strict';

$(document).ready(function() {
    // state variable to keep track of number of tags created
    var tabNum = 1;

    $('#addTab').on('click', function() {

        var tab = $('<li>').addClass('tab')
            .append($('<a>')
                    .attr('href', '#tab' + tabNum)
                    .text('Tab' + tabNum));

        // disable active on all li elements except
        // for this new one being added
        $('ul li').removeClass('active');
        tab.addClass('active');

        var tabContent = $('<div>').attr('id', 'tab' + tabNum);

        // create table skeleton with proper id
        var tabtable = $('<table>').attr('id', 'tab' + tabNum + 'table')
            .append('<tbody>');

        // add table to tab's div
        tabContent.append(tabtable);

        // add tab and corresponding content div to DOM
        $('#mytabs ul.nav').append(tab);
        $('#mytabs').append(tabContent);

        // add checkbox to form
        var checkbox = $('<input>').attr('type', 'checkbox')
            .attr('id', 'check'+tabNum);
        
        var span = $('<span>').text('Tab' + tabNum);

        $('#delTabs').append(checkbox);
        $('#delTabs').append(span);
        $('#delTabs').append('<br />');

        // increment tabNum
        tabNum = tabNum + 1;

        $('#mytabs').tabs('refresh');

        // make sure the new tab added is activated
        tab.children('a').trigger('click');
        
        

    });

    // handler for Delete Selected button
    $('#delTab').on('click', function() {
        var checkboxes = $('#delTabs input[type="checkbox"]');

        // only get the checkboxes that are checked
        checkboxes = checkboxes.filter(function() {
            return $(this).is(':checked');
        });

        // obtain ids from each checkbox
        var checkIDs = checkboxes.map(function(i, e) {
            return $(e).attr('id');
        });

        // translate each checkbox id to numerical ID which refers
        // to tab number and its associated div
        var IDs = checkIDs.map(function(i, e) {
            var re = /[a-z]+(\d+)/;
            var array = e.match(re);

            console.log('regex match: ');
            console.log(array);

            return array[1];
        });

        IDs.each(function(i, e) {
            var href = $('[href="#tab' + e + '"]');
            var div = $('#tab' + e);
            var checkbox = $('#check' + e);

            href.closest('li').remove(); // remove li holding anchor for tab
            div.remove(); // remove the div associated with tab
            checkbox.next().next().remove(); // remove br after checkbox
            checkbox.next().remove(); // remove span after checkbox
            checkbox.remove(); // remove checkbox

        });

        // trigger 'click' event so the tab gets activated correctly

    });

    // properly set active class when tabs are selected
    $('#mytabs ul').on({
        click: function() {
            // add active class to li clicked
            var cur = $(this);
            cur.addClass('active');

            // remove active class from every other li
            $('#mytabs ul li').each(function(i, e) {
                //console.log(e)

                // remove active class from every li
                // that was *not* clicked
                if ( !(e === cur.get(0)) ) {
                    $(e).removeClass('active');
                };
            });
        }
    }, 'li'); // filter by 'li' elements that match the above selectors

});
