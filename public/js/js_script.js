var burgerWrap = document.getElementById('burgerWrap');

/*var button = document.getElementById('button');
function click(){
  alert("Button clicked!");
}

button.addEventListener("click", click);
*/

function gender(){
  if(document.getElementById('male').checked){
      return "Male";
    }
  else if(document.getElementById('female').checked){
      return "Female";
    }
  else if(document.getElementById('non').checked){
        return "Non-binary";
      }
  else{
    return "Undisclosed";
  }
}

function burger(){
  var cl = 'Classic burger';
  var dc= 'Double chickn burger';
  var tb= 'Texas burger';
  var sp= 'Sweet potato fries';
  var b=[];
  if(document.getElementById('a').checked){
    b.push(cl);
  }
  if(document.getElementById('b').checked){
    b.push(dc);
  }
  if(document.getElementById('c').checked){
    b.push(tb);
  }
  if(document.getElementById('d').checked){
    b.push(sp);
  }
  return b;
}

function form() {
    this.firstName = document.getElementById('firstname').value;;
    this.lastName = document.getElementById('lastname').value;
    this.email = document.getElementById('email').value;
    this.street = document.getElementById('street').value;
    this.housenr= document.getElementById('house nr').value;
    this.payment= document.getElementById('payment').value;
    this.gender= gender();
    this.burger=burger();
    if(firstName.length==0 | lastName.length==0 |  email.length==0 | street.length==0 | housenr.length==0){
        alert("Please fill out all fields!")
    }
    else {
      alert("Order made!");
      return {"fn":firstName, "ln":lastName, "em":email, "str":street, "nr":housenr, "pay":payment, "gen":gender, "burg":burger};
    }
}


 for (i=0; i<food.length; i++)
{
        var box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.classList.add(food[i].box);
        burgerWrap.appendChild(box);

        var h = document.createElement('h3');
        var headline = document.createTextNode(food[i].productName);
        h.appendChild(headline);
        box.appendChild(h);

        var check = document.createElement('input');
        check.setAttribute('id', food[i].box);
        check.setAttribute('type', 'checkbox');
        box.appendChild(check);

        var image1 = document.createElement('img');
        image1.setAttribute('class', 'burger');
        image1.setAttribute('src', food[i].image);
        image1.setAttribute('width', 250);
        image1.setAttribute('height', 250);
				box.appendChild(image1);

        var listItem1 = document.createElement("li");
        var listItem2 = document.createElement("li");
        var listItem3 = document.createElement("li");
        listItem1.innerHTML = food[i].kCal;
        listItem2.innerHTML = food[i].gluten;
        listItem3.innerHTML = food[i].lactose;
        box.appendChild(listItem1);
        box.appendChild(listItem2);
        box.appendChild(listItem3);
}
