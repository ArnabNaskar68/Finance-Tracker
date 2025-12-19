import { Link } from 'react-router-dom';
import {useState} from 'react';

export default function Home() {
  const [input, setInput] = useState("");
  const [tag, setTag] = useState(null);
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    if (!tag) {
      alert("No tag was marked");
    }

    const id = crypto.randomUUID();

    const valueSection = {
      id: id,
      value: input,
      tag: tag
    };
    setList(prev => [...prev, valueSection]);

    setInput("");
    setTag(null);
  };

  return (
    <div className='flex flex-row min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Sidebar */}
      <div className='w-1/3 bg-white shadow-lg rounded-r-3xl p-8 flex flex-col'>
        {/* Add Expense Section */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-6'>Add Expense</h1>
          <form onSubmit={handleInput} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Amount</label>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder='Enter amount'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                type='number'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-3'>Category</label>
              <div className='flex flex-col space-y-2'>
                <button
                  type='button'
                  onClick={() => setTag("Food")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 border ${tag === "Food" ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 hover:bg-blue-100 border-gray-200'}`}
                >
                  🍕 Food
                </button>
                <button
                  type='button'
                  onClick={() => setTag("Entertainment")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 border ${tag === "Entertainment" ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 hover:bg-blue-100 border-gray-200'}`}
                >
                  🎬 Entertainment
                </button>
                <button
                  type='button'
                  onClick={() => setTag("Lifestyle")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 border ${tag === "Lifestyle" ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 hover:bg-blue-100 border-gray-200'}`}
                >
                  🏠 Lifestyle
                </button>
              </div>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={!input || !tag}
            >
              Add Entry
            </button>
          </form>
        </div>

        {/* Entries Section */}
        <div className='flex-1'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>Recent Entries</h1>
          <div className='bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto'>
            {list.length === 0 ? (
              <p className='text-gray-500 text-center'>No entries yet</p>
            ) : (
              <ul className='space-y-3'>
                {list.map((item) => (
                  <li key={item.id} className='bg-white p-3 rounded-md shadow-sm border border-gray-200'>
                    <div className='flex justify-between items-center'>
                      <span className='font-medium text-gray-800'>${item.value}</span>
                      <span className='text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full capitalize'>{item.tag}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-8'>
        <div className='h-full bg-white rounded-l-3xl shadow-lg flex items-center justify-center'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Welcome to Finance Tracker</h2>
            <p className='text-xl text-gray-600 mb-8'>Manage your expenses with ease</p>
            <div className='grid grid-cols-3 gap-6 max-w-2xl mx-auto'>
              <div className='bg-blue-50 p-6 rounded-xl'>
                <div className='text-3xl mb-2'>📊</div>
                <h3 className='font-semibold text-gray-800'>Track Spending</h3>
                <p className='text-sm text-gray-600'>Monitor your daily expenses</p>
              </div>
              <div className='bg-green-50 p-6 rounded-xl'>
                <div className='text-3xl mb-2'>🏷️</div>
                <h3 className='font-semibold text-gray-800'>Categorize</h3>
                <p className='text-sm text-gray-600'>Organize by categories</p>
              </div>
              <div className='bg-purple-50 p-6 rounded-xl'>
                <div className='text-3xl mb-2'>📈</div>
                <h3 className='font-semibold text-gray-800'>Analyze</h3>
                <p className='text-sm text-gray-600'>View spending patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}