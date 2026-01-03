import { Link } from "react-router-dom";

const SignUp = ({ login }: any) => {

    console.log("SignIn component rendered");

    return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
            <h2 className="text-2xl font-bold text-center mb-6">Create Account ✨</h2>
            <input placeholder="Name" className="w-full mb-3 p-3 border rounded-lg" />
            
            <input placeholder="Email" className="w-full mb-3 p-3 border rounded-lg" />
            <input placeholder="Password" type="password" className="w-full mb-4 p-3 border rounded-lg" />
            <button onClick={login} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">Sign Up</button>
            <p className="text-center mt-4 text-sm">Already have an account? <Link to="/signin" className="text-indigo-600">Sign In</Link></p>
        </div>
    </div>
    );
}


export default SignUp;