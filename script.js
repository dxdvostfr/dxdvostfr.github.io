var switcher$ = $('.switcher'),          // select element
    switchTarget$ = $('.switch-target'); // iframe

switcher$.on('change', switchIframeSrc); // event binding

// our function to switch the iframe src
function switchIframeSrc() {
  // set the 'src' attribute of the iframe
  // to the value of the selected option
  switchTarget$.attr('src', switcher$.val());
}

// call the method on load
switchIframeSrc();
