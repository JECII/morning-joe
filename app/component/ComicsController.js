app.controller('ComicsController', function(ComicsServices){
    
    var cc = this
    
    cc.comicsFromTheService = ComicsServices.comics;
    
    
    cc.test = 'Hello from the controller';
    
    
    
    
    
})