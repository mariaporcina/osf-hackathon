"use strict";

/**
 * Renders a modal window
 */
const modalShow = () => {
    $('.storematch-modal').click(function(){
        $.ajax({
            url: $(".storematch-modal").attr("data-modal-url"),
            method: "GET",
            success: function(data) {
                if(data.login){
                    location.href="/on/demandware.store/Sites-RefArch-Site/en_US/Login-Show"
                }else{
                    var $html = $(`
                        <div class="modal fade my-exercise-modal" id="myModal" role="dialog">
                            ${data}
                        </div>
                    `);

                    $html.on("hidden.bs.modal", e => {
                        $(e.target).remove();
                    });

                    $html.modal();
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    })
};

module.exports = () => {
    modalShow();
};