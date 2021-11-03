/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
//$('#one').next().next().text('EG');

// add a new element by clicking the plus sign
//$('#todo').append('<li>candi</li>');
//$('#todo').prepend('<li>funni saus</li>');
$('#add').click(addElement);

// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  // add a input text box
  // whenever the user are done add the element
  $('#todo').append('<li>newItem</li>');
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  } else if ($(this).hasClass('complete')) {
    $(this).removeClass('complete');
    $(this).addClass('cool');
  } else {
    $(this).addClass('complete');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
}
