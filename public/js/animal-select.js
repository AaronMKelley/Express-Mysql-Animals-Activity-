function getAnimal(){
    $('div').empty();


    $.ajax({
        url: '/animal.json',
        method: 'GET'
    }).then(function(animals){
        for (var animalsIndex in animals){

            var p= $('<p>');


            p.text(`id: ${animals[animalIndex].id}, animal name: ${animals[animalIndex].animal_name}`)

            


        }
    })
}