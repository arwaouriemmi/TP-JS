function tentative ( t ){
    v=Math.floor(Math.random() * 10);
    for (var i=0;i<t;i++){
        mes=prompt('donner un entier  entre 0 et 10');
        if (mes==v){
            alert('succes ') ;
            break ;
        }
        else{
            alert('echec') ;
            if(i!=t-1){
            messa=confirm('voulez vous continuez !');}
            if (messa==false){break ;}
        }
    }
}
t=prompt('donner le nombre de tentative') ;
tentative(t);



