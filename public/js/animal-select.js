function getAnimal(){
    $('div').empty();


    $.ajax({
        url: '/animals.json',
        method: 'GET'
    }).then(function(animals){
        for (var animalIndex in animals){

            var p= $('<p>');

            p.text(`id: ${animals[animalIndex].id}, animal name: ${animals[animalIndex].animal_name}`)

            $('div').append(p);



        }
    })
}