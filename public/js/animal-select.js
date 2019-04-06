function getAnimal(){
    $('div').empty();


    $.ajax({
        url: '/animals.json',
        method: 'GET'
    }).then(function(animals){
        for (var animalsIndex in animals){

            var p= $('<p>');


            p.text(`id: ${animals[animalIndex].id}, animal name: ${animals[animalIndex].animal_name}`)

            var bt = $('<button>'); //<button></button>
				bt.attr('class', 'delete');
				
				bt.text('delete'); //<button>delete</button>
				bt.attr('data-id', actors[actorIndex].id)
				//<button data-id="4">delete</button>

				p.append(bt);



        }
    })
}