function get_date() {
    let date = new Date();
    
    let mm = date.getMonth() + 1; 
    let dd = date.getDate();
    let yyyy = date.getFullYear();
  
    if(mm < 10) {
      mm = '0' + mm;
    } 
  
    if(dd < 10) {
      dd = '0' + dd;
    }
  
    return mm + '-' + dd + '-' + yyyy;
  }
  
  let date = get_date();
  console.log(date);
  

const orderDate = $('#order-date').val(date);
console.log(orderDate);