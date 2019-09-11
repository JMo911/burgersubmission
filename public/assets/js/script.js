$(".devour-form").submit(function(e){
    e.preventDefault();
    console.log(this.elements[0].value);
});