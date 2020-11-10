// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { pictures } from './pictures';

let featuredPicture = document.querySelector('.featured');
function main(x)
{
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')";
    document.body.style.backgroundColor = "black";
    if(x.matches)
    {
        featuredPicture.innerHTML = "";
        for(let p of pictures)
        {
            let pictureThumb = document.getElementById('p' + p.id);
            pictureThumb.classList.add('hidden');
        }
        for(let p of pictures)
        {
            if(p.id > 3)
            {
                break;
            }
            else
            {
                document.getElementById('p' + p.id).style.width = "100%";
                document.querySelector('.pictures').style.width = "100%";
                let pictureThumb = document.getElementById('p' + p.id);
                pictureThumb.classList.remove('hidden');
                pictureThumb.innerHTML = `
                <img src ="${p.url}">
                `;
                pictureThumb.onclick = function () 
                {
                    selectPicture(p);
                    document.querySelector('.featured').style.width = "100%";
                }
            }
            
            
        }
    }
    else
    {
        featuredPicture.innerHTML = "";
        for (let p of pictures) 
        {
            document.getElementById('p' + p.id).style.width = "100%";
            document.querySelector('.pictures').style.width = "50%";
            let pictureThumb = document.getElementById('p' + p.id);
            pictureThumb.classList.remove('hidden');
            pictureThumb.innerHTML = `
            <img src ="${p.url}">
            `;
            pictureThumb.onclick = function () 
            {
                selectPicture(p);
                document.querySelector('.featured').style.width = "25%";
                document.querySelector('.item').style.marginLeft = "50%";
            }
            
        }
       
    }

    
}
function selectPicture(p)
{
    
    featuredPicture.innerHTML = `
    <div class = "item">
        <img src="${p.url}" id="img" style="float: left;">
        <div class = "caption">
            <h2>${p.title}</h2><br>
            <p>${p.description}</p>
        </div>
    </div>
    `;
}

let x = window.matchMedia("(max-width: 575px)");
main(x);
x.addListener(main);
