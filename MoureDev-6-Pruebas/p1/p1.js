//Aspect ration of an image
//Make a program that can calculate the aspect ratio of an image from an url (aspect ratio 16 : 9 = 1920 x 1080)
// URL = https://i.stack.imgur.com/FU78p.png



function getImgUrl(url){
    
    return new Promise((resolve, reject) =>{

        const img = new Image();
        img.onload = () => {

            resolve({
                wi : img.width,
                he: img.height
            });


        };


        img.onerror = () => {

            reject(new Error("Image not found"));

        };

        img.src = url;

    });

    

}


function accesSize(){
    var a,b;
    getImgUrl("https://www.elmueble.com/medio/2023/03/29/razas-de-perros_725466fb_230329160906_900x900.jpg")
    .then(size => { //Solving the promise creating an object SIZE
        
        a = size.wi;
        b = size.he;
        aspectRatio(a, b);

        
    })

    .catch(err => console.error(err));
    
    

}

function aspectRatio(w, h){
    
    var original_width = w;
    var original_height = h;
    var biggest = w > h ? w : h;
    var aspect_ratio_width = original_width , aspect_ratio_height = original_height;
    
   

    for(let i = 2; i <= biggest; i++){
        
        if(original_width % i == 0 && original_height % i == 0){
            
            aspect_ratio_width = original_width / i;
            aspect_ratio_height = original_height / i;

        };
    }

    console.log(aspect_ratio_width, aspect_ratio_height);
}


accesSize()

