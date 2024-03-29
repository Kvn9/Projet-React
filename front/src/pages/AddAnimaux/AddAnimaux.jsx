import Veterinaire from '../../../public/poisson.avif'
import { useState } from 'react'

export default function AddUser () {

    const [age, setAge ] = useState("");
    const [genre, setGenre] = useState("");
  
   const handleAddCabinet = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/animaux/insertAnimaux`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify({
                age,
                genre,
                
            })
        });
        const data = await response.json();
        console.log(data);
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
                            Ajouter Cabinet
                        </h3>
                        <p className="mt-3 text-black">
                            Ajouter les informations des cabinets
                        </p>
                    </div>
                    <form
                        onSubmit={handleAddCabinet}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Age
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setAge(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Genre
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setGenre(e.target.value)}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <button type='submit'
                        href="/admin"
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