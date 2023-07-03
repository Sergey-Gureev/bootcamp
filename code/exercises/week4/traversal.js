$('.submit-data').on('click', function(){
    alert($(this).closest('.input-area').find('input'))
  })


//When the generator button is clicked, you should console log the following values for its computer:
// The processor ID
// The computer’s data-id - also, push this to an array in an object like this: {cmp_id: id}
// The BUS number
myList = []

$('.generator').on('click', function(){
    id = $(this).closest('.computer').find('div').attr('id')    
    cmpId = $(this).closest('.computer').data().id
    bus = $(this).closest('.computer').find('.BUS').text()
    myList.push({cmpId: id})
    console.log(`Processor ID: ${id}\n
        Computer's data-id: ${cmpId} \n
        BUS: ${bus}`)
})

//When the validator button is clicked, you should console log the following values for its computer:
// The generator’s text
// The MB
// Both QRs
$('.validator').on('click', function(){
    generator = $(this).closest('.computer').find('.generator').text()  
    mb = $(this).closest('.computer').find('.mb').text()  

    var qr = $( ".QR" )
    qrS = $(this).closest('.computer').find(qr).text()
    console.log(qrS)



})

