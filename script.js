function render() {
    //Handle input and append it to the do-list
    $('#submit').on('click', (event) => {
        let $inputValue = $('#input-box').val();
        //each item will have a to-do-item class with a complete-button
        let $completeBtn = $('<button>Completed</button>').addClass('complete-button');
        let $itemDiv = $('<li>').addClass('to-do-item');
        $itemDiv.text(`${$inputValue}`);
        $itemDiv.append($completeBtn);
        $('#do-list').append($itemDiv);
        //reset input 
        $('#input-box').val("");

    });
    
    $(document).on('click', '[class^=complete-button]', (event) => {
        $(event.currentTarget).addClass("removed-btn");
        $(event.currentTarget).removeClass("complete-button");
        $(event.currentTarget).text("removed");
    })
    
    $(document).on('click', '[class^=to-do-item]', (event) => {
        $('#done-list').append($(event.currentTarget));
        $(event.currentTarget).addClass("done-item");
        $(event.currentTarget).removeClass("to-do-item");
    })

     $(document).on('click', '[class^=remove-button]', (event) => {
        (event.Target).remove();
    })

    $(document).on('click', '[class^=done-item]', (event) => {
        (event.currentTarget).remove();
    })
    


}


$(() => {
    render();
})