
<style type="text/css" media="screen">
    @import url(http://weloveiconfonts.com/api/?family=entypo);
body {
  background: #292931;
  padding: 0;
  margin: 0;
}

[data-icon]:after {
  font-family: "entypo";
  content: attr(data-icon);
  speak: none;
}

.hide-text, label, button {
  display: block;
  text-indent: 150%;
  overflow: hidden;
}
.hide-text:before, label:before, button:before, .hide-text:after, label:after, button:after {
  text-indent: 0;
}

form {
  margin: 20px 0 0 0;
}

fieldset {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  width: 200px;
  padding: 16px 16px 8px 16px;
  background: #423142;
  border: 0;
}

label[data-icon]:after,
button[data-icon]:after {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 16px;
}

label {
  -moz-border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px 0 0 3px;
  position: absolute;
  margin-top: -42px;
  width: 32px;
  height: 32px;
  background: #dedede;
  border-right: 1px solid #cecece;
  cursor: pointer;
}
label[data-icon]:after {
  color: #847384;
}
label[for="username"][data-icon]:after {
  margin: -9.14286px 0 0 -7.11111px;
}
label[for="password"][data-icon]:after {
  margin: -9.14286px 0 0 -4.92308px;
}

input[type="text"],
input[type="password"] {
  /*@include input-placeholder {
    color: $form-input-text-placeholder-color;
  }*/
  -moz-border-radius: 0 3px 3px 0;
  -webkit-border-radius: 0;
  border-radius: 0 3px 3px 0;
  height: 32px;
  width: 166px;
  border: 0;
  margin: 0 0 10px 32px;
  padding: 0 0 0 8px;
  font: 14px Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
}
input[type="text"]::-webkit-input-placeholder,
input[type="password"]::-webkit-input-placeholder {
  color: #848484;
}
input[type="text"]::-moz-input-placeholder,
input[type="password"]::-moz-input-placeholder {
  color: #848484;
}
input[type="text"]:-ms-input-placeholder,
input[type="password"]:-ms-input-placeholder {
  color: #848484;
}
input[type="text"] + label + span,
input[type="password"] + label + span {
  display: none;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-shadow: 0 0 0 transparent;
  -webkit-box-shadow: 0 0 0 transparent;
  box-shadow: 0 0 0 transparent;
  position: absolute;
  left: 234px;
  margin-top: -42px;
  padding: 0 5px;
  height: 32px;
  color: #ffffff;
  background: #E62121;
  border: 0;
  font: 14px Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
  line-height: 32px;
  white-space: nowrap;
}
input[type="text"] + label + span:before,
input[type="password"] + label + span:before {
  width: 0;
  height: 0;
  left: -8px;
  top: 12px;
  content: '';
  position: absolute;
  border-top: 4px solid transparent;
  border-right: 8px solid #E62121;
  border-bottom: 4px solid transparent;
}
input[type="text"]:invalid,
input[type="password"]:invalid {
  display: block;
  box-shadow: none;
  outline: none;
}
input[type="text"].blur:required:invalid + label,
input[type="password"].blur:required:invalid + label {
  background: #E62121;
  border-right-color: #ffffff;
}
input[type="text"].blur:required:invalid + label:after,
input[type="password"].blur:required:invalid + label:after {
  margin: -9.14286px 0 0 -8px;
  content: '\26A0';
  color: #ffffff;
}

button {
  -moz-border-radius: 0 3px 3px 0;
  -webkit-border-radius: 0;
  border-radius: 0 3px 3px 0;
  position: absolute;
  right: 16px;
  width: 32px;
  height: 32px;
  margin-top: -42px;
  color: #ffffff;
  background: #52ADD0;
  border: 0;
}
button[data-icon]:after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -9.14286px 0 0 -6.4px;
  color: #ffffff;
  font-size: 16px;
}

</style>
<script src="../../../api/controller/core/jquery/jquery-1.10.2.min.js"></script>
<script>
    // Custom validation messages
// Set msg on 'data-validation-msg' input attribute
// -------------------------------------------------
$(function () {
  var inputs = document.getElementsByTagName('input'),
      inputsLen = inputs.length,
      input,
      inputMsg,
      inputValidationMsg,
      label,
      button = document.getElementsByTagName('button')[0],
      form = document.getElementsByTagName('form')[0];

  // Let's hide the default validation msg as
  // -webkit-validation-bubble no longer works in Chrome 28+. Booooooo!
  form.addEventListener('invalid', function (e) {
    e.preventDefault();
  }, true);

  // Validate form on submit - display tooltip if input has no value
  button.onclick = function () {
    inputsLen = inputs.length;
    
    while (inputsLen--) {
      if (inputs[inputsLen].value.length > 0) {
        return true;
      }     
    next(inputs[inputsLen]).nextSibling.style.display = 'block'; 
    }
  }
  
  while (inputsLen--) {
    input = inputs[inputsLen];
    label = next(input);
    
    if (input.hasAttribute('data-validation-msg')) {   
      // Create span element for our validation msg
      inputValidationMsg = input.getAttribute('data-validation-msg');
      inputMsg = document.createElement('span');
      inputMsg.innerHTML = inputValidationMsg;
    
      // Add our own validation msg element so we can style it
      label.parentNode.insertBefore(inputMsg, label.nextSibling);
    
      input.onblur = function (e) {
        // If value does not exist or is invalid, toggle validation msg
        e.target.classList.add('blur');
        next(e.target).nextSibling.style.display = (!this.value || this.validity.valid === false) ? 'block' : 'none';
      }
    }
  }
});
  
// Credit to John Resig for this function taken from Pro JavaScript techniques 
function next(elem) {
  do {
    elem = elem.nextSibling;
  }
  while (elem && elem.nodeType !== 1);
  return elem;        
}
</script>
<center>
<br><br>
<h3 style="color: #fff">:: Digita Nombre del Objeto ::</h3>
<br>
  <form action="nuevo.php" method="POST">
    <fieldset>
      <!-- Entypo &#128274; = Locked -->
      <input type="text" name="Nombre" id="password" placeholder="Nombre" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,12}$" data-validation-msg="Digite Correctamente" required />
      <label for="password" data-icon="&#128274;">Nombre</label>
      <!-- Entypo &#58542; = Right Arrow -->
      <button value="Submit" data-icon="&#58542;" />
    </fieldset>
  </form>
</center>