const btnNext = document.querySelectorAll('.btn-next');
const btnPrev = document.querySelectorAll('.btn-prev');
const TRANSLATE_PER_BOOK = 220;


btnNext.forEach((btn) => {    
    btn.addEventListener('click', (e)=> {
        const container = e.target.closest('.slider');       
        if (!container) return;

        container.querySelector('.btn-prev').style.display = "block";

        const books = container.querySelectorAll('.book');
        books.forEach((book) => {            
            const pos = +(book.style.transform.slice(11, -3) || 0) - TRANSLATE_PER_BOOK;            
            if (pos === (-TRANSLATE_PER_BOOK * (books.length - 2))) {
                btn.style.display = "none";                
            }
            
            book.style.transform = `translateX(${pos}px)`;
        })
    })
});

btnPrev.forEach((btn) => {    
    btn.addEventListener('click', (e)=> {
        const container = e.target.closest('.slider');
        
        if (!container) return;
        container.querySelector('.btn-next').style.display = "block";

        Array.from(container.children).slice(0, -2).forEach((book) => {
            // book.style.transform returns "" if the property not assigned before, 
            // else in this case it returns translate(VALUEpx) 
            // - the VALUE starts at index 11 and end before the third character from the end
            const pos = +(book.style.transform.slice(11, -3) || 0) + TRANSLATE_PER_BOOK;
            if (pos === 0) btn.style.display = "none";            
            console.log(pos);
            book.style.transform = `translateX(${pos}px)`;
        })
    })
});
