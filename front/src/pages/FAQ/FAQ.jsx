import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "Qu'est ce que DoctoAnimals ?",
            a: "Tout simplement, DoctoAnimals est une application web qui permet de gérer les cabinets vétérinaires."
        },
        {
            q: "DoctoAnimals respecte t-il la confidentialité de mes données personnelles ? ",
            a: "Oui, DoctoAnimals respecte la confidentialité de vos données personnelles. Nous ne partageons pas vos données avec des tiers sans votre consentement."
        },
        {
            q: "Comment puis-je accéder à DoctoAnimals ?",
            a: "Vous pouvez accéder à DoctoAnimals en vous connectant à votre compte à l'aide de votre identifiant et de votre mot de passe."
        },
        {
            q: "Dois-je payer pour accéder à DoctoAnimals ?",
            a: "Non, DoctoAnimals est une application gratuite. Vous pouvez accéder à toutes les fonctionnalités de DoctoAnimals sans payer un centime."
        },
        {
            q: "Comment puis-je obtenir des questions aléatoires ?",
            a: "Vous pouvez obtenir des questions aléatoires en cliquant sur le bouton 'Obtenir des questions aléatoires' dans le menu principal."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Question Fréquemment Posées
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Trouvez les réponses à vos questions ici
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}