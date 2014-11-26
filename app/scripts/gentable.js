'use strict';

// start executing code once the DOM is ready
$(document).ready(function() {

    // state variable to keep track of number of tags created
    var tabNum = 1;

    $('#addTab').on('click', function() {

        var tab = $('<li>').addClass('tab')
            .append($('<a>').attr('href', '#tab' + tabNum).text('Tab' + tabNum));

        var tabContent = $('<div>').attr('id', 'tab' + tabNum)
            .text('content for tab' + tabNum);

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

        tabNum = tabNum + 1;

        $('#mytabs').tabs("refresh");

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
            var re = /\w+(\d)/;
            var array = e.match(re);

            return array[1];
        });


        console.log(tabIDs);

 
    });
    // when the submit event occurs, call this function
    $('#ranges').submit(function() {

        var multiplierStart = $('#multiplierStart').val();
        var multiplierEnd = $('#multiplierEnd').val();
        var multiplicandStart = $('#multiplicandStart').val();
        var multiplicandEnd = $('#multiplicandEnd').val();

        console.log('ier start ' + multiplierStart);
        console.log('ier end ' + multiplierEnd);
        console.log('and start ' + multiplicandStart);
        console.log('and end ' + multiplicandEnd);

        // select and clear any table that might already be on page.
        var table = $('#tbl1 tbody');
        table.empty();

        // create a top row
        table.append($('<tr id="first">'));
        $('#first').append($('<td>')); //add blank td
        for (var i = multiplicandStart; i <= multiplicandEnd; i++) {
            $('#first').append($('<td>').text(i));
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
        var droppedFirstRow = $('#tbl1 tbody tr').slice(1);
        for (i = multiplierStart; i <= multiplierEnd; i++) {
            var curRow = droppedFirstRow[i - multiplierStart];
            $(curRow).prepend($('<td>').text(i));
        }
    });
});
