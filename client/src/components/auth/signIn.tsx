import { Link } from "react-router-dom";

const SignIn = ({ login }: any) => {

    console.log("SignIn component rendered");

    return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
            <h2 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h2>
            <input placeholder="Email" className="w-full mb-3 p-3 border rounded-lg" />
            <input placeholder="Password" type="password" className="w-full mb-4 p-3 border rounded-lg" />
            <button onClick={login} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">Sign In</button>
            <p className="text-center mt-4 text-sm">Don’t have an account? <Link to="/signup" className="text-indigo-600">Sign Up</Link></p>
        </div>
    </div>
    );
}

export default SignIn;  