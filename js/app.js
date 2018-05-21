document.addEventListener('DOMContentLoaded', () => {
  console.log('I loaded!');


  const form = document.querySelector('#form');
  form.addEventListener('submit', handleSubmit);
});



const handleSubmit = function(event){
  event.preventDefault();
  // console.log(event.target.firstName.value);
  const submittedBook = document.querySelector('#form-result');
  // submittedBook.textContent = "You have added a book";

  submittedBook.textContent = `You have added ${this.title.value} by ${this.firstName.value} ${ this.lastName.value} it's a ${this.genre.value} book`;
  form.reset();
};
