function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(positiveInteger) {
    let count = positiveInteger;
  
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  module.exports = {
    writeCards,
    countDown,
  };
  
