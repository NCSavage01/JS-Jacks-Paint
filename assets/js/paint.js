function configureListeners() {
    let images = document.getElementsByTagName('img')  


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover',addOpacity,false)
        document.getElementById(images[i].id).addEventListener('mouseout',removeOpacity,false)


    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     if(this.classList.contains('dim')){
        this.classList.add('dim');
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
        colorName = 'Lime Green' 
        price= '$14.99'  
        updatePrice(colorName,price)
            break;           
        case 'pn2':
            colorName = 'Medium Brown' 
        price= '$12.99'  
        updatePrice(colorName,price)    
            break;            
        case 'pn3':
            colorName = 'Royal Blue' 
        price= '$11.99'  
        updatePrice(colorName,price) 
            break;   
        case 'pn4':
            colorName = 'Bright Red' 
        price= '$10.00'  
        updatePrice(colorName,price) 
            break;   
        case 'pn5':
            colorName = 'Solid White' 
        price= '$8.99'  
        updatePrice(colorName,price)  
            break;   
        case 'pn6':
            colorName = 'Solid Black' 
            price= '$17.99'  
            updatePrice(colorName,price)       
            break;   
        case 'pn7':
            colorName = 'Medium Blue' 
        price= '$9.99'  
        updatePrice(colorName,price)
            break;   
        case 'pn8':
            colorName = 'Light Purple' 
        price= '$16.99'  
        updatePrice(colorName,price)
            break;   
        case 'pn9':
            colorName = 'Bright Yellow' 
        price= '$18.00'  
        updatePrice(colorName,price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent=price;
        
        let color = document.getElementById('color-name');
        color.textContent=colorName;
    }
    
}
