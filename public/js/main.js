$(function () {
  $(".taskstatus").change(function () {
    $.get('/task/' + $(this).attr('name') + '/state',
      {
        newstate: $(this).prop('checked') ? 1 : 0
      }, function (e) {
      })
  });
})
;