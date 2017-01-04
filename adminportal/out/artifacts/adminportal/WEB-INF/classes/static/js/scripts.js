$(document).ready(function() {
    $('.delete-book').on('click', function (e) {
        /*<![CDATA[*/
        var path = /*[[@{/}]]*/'remove';
        /*]]>*/
        var id= $(this).attr('id');

        bootbox.confirm({
            message: "Are you sure to remove this book? It can't be undone.",
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> Cancel'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Confirm'
                }
            },
            callback: function (confirmed) {
                if(confirmed) {
                    $.post(path, {'id': id}, function (res) {
                        location.reload();
                    });
                }
            }
        });
    });

    var bookIdList=[];

    $('.checkboxBook').click(function () {
        console.log("change detected.");
        var id = $(this).attr('id');
        if(this.checked){
            bookIdList.push(id);
        }
        else {
            bookIdList.splice(bookIdList.indexOf(id), 1);
        }
    })

    $('#deleteSelected').click(function(){
        /*<![CDATA[*/
        var path = /*[[@{/}]]*/'removeList';
        /*]]>*/

        bootbox.confirm({
            message: "Are you sure to remove all selected books? It can't be undone.",
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> Cancel'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Confirm'
                }
            },
            callback: function (confirmed) {
                if(confirmed) {
                    // $.post(path, JSON.stringify(bookIdList), function (res) {
                    //     location.reload();
                    // });

                    $.ajax({
                        type: 'POST',
                        url: path,
                        data: JSON.stringify(bookIdList),
                        contentType: "application/json",
                        success: function(res) { console.log(res); location.reload(); },
                        error: function(res) {
                            console.log(res);
                            location.reload();
                        }
                    });
                }
            }
        });
    });

    $("#selectAllBooks").click(function(){
        if($(this).prop("checked") == true){
            // $('.checkboxBook').prop("checked", true);
            $('.checkboxBook').click();
        }
        else if($(this).prop("checked") == false){
            // $('.checkboxBook').prop("checked", false);
            $('.checkboxBook').click();
        }

    });
});