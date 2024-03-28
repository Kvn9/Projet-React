import Veterinaire from '../../../public/veterinaire-1.avif'
import { useState } from 'react'

export default function ModifierUser () {

    const [email, setEmail] = useState("");
    const [nom, setNom ] = useState("");
    const [prenom, setPrenom] = useState("");

    const handleUptade = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/utilisateur/updateUtilisateur/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nom, prenom, email }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    return (
        <main className="flex overflow-hidden">
            <div className="flex-1 hidden lg:block">
                <img src={Veterinaire} className="w-full h-screen object-cover" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Modifier Utiliasteur
                        </h3>
                        <p className="mt-3 text-black">
                            Modifier les informations de l'utilisateur
                        </p>
                    </div>
                    <form
                        onSubmit={handleUptade}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Nom
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setNom(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Prénom
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setPrenom(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <button type='submit'
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}