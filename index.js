function start() {
    with(document){
        let h1=String(getElementById('left_1').value);
        let h2=String(getElementById('left_2').value);
        let h3=String(getElementById('left_3').value);
        let h4=String(getElementById('left_4').value);
        let h5=String(getElementById('left_5').value);
        let h6=String(getElementById('left_6').value);
        let h7=String(getElementById('right_1').value);
        let h8=String(getElementById('right_2').value);
        let h9=String(getElementById('right_3').value);
        let h10=String(getElementById('right_4').value);
        let h11=String(getElementById('right_5').value);
        
        let result=0;
        let quality;
        if(h1 == 'Yerevan'){
            result++;
            getElementById('left_1').style.backgroundColor='Green'
        }else{
            getElementById('left_1').style.backgroundColor='Red'
        }
        if(h2 == 'Washington'){
            result++;
            getElementById('left_2').style.backgroundColor='Green'
        }else{
            getElementById('left_2').style.backgroundColor='Red'
        }
        if(h3 == 'Beijing'){
            result++;
            getElementById('left_3').style.backgroundColor='Green'
        }else{
            getElementById('left_3').style.backgroundColor='Red'
        }
        if(h4 == 'London'){
            result++;
            getElementById('left_4').style.backgroundColor='Green'
        }else{
            getElementById('left_4').style.backgroundColor='Red'
        }
        if(h5 == 'Madrid'){
            result++;
            getElementById('left_5').style.backgroundColor='Green'
        }else{
            getElementById('left_5').style.backgroundColor='Red'
        }
        if(h6 == 'Moscow'){
            result++;
            getElementById('left_6').style.backgroundColor='Green'
        }else{
            getElementById('left_6').style.backgroundColor='Red'
        }
        if(h7 == 'Berlin'){
            result++;
            getElementById('right_1').style.backgroundColor='Green'
        }else{
            getElementById('right_1').style.backgroundColor='Red'
        }
        if(h8 == 'Mexico City'){
            result++;
            getElementById('right_2').style.backgroundColor='Green'
        }else{
            getElementById('right_2').style.backgroundColor='Red'
        }
        if(h9 == 'Ottawa'){
            result++;
            getElementById('right_3').style.backgroundColor='Green'
        }else{
            getElementById('right_3').style.backgroundColor='Red'
        }
        if(h10 == 'Paris'){
            result++;
            getElementById('right_4').style.backgroundColor='Green'
        }else{
            getElementById('right_4').style.backgroundColor='Red'
        }
        if(h11 == 'Kyiv'){
            result++;
            getElementById('right_5').style.backgroundColor='Green'
        }else{
            getElementById('right_5').style.backgroundColor='Red'
        }
        if(result<=6){
            quality='Anbavarar'
            getElementById('hashiv').style.color='red'
            getElementById('patasxan').style.color='red'
        }

        if(result>=6){
            quality='Bavarar'
            getElementById('hashiv').style.color='yellow'
            getElementById('patasxan').style.color='yellow'
        }
        if(result>=9){
            quality='lav'
            getElementById('hashiv').style.color='green'
            getElementById('patasxan').style.color='green'
        }
        getElementById('hashiv').innerHTML=result;
        getElementById('patasxan').innerHTML=quality;
    }
}