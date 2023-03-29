
  potentialDeadlines = [9, 10, 11, 12, 13, 14, 15, 16, 17]
  function deadlinechecker() {
    let now = dayjs().hour();
    let timer = $(".time-block")

    for (var i = 0; i < potentialDeadlines.length; i++) {
      if(potentialDeadlines[i] < now) {
        timer.eq(i).children('textarea').addClass('past');

      }else if (potentialDeadlines [i] === now) {
        timer.eq(i).children('textarea').addClass('present');
        
      }else{
      timer.eq(i).children('textarea').addClass('future');
        
    }
  }};
  deadlinechecker()

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('.description').on('change', function() {
    const timeBlockId = $(this).parent().attr('id');
    const descriptionValue = $(this).val();
    localStorage.setItem(timeBlockId, descriptionValue);
  });

   const currentDateElement = $('#currentDay')
$(function () {
  const currentDate = dayjs().format('ddd MMMM DD, YYYY')
  console.log(currentDate)
currentDateElement.text(currentDate)
});