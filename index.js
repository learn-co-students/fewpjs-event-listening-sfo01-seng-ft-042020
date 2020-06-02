const input = document.getElementById('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    console.log(event)
    return alert('I was clicked!');
  });
}

addingEventListener()