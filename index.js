
function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
};

function addNewElementAsLi() {
  const employee = retrieveEmployeeInformation();
  document.querySelector('ul').append(employee);
}

function addNewLiOnClick() {
  document.addEventListener('click',addNewElementAsLi);
  document.querySelector('input').value = '';
}
