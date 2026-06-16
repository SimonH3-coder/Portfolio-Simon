import Picture1 from "../assets/picture1.jpg";
export function About() {

    return (
        <section >
            <div className="gap-0.5 grid md:grid-cols-1">
             
                <figure className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center w-800px height-auto py-4">
                    <img src={Picture1} alt="Billede af mig" />
                    <figcaption className="text-[#333333] text-1xl font-[Roboto, sans-serif] my-4 mx-0 py-4 px-0">
                    <h3 className="text-[#4f74bf] font-[Roboto, sans-serif] my-2 mx-0 py-2 px-0 text-[3rem]">Om mig</h3>
                    

                    
                     
                      <article>
                                <p className="my-2 py-2 px-0">
                Er en mand på 30 år som bor i Frederikshavn, som er flittig, grundig 
målrettet, stabil, pålidelig beslutsom, glad, fornuftig, detaljerig og 
har en god hukommelse. 
Af sprog taler jeg fyldende dansk, kan tale og forstå lidt engelsk og 
tysk. 
            </p>
            <footer className="flex justify-end">
                <a className="text-[#333333] text-base font-[Roboto, sans-serif] my-4 py-4" href="#">Læse mere</a>
            </footer>


                      </article>
 

</figcaption>
                </figure>
  
       

</div>
        </section>
      
    )
}