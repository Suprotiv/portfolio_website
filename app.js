const observer = new IntersectionObserver((entries)=>{
		entries.forEach((entry) =>{
			console.log(entry)
			if(entry.isIntersecting){
					entry.target.classList.add('show');
			}
			else
			{
				entry.target.classList.remove('show');
			}
		});
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));


window.addEventListener("scroll",function(){
	var header=document.querySelector("#navbar");
	header.classList.toggle("sticky",window.scrollY > 0);
})