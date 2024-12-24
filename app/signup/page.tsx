export default function SignUpPage() {
    return (
      <div className="flex items-center justify-center w-auto h-auto p-10 bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Sudah punya akun?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    );
  }
  