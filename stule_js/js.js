/**
 * Created by hp on 26.03.2017.
 */
window.addEventListener('load',function () {
var z,k=0;
    function clickListening(event) {
        var click=event.target;
            if(click.matches('.fa1')&&k===0){
             k++;
            var s=document.createElement('img');
            s.src= 'images/13.png';

            z=s;
            var wrapp=document.querySelector('.faff1');

       s.classList.add('active');
       wrapp.parentNode.appendChild(s);
       }
        else if(click.matches('.fa2')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/пепперони_650х500.png';

            z=s;
            var wrapp=document.querySelector('.faff2');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa3')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/маргарита_650х500_sRZiDKn.png';

            z=s;
            var wrapp=document.querySelector('.faff3');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa4')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/ветчина-с-грибами_big.png';

            z=s;
            var wrapp=document.querySelector('.faff4');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa5')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/карбонара.png';

            z=s;
            var wrapp=document.querySelector('.faff5');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa6')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/прованс_мал.png';

            z=s;
            var wrapp=document.querySelector('.faff6');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa7')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/18.png';

            z=s;
            var wrapp=document.querySelector('.faff7');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa8')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/шпинат_и_фета_мал.png';

            z=s;
            var wrapp=document.querySelector('.faff8');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa9')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/13.png';

            z=s;
            var wrapp=document.querySelector('.faff9');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa10')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/пепперони_650х500.png';

            z=s;
            var wrapp=document.querySelector('.faff10');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa11')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/маргарита_650х500_sRZiDKn.png';

            z=s;
            var wrapp=document.querySelector('.faff11');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa12')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/ветчина-с-грибами_big.png';

            z=s;
            var wrapp=document.querySelector('.faff12');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa13')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/карбонара.png';

            z=s;
            var wrapp=document.querySelector('.faff13');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa14')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/прованс_мал.png';

            z=s;
            var wrapp=document.querySelector('.faff14');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else if(click.matches('.fa15')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/18.png';

            z=s;
            var wrapp=document.querySelector('.faff14');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }else if(click.matches('.fa16')&&k===0){
            k++;
            var s=document.createElement('img');
            s.src= 'images/шпинат_и_фета_мал.png';

            z=s;
            var wrapp=document.querySelector('.faff14');

            s.classList.add('active');
            wrapp.parentNode.appendChild(s);
        }
        else{
                z.parentNode.removeChild(z);
                k=0;
            }


    }


    document.body.addEventListener('click',clickListening);
});