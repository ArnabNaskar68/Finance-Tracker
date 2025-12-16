import {useState} from 'react';
export default function Authentication(){
    const [email, setEmail]=useState("");
    const [password, setPass]=useState("");

    const handleVerify=(e)=>{
        e.preventDefault();

        
    }
    return(
        <>
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <div className="bg-white w-96 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Authentication</h2>
                <form onSubmit={handleVerify} className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="email-address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}