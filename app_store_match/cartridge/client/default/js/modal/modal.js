'use strict';

const openModal = () => {

    const button = $('.button-open-modal');
    const closeButton = $('.modal-close-button');

    $(document).on('click', closeButton, function() {
        $('#myModal').modal('hide');
    });

    console.log(button);
    button.on('click', function() {
        $.ajax({
            method: 'GET',
            url: button.attr('data-url'),
            success: function(data) {
                const modal = $(`
                    <div class="modal fade my-exercise-modal" id="myModal" role="dialog">
                        <div class="modal-dialog modal-dialog-centered my-modal" role="document">
                            <div class="modal-content ajax-spinner modal-with-radius">
                                <button type="button" class="close-modal-button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div class="modal-body">
                                    ${data}
                                </div>
                                <button class="modal-close-button btn btn-primary">OK</button>
                            </div>
                        </div>
                    </div>
                `);

                modal.on('hidden.bs.modal', event => {
                    $(event.target).remove();
                });

                modal.modal();
            },
            error: function(err) {
                console.error(err);
            }
        });

        return false;
    });
}

module.exports = () => {
    openModal()
}