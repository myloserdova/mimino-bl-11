document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.tel-input')
  const maskOptions = { 
      mask: '+{38} (000) 000-00-00'
    }
    
  IMask(inputElement, maskOptions) 

  var overwriteMask = IMask(
    document.querySelector('.tel-input'),
    {
      mask: '+{38} (000) 000-00-00',
      lazy: false,
    }
  );
    
})