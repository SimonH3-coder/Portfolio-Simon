import SoMeFb from "../assets/SoMe-Fb.svg"
import SoMeInsta from "../assets/SoMe-Insta.svg"
import SoMeYouTube from "../assets/SoMe-Youtube.svg"

export function Footer() {
    return (
        <footer className="grid md:grid-cols-3 bg-[blue] text-[#ededed]">
            <ul className="flex flex-col font-[Roboto, sans-serif] items-start list-none m-8 p-0 ml-8 ">
                <h4 className= "text-[#e4b834] font-[Roboto, sans-serif] text-[2.5rem]  gap-4 my-2 mx-0 py-2 px-0"> Kontaktinfo </h4>
                <li>Simon H</li>
                <li>30 år</li>
                <li>Søren Norbys Vej 110</li>
                <li>9900 Frederikshavn</li>
                <li>tlf: 12 34 567 89</li>
                <li>email: outlook@hotmail.com</li>
            </ul>
            <ul className="flex flex-col font-[Roboto, sans-serif] items-start list-none m-8 p-0 ml-8">
            <h4 className="text-[#e4b834] font-[Roboto, sans-serif text-[2.5rem] my-2 mx-0 py-2 px-0">Interresser</h4>
            <li>Heavy Metal, rock & punk musik</li>
            <li>Fodbold Manchester United</li>
            <li> Løbe og gåture</li>
            <li>Læse bøger og tegneserier</li>
            <li>Spille PlayStation & computer</li>
            </ul>
            <div className="m-8 p-0 ml-8 mx-0 py-1 px-0">
                <h4 className="text-[#e4b834] font-[Roboto, sans-serif text-[2.5rem] ml-8 my-2 mx-0 py-2 px-0 ">Eksterne links</h4>
                <figure className="flex justify-between gap-4  px-[30%] mt-8 ">
                    <img className="w-[30px] h-auto" src={SoMeFb} alt="Facebook" />
                    <img className="w-[30px] h-auto" src={SoMeInsta} alt="Instagram" />
                    <img className="w-[30px] h-auto" src={SoMeYouTube} alt="YouTube" />

                </figure>
            </div>
                

        </footer>

    )
}