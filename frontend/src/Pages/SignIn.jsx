import {useState} from 'react';
import {Link} from 'react-router-dom';
export default function SignIn(){
    const [email, setEmail]= useState("");
    const [password, setPass]= useState("");
    const [re_pass, setRePass]= useState("");

    const handleSignIn=(e)=>{
         e.preventDefault();
         //converting capital cases to lower case
        const correctEmail=email.toLowerCase();
        setEmail(correctEmail);

        //password criteria checking
        let sChar=0;
        let passLength=password.length;
        let emailLength=correctEmail.length;

        if(passLength==0 || emailLength==0){
            alert("email or password is empty");
        }
        
        if(passLength<8){ //checks the password size limit
            alert("Password should be of 8 characters");
        }
        if (!/[!@#$%^&*]/.test(password)) {
            alert("Add at least one special character");
            return;
        }
        if(!(sChar>=1)){ // validates if the password has atleast one Special Characters
            alert("Add Special Characters");
        }

        if(!(password===re_pass)){
            alert("password mismatched");
        }
        const userAuth={
            id:correctEmail,
            uniqueString:password
        }

        setEmail("");
        setPass("");
        setRePass("");

    }
    return(
        <>
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <div className="bg-white w-96 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Authentication</h2>
                <form onSubmit={handleSignIn} className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="email-address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
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
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="re-password">Re-Enter Password:</label>
                        <input
                            id="re-password"
                            type="password"
                            placeholder="password"
                            value={re_pass}
                            onChange={(e) => setRePass(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        SignIn
                    </button>
                </form>
                <p>
                    already have an account?
                    <Link to="/Authentication"
                    >LogIn
                    </Link></p>
            </div>
        </div>
        </>
    )
}