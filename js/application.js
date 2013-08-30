$(document).ready(function() {
    var $alias          = $('textarea#alias'),
        $button         = $('button#button'),
        $submitTwitter  = $('button#submitTwitter');

    // alert on document ready
    // alert('jQuery set: document ready occurred!');

    // focus $alias
    $alias.focus();

    // Attach click event
    $button.on('click', function(e){
        buttonClicked();

        e.preventDefault();
    });
});

//---------------------------------------------------

/**
 * buttonClicked
 * @return html content
 */
function buttonClicked() {
    var $response       = $('div#response');

    $response
        .text('Loading...');

    $.get('http://bootcamp.aws.af.cm/welcome/Yosvel Quintero... the Cuban!', 
        function(data) {
            $response
                .text(data.response)
                .highlight('Cuban');
        }, 'json')
            .fail(function() { 
                $response
                    .addClass('red')
                    .text('Ops, an error occurred');
            });
}