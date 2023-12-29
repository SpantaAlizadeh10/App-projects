const day = prompt('Please Enter a day!');

switch (day){
    case 'monday':
        document.write('plan cousre structure');
        document.write(' go to the gym');
        break;
    case 'tuesday':
        document.write('wacth code video');
        break;
    case 'wednesday':
    case 'thursday':
        document.write("write code ecample");
        break;
    case 'friday':
        document.write('record videos');
        break;
    case 'saturday':
        document.write('Enjoy the weekend :D');
        break;
    default:
        document.write('NOt a valid day!');                        
}


 if (day === 'monday'){
    console.log('plan cousre structure');
    console.log('go to the gym');

 }else if (day === 'tuesday'){
    console.log('wacth code video');

 }else if (day === 'wednesday' || day === 'thursday'){
    console.log("write code ecample");

 }else if (day === 'friday'){
    console.log('record videos');

 }else if (day === 'saturday'){
    console.log('Enjoy the weekend :D');

 }else{
    console.log('Not a valid day');
 }