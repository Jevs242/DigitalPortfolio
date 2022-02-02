
const grid = new Muuri('.grid',
{
    layout:{rounding: false}
})

window.addEventListener('load', () =>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('charge-image');

    const link = document.querySelectorAll('#category a');
    link.forEach((element) => {
        element.addEventListener('click', (event)=>{
            event.preventDefault();
            link.forEach((link)=>link.classList.remove('active'));
            event.target.classList.add('active');

            const category = event.target.innerHTML.toLowerCase();
            
            category === 'all' ? grid.filter('[data-category]') : grid.filter(`[data-category="${category}"]`);

        });
    })

    document.querySelector("#search-bar").addEventListener('input', (event) =>{
        const search = event.target.value.toLowerCase();
        grid.filter((item) => item.getElement().dataset.tag.includes(search));
    })

    const overlay = document.getElementById("overlay");

    

    document.querySelectorAll('.grid .item img').forEach((element) => {
        
        element.addEventListener('click', (event) =>
        {

            const route = element.getAttribute('sel');
            const page = event.target.getAttribute('page');
            const info = document.getElementById("info");
            if(page !== "")
            {
                info.classList.add('active');
            }
            else{
                info.classList.remove('active');
            }
            const description = element.parentNode.parentNode.dataset.description;
            overlay.classList.add('active');
            document.querySelector('#overlay a').href = page;
            document.querySelector('#overlay img').src = route;
            document.querySelector('#overlay .description').innerHTML = description;
        });
    });


    document.querySelector('#btn-closed-popup').addEventListener('click', () => {
        overlay.classList.remove('active');
    })

    overlay.addEventListener('click',(event) => {
        if(event.target.id === 'overlay')
        {
            overlay.classList.remove('active'); 
        }
    })

    const resume = document.getElementById("go-resume");

    resume.addEventListener('click',(event) => {
        if(event.target.id === 'go-resume')
        {
            window.open('assets/pdf/resume.pdf', '_blank');
        }
    })
});

new VenoBox({
  selector: '.venobox',
  spinner: 'wave',
  ratio:'full',

});

$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});
