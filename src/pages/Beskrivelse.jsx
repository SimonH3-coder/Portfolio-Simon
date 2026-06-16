import bird2 from '../assets/bird2.svg'

export function Beskrivelse() {
    return (
        <section >
            <div className="gap-0.5 grid md:grid-cols-1">
            <figure className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center">
            <img src={bird2} alt="fugl" />
            <figcaption className="text-[#333333] text-1xl font-[Roboto, sans-serif] my-4 mx-0 py-4 px-0">
            <h3 className="text-[#4f74bf] font-[Roboto, sans-serif] my-2 mx-0 py-2 px-0 text-[2rem]">Beskrivelse af mit uddannelseforløb</h3>
            <article>
                 <p className="my-2 mx-0 py-2 px-0">
                    Jeg er motiveret webudviklerelev, er i gang med hovedforløbet, som jeg startede på via grundforløb 
2 den 20. januar 2025. I skolen har jeg arbejdet med kodning og programmering via HTML, 
Javascript, React, typescript, CSS, SCSS og tailwind i Visual Studio Code. Programmerne postman, 
mysql og node.js for at hente, eksporter data fra Apier og lidt figma til design.  
            </p>
            <p className="my-2 mx-0 py-2 px-0">
                Har desuden arbejde med billeder i programmet Adobe Photoshop, lavet kunstig intelligens via AI 
med hjemmesiden Chatgpt, og har arbejdet med Github i forbindelse med projekter og opgaver i 
gruppearbejde og selvstændig med at sætte kode i mapper for at få struktur og ordne. 
            </p>
            <p className="my-2 mx-0 py-2 px-0">Med dette vil jeg ligge et stykke arbejde med udvikling og muligheder, der er med  hjemmesiden med 
indhold, design og styling indenfor frontende og backend. </p>
<p>
    Jeg vil se frem til en personlig samtale, hvor jeg vil uddybe mine personlige og faglige kompetencer 
yderligere. 
</p>

            </article>
            </figcaption>
            </figure>
           </div>
        </section>
    )
}