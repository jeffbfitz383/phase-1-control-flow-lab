function scuberGreetingForFeet(amount){
  if (amount < 400){
    return("This one is on me!")
  } else if  (amount < 2000){
    return('That will be twenty bucks.')
  }else if (amount < 2500){
    return('I will gladly take your thirty bucks.')
  } else {
    return('No can do.');
  }

}


function ternaryCheckCity(city){
  
  const NYC =  city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return NYC;

}

function switchOnCharmFromTip(tip){
  const tipped = tip;

  switch(tipped){
    case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
    return 'Thank you.'
    default:
    return 'Bye.'

  }


}